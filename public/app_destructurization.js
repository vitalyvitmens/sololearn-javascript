function calcValues(a, b) {
  return [
    a + b,
    undefined, // a - b,
    a * b,
    a / b,
  ]
}

// console.log(42, 10)

// const [sum, , mult, ...other] = calcValues(42, 10)
const [sum, sub = 'no subtraction', mult, ...other] = calcValues(42, 10)

console.log(sum, mult, other)
console.log(sum, sub, mult, ...other)

// TODO: Objects
const person = {
  name: 'Егор',
  age: 14,
  address: {
    country: 'Belarus',
    city: 'Minsk',
  },
}

const {
  name: firstName = 'no name',
  age,
  address: { city: homeTown, country },
  car = 'no car',
} = person

console.log(firstName, age, homeTown, country, car)

const { name, ...info } = person
console.log(name, info)

function logPerson({ name: firstName = 'no name', age = 'no age' }) {
  console.log(`${firstName} (${age})`)
}

logPerson(person)
