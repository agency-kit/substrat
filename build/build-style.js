import 'zx/globals'

export default function () {
  return {
    name: 'build-styles',
    async closeBundle(id) {
      console.log('build styles plugin begin:')
      try {
        await $`postcss ./src/styles/main.css --config ./src/styles/postcss.config.js -o ./dist/main.css`
        await $`unocss ./src/**/*.vue --out-file ./dist/uno.css`
        // it may be possible to achieve this in uno.config.js
        let uno = fs.readFileSync('./dist/uno.css', 'utf-8')
        uno = uno.split('\n')
        uno.unshift('@layer utilities{\n')
        uno.push('\n}')
        uno = uno.join('\n')
        fs.writeFileSync('./dist/uno.css', uno)
        await $`cat ./dist/main.css ./dist/uno.css ./dist/temp-components.css > ./dist/temp-substrat.css`
        await $`postcss ./dist/temp-substrat.css --config ./src/postcss.config.js -o ./dist/substrat.css`
        await $`cp -r ./src/styles/themes ./dist/themes`
        await $`rm ./dist/temp-components.css && rm ./dist/uno.css && rm ./dist/main.css && rm ./dist/temp-substrat.css`
        console.log('build styles plugin complete.')
      }
      catch(e) {
        console.log('ERROR', e)
      }
    } 
  }
}