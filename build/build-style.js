import 'zx/globals'

export default function () {
  return {
    name: 'build-styles',
    async closeBundle(id) {
      console.log('build styles plugin begin:')
      try {
        await $`postcss ./src/styles/main.css --config ./src/styles/postcss.config.js -o ./dist/main.css`
        await $`cat ./dist/main.css ./dist/temp-components.css > ./dist/temp-substrat.css`
        await $`postcss ./dist/temp-substrat.css --config ./src/postcss.config.js -o ./dist/substrat.css`
        await $`cp -r ./src/styles/themes ./dist/themes`
        await $`rm ./dist/temp-components.css && rm ./dist/main.css && rm ./dist/temp-substrat.css`
        console.log('build styles plugin complete.')
      }
      catch (e) {
        console.log('ERROR', e)
      }
    }
  }
}