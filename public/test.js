// const obj = {
//   name: 'Vladimir',
//   age: 52,
//   job: 'Revolutionary',
// }

// const op = new Proxy(obj, {
//   get(target, prop) {
//     // console.log(`Getting prop ${prop}`)
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
//       throw new Error(`{${prop}} - No field in target`)
//     }
//   },
//   has(target, prop) {
//     return ['name', 'age', 'job'].includes(prop)
//     // return Object.keys(target).includes(prop)
//     // return Object.values(target).includes(prop)
//   },
//   deleteProperty(target, prop) {
//     console.log(`Deleting... ${prop}`)
//     delete target[prop]
//     return true
//   },
// })

// const log = (text) => `Log: ${text}`

// const fp = new Proxy(log, {
//   apply(target, thisArg, argArray) {
//     console.log('Calling fn...')

//     return target.apply(thisArg, argArray).toUpperCase()
//   },
// })

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
//       get(targ, prop) {
//         console.log(`Getting prop: '${prop}'`)
//         return targ[prop]
//       },
//       set(targ, args, value) {
//         if (args in targ) {
//           targ[args] = value
//         } else {
//           throw new Error(`No ${prop} field in target`)
//         }
//       },
//     })
//   },
// })

// const p = new PersonProxy('Maxim', 30)

function withDefaultValue(t, dv) {
  return new Proxy(t, {
    get(o, p) {
      return p in o ? o[p] : dv
    },
  })
}

const q = withDefaultValue(
  {
    x: 12,
    y: 24,
  },
  100
)

const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (o, p) => p in o && !p.startsWith(prefix),
    ownKeys: (o) => Reflect.ownKeys(o).filter((p) => !p.startsWith(prefix)),
    get: (o, p, r) => (p in r ? o[p] : void 0),
  })
}

const a = withHiddenProps({
  name: 'Vladimir',
  age: 25,
  _uid: '123949449',
})
