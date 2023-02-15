// const IndexArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {}
//     args.forEach((item) => (index[item.id] = item))

//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case 'push':
//             return (item) => {
//               index[item.id] = item
//               arr[prop].call(arr, item)
//             }
//           case 'findById':
//             return (id) => index[id]
//           default:
//             return arr[prop]
//         }
//       },
//     })
//   },
// })

// const users = new IndexArray([
//   { id: 1, name: 'Vladimir', job: 'Revolutionary', age: 53 },
//   { id: 2, name: 'Iosif', job: 'General Secretary', age: 73 },
//   { id: 3, name: 'Lavrentiy', job: 'General Commissioner', age: 54 },
//   { id: 4, name: 'Yuriy', job: 'Spaceman', age: 34 },
// ])

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

function bindLog() {
  console.log(`${this.id} ${this.name} ${this.job} ${this.age}`)
}

const person1 = { id: 1, name: 'Vladimir', job: 'Revolutionary', age: 53 }
const person2 = { id: 2, name: 'Iosif', job: 'General Secretary', age: 73 }

// bind(person1, bindLog)()
// bind(person2, bindLog)()

// const title = 'HELLO'

// const isVisible = () => Math.random() > 0.5

// const template = `
//   ${isVisible() ? `<p>Visible</p>` : ''}
//   <h1 id='demo' style="color: red">${title}</h1>
// `

// console.log(template)

// const str = 'Hello '

// console.log(str.startsWith('He'))
// console.log(str.startsWith('o'))
// console.log(str.endsWith('lo '))
// console.log(str.endsWith('He'))
// console.log(str.includes('ell'))
// console.log(str.repeat(3))
// console.log(str.trim())
// console.log(str.trimEnd())
// console.log(str.trimStart())
// console.log(str.padStart(10, '1234'))
// console.log(str.padEnd(10, '*'))

// function average(arr) {
//   return arr.reduce((acc, i) => acc + i, 0) / arr.length
// }
// console.log(average([10, 20, 30, 40]))

// // TODO: Rest
// function average2(a, b, ...args) {
//   return args.reduce((acc, i) => acc + i, a + b) / (args.length + 2)
// }
// console.log(average2(10, 20, 30, 40))

//TODO: Set
const arr = [1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8]
// const set = new Set(arr)
// console.log(set)

// for (let i of arr) {
//   if (unique(i)) {
//     console.log(i)
//   }
// }

// console.log([1, 2, 3, 4, 4, 4, 5, 4, 1, 5, 4].filter((i) => i === unique(i)))

// console.log(Array.from(new Set([1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6]))) // [ 1, 2, 3, 4, 5, 6 ]

const array = [1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6];

const getUnique = (arr) => {
  return arr.filter((el, ind) => ind === arr.indexOf(el));
};

console.log(getUnique(array)); // => [ 1, 2, 3, 4, 5, 6 ]