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

bind(person1, bindLog)()
bind(person2, bindLog)()

function add(n) {
  return function(num) {
    console.log(num + n)
  }
}

const addOne = add(1)
const addTen = add(10)

addOne(10)
addTen(10)
