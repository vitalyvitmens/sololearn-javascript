// Objects:
// const person = {
//   name: 'Vladimir',
//   age: 52,
//   job: 'Revolutionary',
// }

// const op = new Proxy(person, {
//   get(target, prop) {
//     // console.log('Target:', target)
//     // console.log('Prop:', prop)
//     console.log(`Getting prop ${prop}`)
//     if (!(prop in target)) {
//       return prop
//         .split('_')
//         .map((p) => target[p])
//         .join(' ')
//     }
//     return target[prop]
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value
//     } else {
//       throw new Error(`No ${prop} field in target`)
//     }
//   },
//   has(target, prop) {
//     // return ['age', 'name', 'job'].includes(prop)
//     return ['age', 'job'].includes(prop)
//   },
//   deleteProperty(target, prop) {
//     console.log('Deleting...', prop)
//     delete target[prop]
//     return true
//   },
// })

// // Functions
// const log = (text) => `Log: ${text}`

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log('Colling fn..')

//     return target.apply(thisArg, args).toUpperCase()
//   },
// })

// // Classes
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {
//     console.log('Construct...')

//     return new Proxy(new target(...args), {
//       get(t, prop) {
//         console.log(`Getting prop ${prop}`)
//         return t[prop]
//       },
//     })
//   },
// })

// const p = new PersonProxy('Maxim', 30)

// Примеры работы с Proxy:
// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? Object[prop] : defaultValue),
  })
}

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0
)

console.log(position)

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
  })
}

const data = withHiddenProps({
  name: 'Vladimir',
  age: 52,
  _uid: '1231231',
})

// Optimization
const userData = [
  { id: 1, name: 'Vladimir', job: 'Revolutionary', age: 52 },
  { id: 2, name: 'Elena', job: 'Student', age: 22 },
  { id: 3, name: 'Victor', job: 'Backend', age: 23 },
  { id: 4, name: 'Vasilisa', job: 'Teacher', age: 24 },
]

const index = {}
userData.forEach((i) => (index[i.id] = i))

const IndexArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach((item) => (index[item.id] = item))

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return (item) => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          case 'findById':
            return (id) => index[id]
          default:
            return arr[prop]
        }
      },
    })
  },
})

const users = new IndexArray([
  { id: 11, name: 'Vladimir', job: 'Revolutionary', age: 52 },
  { id: 22, name: 'Elena', job: 'Student', age: 22 },
  { id: 33, name: 'Victor', job: 'Backend', age: 23 },
  { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 },
])
