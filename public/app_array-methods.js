const people = [
  { name: 'Vladimir', age: 53, budget: 40000 },
  { name: 'Iosif', age: 73, budget: 3400 },
  { name: 'Lavrentiy', age: 54, budget: 50000 },
  { name: 'Yuriy', age: 34, budget: 1800 },
  { name: 'Victor', age: 17, budget: 25000 },
  { name: 'Vasilisa', age: 16, budget: 2300 },
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
// people.forEach((person) => console.log(person))

// Map ES6
// const newPeople = people.map((person) => `${person.name} (${person.age})`)
// const newPeople2 = people.map((person) => person.age * 3)

// console.log(newPeople)
// console.log(newPeople2)

// // Filter ES5
// const adults = people.filter((person) => {
//   if (person.age >= 18) {
//     return true
//   }
// })
// console.log(adults)

// Filter ES6
const adults = people.filter((person) => person.age >= 18)
console.log(adults)

// // Reduce
// const amount = people.reduce((total, person) => {
//   return total + person.budget
// }, 0)
// console.log(amount)

// Reduce ES6
const amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount)

// Find
const iosif = people.find((person) => person.name === 'Iosif')
console.log(iosif)

const lowBudget = people.find((person) => person.budget < 2000)
console.log(lowBudget)

// FindIndex
const iosifIndex = people.findIndex((person) => person.name === 'Iosif')
console.log(iosifIndex)

// Практика:
const newAmount = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget),
    }
  })
  .reduce((total, person) => total + person.budget, 0)

console.log(newAmount)

// console.log(Object.values(people))
