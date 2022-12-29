import 'zx/globals'

export default function () {
  return {
    name: 'build-styles',
    async closeBundle(id) {
      console.log('build styles plugin begin:')
      try {
        await $`postcss ./src/styles/main.css --config ./src/styles/postcss.config.js -o ./dist/main.css`
        await $`unocss ./src/**/*.vue --out-file ./dist/uno.css`
        await $`cat ./dist/main.css ./dist/uno.css ./dist/temp-components.css > ./dist/temp-substrat.css`
        await $`postcss ./dist/temp-substrat.css --config ./postcss.config.js -o ./dist/substrat.css`
        await $`rm ./dist/temp-components.css && rm ./dist/uno.css && rm ./dist/main.css && rm ./dist/temp-substrat.css`
        console.log('build styles plugin complete.')
      }
      catch(e) {
        console.log('ERROR', e)
      }
    } 
  }
}