const people = [
  { name: 'Vladimir', age: 53, budget: 40000 },
  { name: 'Iosif', age: 73, budget: 6900 },
  { name: 'Lavrentiy', age: 54, budget: 50000 },
  { name: 'Yuriy', age: 34, budget: 1800 },
  { name: 'Egor', age: 14, budget: 300 },
  { name: 'Arina', age: 20, budget: 1000 },
]

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
