// TODO: Spread
const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']
console.log(...citiesRussia, ...citiesEurope)

const allcities = [...citiesRussia, 'Вашингтон', ...citiesEurope]
console.log(allcities)

const citiesRussiaWithPopulation = {
  Moscow: 20,
  StPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
}

const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Prague: 3,
  Paris: 2,
}

console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation })

const numbers = [5, 37, 42, 17]
console.log(Math.max(...numbers))
console.log(Math.max.apply(null, numbers)) // старый способ

// Practice
const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(divs, Array.isArray(divs)) // false
console.log(nodes, Array.isArray(nodes)) // true
console.log(nodes)

// TODO: Rest
// Rest in function
function sum(a, b, ...rest) {
  return a + b + rest.reduce((acc, i) => acc + i, 0)
}

const numb = [1, 2, 3, 4, 5, 85]
console.log(sum(...numb))

// Деструктуризация c Rest
const [a, b, ...other] = numb
console.log(a, b, ...other)
console.log(a === numb[0]) // true
console.log(b === numb[1]) // true

// Rest in Object
const person = {
  name: 'Egor',
  age: 14,
  citY: 'Minsk',
  country: 'Belarus',
}

const { name, age, ...addres } = person
console.log(name, age, addres)
