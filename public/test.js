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

const arr1 = [1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8, 10]
const arr2 = ['*', 'S', 'T', 'A', 'L', 'I', 'N', '*']
const arr3 = ['!', '@', '#', '$', '%', '#', '!', '%']
const arr4 = ['1', '1', '1', '1', '1', '1', '1', '1']
const arr5 = [1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8, '10']

function arrayDiffer(arr) {
  const arrNonUniqValues = arr.filter((el, i) => i !== arr.indexOf(el))
  return arr.filter((i) => !arrNonUniqValues.includes(i))
}

// console.log(arrayDiffer(arr1))
// console.log(...arrayDiffer(arr2))
// console.log(arrayDiffer(arr3))
// console.log(arrayDiffer(arr4))
// console.log(arrayDiffer(arr5))

const arrayDifference = (arr) =>
  arr.filter((i) => !arr.filter((el, i) => i !== arr.indexOf(el)).includes(i))

// console.log(arrayDifference(arr1))
// console.log(...arrayDifference(arr2))
// console.log(arrayDifference(arr3))
// console.log(arrayDifference(arr4))
// console.log(arrayDifference(arr5))

let arrDifference = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i))

// console.log(arrDifference(arr1))
// console.log(...arrDifference(arr2))
// console.log(arrDifference(arr3))
// console.log(arrDifference(arr4))
// console.log(arrDifference(arr5))
// =============================================================================
// const array = ['Javascript', 'is', 'Awesome']
// array.push('!')
// // array.shift('!')
// array[0] = 'JS'
// console.log(array)
// =============================================================================
// function createFrameworkManager() {
//   const fw = ['Angular', 'React']

//   return {
//     print: function() {
//       console.log(fw.join(' '))
//     },
//     add: function(framework) {
//       fw.push(framework)
//     }
//   }
// }

// const manager = createFrameworkManager()
// manager.print()
// manager.add('VueJS')
// manager.print()
// =============================================================================
const fib = [1, 1, 2, 3, 5, 8, 13]

for (let i of fib) {
  setTimeout(() => {
    // console.log(i)
  }, 1000)
}
// =============================================================================
// const obj = {
//   name: 'Egor',
//   age: 14,
// }

// const proxy = new Proxy(obj, {
//   get(target, prop) {
//     return prop in target ? target[prop] : `Поля {${prop}} в объекте нет!`
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value
//     } else {
//       console.log(`Нет ${prop} в объекте ${target}`)
//     }
//   }
// })

// console.log(proxy.name)
// proxy.age = 15
// proxy.age2 = 15
// console.log(proxy.age)
// console.log(proxy.age2)
// =============================================================================

const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first()
setTimeout(second, 0)
third()
first()
first()
first()
first()
first()

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))
