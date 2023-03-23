const person = {
  name: 'Владимир',
  patronymic: 'Ильич',
  lastname: 'Ленин',
  age: 52,
  isProgrammer: false,
  languages: ['ru', 'en', 'de'],
  'complex key': 'Complex Value',
  ['key_' + (1 + 3)]: 'Computed Key', // key_4
  greet() {
    console.log(`Возраст ${this.lastname}а: ${this.age} года`)
  },
  info() {
    // console.log(this)
    console.info(
      `Инфа про чела: ${this.name} ${this.patronymic} ${this.lastname}`
    )
  },
}

// console.log(person)
// console.log(person.name)
// console.log(person['age'])
// console.log(person['age'] + ' года')
// console.log(person['complex key'])
// const ageKey = 'age'
// console.log(person[ageKey])
// person.greet()
// person.info()

// person.age++
// console.log(person.age)

// person.languages.push('by')
// console.log(person.languages)

// person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages = person.languages
// TODO: Деструктуризация
// const {name, age, languages} = person
// console.log(name, age, languages)

// const { name: personName = 'Влад', age: personAge = 0, languages: personLanguages = ['ru'] } = person // лучшая запись того что выше, с возможностью переименования переменных и присвоения значения в случае undefind
// console.log(personName, personAge, personLanguages)

// console.log(person)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key:', key),
//     console.log('value:', person[key],
//     )
//   }
// }

// console.log(person)

Object.keys(person).forEach((key) => {
  console.log('key:', key),
  console.log('value:', person[key])
})

Object.values(person).forEach((value) => {
  console.log('value:', value)
})

// TODO: Context
// person.info()

const logger = {
  keys() {
    console.log('Object Keys:', Object.keys(this))
  },
  values() {
    console.log('Object Values:', Object.values(this))
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      // стрелочная функция не создает свой собственный контекст, будет меньше проблем чем в случае keysAndValues_2
      console.log(`"${key}": ${this[key]}`)
    })
  },
  keysAndValues_2() {
    Object.keys(this).forEach(
      function (key) {
        console.log(`"${key}": ${this[key]}`)
      }.bind(this)
    )
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('------------ START ------------')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`)
      if (between && index !== array.length - 1) {
        console.log('-----------------------------')
      }
    })
    if (bottom) {
      console.log('------------ END ------------')
    }
  },
}
// const bound_keys = logger.keys.bind(person)
// const bound_values = logger.values.bind(person)

// bound_keys()
// bound_values()

// logger.keys.call(person)
// logger.values.call(person)
// logger.keysAndValues.call(person)
// logger.keysAndValues_2.call(person)
// logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])
// =============================================================================
const cityField = 'city'

const job = 'Schoolboy'

const person2 = {
  age: 14,
  name: 'Egor',
  job,
  [cityField + Date.now()]: 'Minsk',
  'country-live': 'Belarus',
  print: () => 'Person',
  toString() {
    return Object.keys(this)
      .filter((key) => key !== 'toString')
      .map((key) => this[key])
      .join(' ')
  },
}
console.log(person2)
console.log(person2.toString())
console.log(person2.print())

// TODO: Methods
const first = { a: 1 }
const second = { b: 2 }

// console.log(Object.is(20, '20'))

// const third = Object.assign({}, first, second, {
//   c: 3,
//   d: 4,
// })
// console.log(third)
// console.log(first)
// console.log(second)

// const obj = Object.assign({}, first, second, {
//   c: 3,
//   d: 4,
// })
// console.log(obj)
// const objEntries = Object.entries(obj)
// console.log(objEntries)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// const person = {
//   age: 14,
//   name: 'Egor',
//   job: 'Schoolboy',
// }

// for (let key in person) {
//   console.log(key)
// }

// for (let value in person) {
//   console.log(person[value])
// }

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`)
// }

// const array = [10, 20, 30, 40]
// const str = 'Hello'

// for (let item of array) {
//   console.log(item)
// }

// for (let item of str) {
//   console.log(item)
// }
