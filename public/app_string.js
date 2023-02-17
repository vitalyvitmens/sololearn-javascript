// TODO: String
// =============================================================================
const title = 'HELLO'

const isVisible = () => Math.random() > 0.5

const template = `
  ${isVisible() ? `<p>Visible</p>` : ''}
  <h1 id='demo' style="color: red">${title}</h1>
`

console.log(template)
// =============================================================================
const str = 'Hello '

console.log(str.startsWith('He'))
console.log(str.startsWith('o'))
console.log(str.endsWith('lo '))
console.log(str.endsWith('He'))
console.log(str.includes('ell'))
console.log(str.repeat(3))
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())
console.log(str.padStart(10, '1234'))
console.log(str.padEnd(10, '*'))

function average(arr) {
  return arr.reduce((acc, i) => acc + i, 0) / arr.length
}
console.log(average([10, 20, 30, 40]))
// =============================================================================
