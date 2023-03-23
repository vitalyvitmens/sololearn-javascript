// TODO: Array Methods (map, filter, reduce, findIndex, find)
console.log(`!!! Array Methods (map, filter, reduce, findIndex, find) !!!`)
const arrCars = ['БМВ', 'Мазда', 'Мерседес', 'Порше']

const arrFib = [1, 1, 2, 3, 5, 8, 13, 21]

const people = [
  { name: 'Vladimir', age: 53, budget: 40000 },
  { name: 'Iosif', age: 73, budget: 6900 },
  { name: 'Lavrentiy', age: 54, budget: 50000 },
  { name: 'Yuriy', age: 34, budget: 1800 },
  { name: 'Egor', age: 14, budget: 300 },
  { name: 'Arina', age: 20, budget: 1000 },
]

const upperCaseCars = arrCars.map((car) => car.toUpperCase())
console.log(upperCaseCars)

const pow2Arr = arrFib.map((num) => num ** 2)
console.log(pow2Arr)

const filter = arrFib.filter((num) => !(num % 2))
console.log(`Числа из массива fib которые деляться на 2 без остатка: ${filter}`)

const filterMore = arrFib.filter((num) => num > 5)
console.log(`Числа из массива fib которые > 5: ${filterMore}`)

const res = arrFib.reduce((acc, num) => (acc += num), 0)
console.log(`Сумма чисел массива arrFib: ${res}`)

const index_object = people.findIndex(function (person) {
  return person.budget === 300
})
console.log(people[index_object])
console.log(people[index_object].name)

const person_object = people.find(function (person) {
  return person.budget === 300
})
console.log(person_object)
console.log(person_object.name)

const allBudget = people
  .filter((person) => person.budget < 2000)
  .reduce((acc, person) => (acc += person.budget), 0)
console.log(
  `Сумма бюджета людей из массива people у которых бюджет < 2000: ${allBudget}руб`
)

// TODO: Object Methods (forEach)
console.log(`

!!! Object Methods (forEach) !!!`)
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

Object.keys(person).forEach((key) => {
  console.log('key:', key),
  console.log('value:', person[key])
})

Object.values(person).forEach((value) => {
  console.log('value:', value)
})
