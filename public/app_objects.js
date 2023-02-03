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
// const { name: personName = 'Влад', age, languages } = person // лучшая запись того что выше, с возможностью переименования переменных и присвоения значения в случае undefind
// console.log(personName, age, languages)

// console.log(person)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key:', key),
//     console.log('value:', person[key],
//     )
//   }
// }

// console.log(person)

// Object.keys(person).forEach((key) => {
//   console.log('key:', key),
//   console.log('value:', person[key])
// })

// Object.values(person).forEach((value) => {
//   console.log('value:', value)
// })

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
