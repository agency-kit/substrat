const modules = import.meta.glob('./components/**/*.vue')
const layouts = import.meta.glob('./layouts/**/*.vue')

const nameMatch = /(?:(?!\/)\w+(?=\.vue))+/
const components = []

for (const path in modules) {
    const fileName = path.match(nameMatch)[0]
    components.push(fileName)
}

for (const path in layouts) {
    const fileName = path.match(nameMatch)[0]
    components.push(fileName)
}

export default () => {
  return {
    type: 'component',
    resolve: (name) => {
      if (components.includes(name)){
        return { name, from: 'substrat' }
      }
    }
  }
}