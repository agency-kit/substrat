import fs from 'fs'
import glob from 'glob'

const pathToOutputComponentsFile = './src/exports.js'

const nameMatch = /(?:(?!\/)\w+(?=\.vue))+/

let newList = ''

await glob("**/*.vue", {cwd: './src/components'},  (er, files) => {
  newList += '// Components\n'
  files.forEach((file) => {
    const fileName = file.match(nameMatch)[0]
    newList += `export {default as ${fileName}} from './components/${file}'\n`
  })

  fs.writeFileSync(pathToOutputComponentsFile, newList)
})


await glob("*.vue", {cwd: './src/layouts'},  (er, files) => {
  newList += '// Layouts\n'
  files.forEach((file) => {
    const fileName = file.match(nameMatch)[0]
    newList += `export {default as ${fileName}} from './layouts/${file}'\n`
  })

  fs.writeFileSync(pathToOutputComponentsFile, newList)
})
