// TODO: Проксирование Objects:
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
//         .map((map_prop) => target[map_prop])
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
//     return ['age', 'name', 'job'].includes(prop)
//     // return Object.keys(target).includes(prop)
//     // return Object.values(target).includes(prop)
//   },
//   deleteProperty(target, prop) {
//     console.log('Deleting...', prop)
//     delete target[prop]
//     return true
//   },
// })

// TODO: Проксирование Functions
// const log = (text) => `Log: ${text}`

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log('Colling fn..')

//     return target.apply(thisArg, args).toUpperCase()
//   },
// })

// TODO: Проксирование Classes
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

// TODO: Примеры работы с Proxy. Рассмотрим 3 разные составляющие Proxy:
// TODO: Wrapper
function withDefaultValue(target, defaultValue = 0) {
  return new Proxy(target, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : defaultValue
    },
  })
}

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  12
)

console.log(position)
// =============================================================================
// TODO: Hidden properties
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
// =============================================================================
// TODO: Optimization
const userData = [
  { id: 11, name: 'Vladimir', job: 'Revolutionary', age: 52 },
  { id: 22, name: 'Elena', job: 'Student', age: 22 },
  { id: 33, name: 'Victor', job: 'Backend', age: 23 },
  { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 },
]

const index = {}
userData.forEach((i) => (index[i.id] = i))
console.log(index)
// =============================================================================
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
  { id: 1, name: 'Vladimir', job: 'Revolutionary', age: 53 },
  { id: 2, name: 'Iosif', job: 'General Secretary', age: 73 },
  { id: 3, name: 'Lavrentiy', job: 'General Commissioner', age: 54 },
  { id: 4, name: 'Yuriy', job: 'Spaceman', age: 34 },
])
// =============================================================================
// TODO: ES6 Proxy
const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Поля {${prop}} в объекте нет!`
  },

  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value)
    } else {
      console.log(
        `Длина должна быть 3 и больше символов, у Вас ${value.length} символа!`
      )
    }
  },
}

const form = {
  login: 'tester',
  password: '12345',
}

const formProxy = new Proxy(form, validator)
console.log(formProxy)
console.log(formProxy.login)
console.log(formProxy.password)
console.log(formProxy['username'])

formProxy.password = '12'
// formProxy.password = '123'
console.log(formProxy.password)
// =============================================================================
function log(message) {
  console.log(`[Log]: ${message}`)
}

const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray)
    } else {
      console.log(`Количество аргументов ${argArray.length}, должен быть один!`)
    }
  },
})

proxy('Custom message')
proxy()
proxy('Custom message', 'Success')
// =============================================================================
