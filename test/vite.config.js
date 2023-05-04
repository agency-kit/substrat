import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import viteInspect from 'vite-plugin-inspect'
import { SubstratResolver } from '@agency-kit/substrat'
import { presetUno, presetIcons } from 'unocss'

export default defineConfig({
  plugins: [
    viteInspect(),
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          scale: 1.2,
          warn: true,
        })]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [SubstratResolver()],
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
  ],
})
