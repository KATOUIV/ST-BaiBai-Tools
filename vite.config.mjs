import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 浏览器从 /scripts/extensions/third-party/<插件>/dist/index.js 加载,
// import 宿主 ST 模块时需要算出从 dist/ 回到 ST public/ 根的相对路径。
// `@sillytavern/scripts/xxx` -> `../../../../../scripts/xxx.js`,并标为 external,
// ST 自身的代码不会被打进包里,运行时浏览器直接走相对路径。
const relative_sillytavern_path = path.relative(
  path.join(__dirname, 'dist'),
  __dirname.substring(0, __dirname.lastIndexOf('public') + 'public'.length),
);

// ST 已在全局挂载的第三方库,避免重复打包(本插件目前直接用全局 $/toastr,不 import)。
const globals = {
  jquery: '$',
  lodash: '_',
  toastr: 'toastr',
};

const package_json = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const package_version = String(package_json.version ?? '');

export default defineConfig(({ mode }) => ({
  define: {
    __BBT_VERSION__: JSON.stringify(package_version),
    'process.env.NODE_ENV': JSON.stringify(mode === 'production' ? 'production' : 'development'),
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false',
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },

  plugins: [
    {
      name: 'sillytavern-resolver',
      enforce: 'pre',
      resolveId(id) {
        if (id.startsWith('@sillytavern/')) {
          return {
            id:
              path
                .join(relative_sillytavern_path, id.replace('@sillytavern/', ''))
                .replaceAll('\\', '/') + '.js',
            external: true,
          };
        }
        if (id in globals) {
          return { id, external: true };
        }
      },
    },
  ],

  build: {
    rollupOptions: {
      input: 'src/index.js',
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].[hash].chunk.js',
        assetFileNames: '[name].[ext]',
        globals,
      },
      external: id => id in globals,
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: mode === 'production' ? true : 'inline',
    minify: mode === 'production',
    target: 'esnext',
  },
}));
