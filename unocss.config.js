import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import clamp from './build/css-utils/clamp-generator'
import parse from './build/css-utils/token-parser'
import tokens from './src/styles/design-tokens.json'

export default defineConfig({
  theme: {
    substratColors: parse(tokens.colors.items),
    substratSpacing: parse(clamp(tokens.spacing.items)),
    substratFontSize: parse(clamp(tokens.fontSizes.items)),
    substratFontFamily: parse(tokens.fonts.items),
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    // presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  rules: [
    [/^uno$/, ([,], { theme }) => {
      let result = ''

      const groups = [
        { key: 'substratColors', prefix: 'color' },
        { key: 'substratSpacing', prefix: 'space' },
        { key: 'substratFontSize', prefix: 'size' },
        { key: 'substratFontFamily', prefix: 'font' },
      ]

      groups.forEach(({ key, prefix }) => {
        const group = theme[key]
        if (!group) return
        Object.keys(group).forEach((key) => {
          if (typeof group[key] !== 'string') return
          result += `--${prefix}-${key}: ${group[key]};`
        })
      })
      return result
    }]
  ],
  variants: [
    // hover:
    (matcher) => {
      if (!matcher.startsWith('hover:'))
        return matcher
      return {
        // slice `hover:` prefix and passed to the next variants and rules
        matcher: matcher.slice(6),
        selector: s => `${s}:hover`,
      }
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})