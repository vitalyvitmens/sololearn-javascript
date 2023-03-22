const cars = ['БМВ', 'Мазда', 'Мерседес', 'Порше']
cars.unshift('Ауди')
const firstitem = cars.shift() // удаляет первый элемент массива
console.log(`firstItem: ${firstitem}`)
cars.push('Форд')

function addItemToEnd(arr, item) {
  return arr.push(item)
}

addItemToEnd(cars, 'Ягуар')

const lastItem = cars.pop() // удаляет последний элемент массива
console.log(`lastItem: ${lastItem}`)

const fib = [1, 1, 2, 3, 5, 8, 13, 21]
for (let car of cars) {
  console.log(car)
}

console.log(cars.reverse())

// Задача 1 (необходимо перевернуть строку)
const text = 'Привет, мы изучаем JavaScript'
console.log(text.split('').reverse().join(''))

const index = cars.indexOf('БМВ')
if (index in cars) {
  cars[index] = 'BMW'
} else {
  console.log(`Нет такого индекса в массиве cars`)
}
console.log(`index: №${index} = ${cars[index]}`)
console.log(cars)

for (let i of fib) {
  console.log(i)
}

console.log(`${cars.includes('BMW')} (Есть ли в массиве cars элемент BMW)`)
console.log(`${cars.includes('Жига')} (Есть ли в массиве cars элемент Жига)`)

console.log(cars.join(' ').toUpperCase())
const upperCaseCars = cars.map((car) => car.toUpperCase())
console.log(upperCaseCars)
console.log(cars)

const pow2Arr = fib.map((num) => num ** 2)
console.log(pow2Arr)
console.log(`Возводим в квадрат элементы массива fib: ${pow2Arr}`)

const pow2 = (num) => num ** 2
const sqrt_05 = (num) => num ** 0.5

const sqrtArr = pow2Arr.map(sqrt_05).map(pow2).map(Math.sqrt)
console.log(sqrtArr)
console.log(`Извлекаем квадратный корень из элементов массива fib: 
Возводим в квадрат элементы массива fib:
Снова извлекаем квадратный корень из элементов массива fib:
${sqrtArr}`)

const filter = fib.filter((num) => !(num % 2))
console.log(`Числа из массива fib которые деляться на 2 без остатка: ${filter}`)

const filterMore = fib.filter((num) => num > 5)
console.log(`Числа из массива fib которые > 5: ${filterMore}`)

const res = fib.reduce((acc, num) => (acc += num), 0)
console.log(res)

const people = [
  { name: 'Vladimir', age: 53, budget: 40000 },
  { name: 'Iosif', age: 73, budget: 6900 },
  { name: 'Lavrentiy', age: 54, budget: 50000 },
  { name: 'Yuriy', age: 34, budget: 1800 },
  { name: 'Egor', age: 14, budget: 300 },
  { name: 'Arina', age: 20, budget: 1000 },
]

let findedPerson
for (const person of people) {
  if (person.budget === 300) {
    findedPerson = person
    console.log(findedPerson)
    console.log(findedPerson.name)
  }
}

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

const person_object_2 = people.find((person) => person.budget === 300)
console.log(person_object_2)
console.log(person_object_2.name)

const allBudget = people
  .filter((person) => person.budget < 2000)
  .reduce((acc, person) => (acc += person.budget), 0)
console.log(allBudget)

// // ES5
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// //ES6
// for (person of people) {
//   console.log(person)
// }

// // ForEach ES5
// people.forEach(function (person, index, peopleArr) {
//   console.log(person)
//   // console.log(index)
//   // console.log(peopleArr)
// })

// ForEach ES6
// people.forEach((person, index, peopleArr) => console.log(person, index, peopleArr))

// Map ES6
// const newPeople = people.map((person) => `${person.name} (${person.age})`)
// const newPeople2 = people.map((person) => person.age * 3)

// console.log(newPeople.join('\n'))
// console.log(newPeople2.join('\n'))

// // Filter ES5
// const adults = people.filter((person) => {
//   if (person.age >= 18) {
//     return true
//   }
// })
// console.log(adults)

// Filter ES6
const peopleFilterAge = people.filter((person) => person.age >= 18)
console.log(peopleFilterAge)

// // Reduce
// const amount = people.reduce((total, person) => {
//   return total + person.budget
// }, 0)
// console.log(amount)

// Reduce ES6
const amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount)
console.log(people.reduce((acc, p) => acc + p.budget, 0))

// Find
const iosif = people.find((person) => person.name === 'Iosif')
console.log(iosif)
console.log(people.find((p) => p.name === 'Egor' && p.age === 14))
console.log(people.find((p) => (p.name, p.age) === ('Egor', 14)))

// FindIndex
const iosifIndex = people.findIndex((person) => person.name === 'Iosif')
console.log(iosifIndex)
console.log(people.findIndex((p) => p.age === 73))

// Практика:
const newAmount = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budgetSqrt: Math.sqrt(person.budget),
    }
  })
  .reduce((total, person) => total + person.budgetSqrt, 0)

console.log(newAmount)

const nA = people
  .filter((p) => p.budget < 1001)
  .map((p) => {
    return {
      info: `${p.name} (${p.age})`,
      budget: p.budget,
    }
  })
// .reduce((acc, p) => acc + p.budget, 0)
console.log(nA)

// console.log(Object.values(people))
