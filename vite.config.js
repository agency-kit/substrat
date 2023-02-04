import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import viteInspect from 'vite-plugin-inspect'
import buildStyle from './build/build-style'

export default defineConfig({
  plugins: [
    viteInspect(),
    vue({reactivityTransform: true}),
    Unocss(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        {'lodash' : [
          'debounce',
          'throttle'
        ]}
      ],
      dirs: [
        './src/components/atoms/*',
        './src/components/molecules/*',
        './src/layouts/*'
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components/', 'src/layouts/'],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
    Pages({
      extensions: ['vue'],
    }),
    buildStyle()
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/substrat.js'),
      name: 'substrat',
      // the proper extensions will be added
      fileName: 'substrat',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'temp-components.css';
          return assetInfo.name;
        },
      },
    },
  },
})
