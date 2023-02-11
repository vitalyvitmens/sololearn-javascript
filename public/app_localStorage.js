const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const object = {
  name: 'Egor',
  age: 14,
}

// localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Grigory'

// console.log(raw)
// console.log(typeof raw)
// console.log(JSON.parse(raw))

console.log(person)

// TODO: ==============================

window.addEventListener('storage', (event) => {
  console.log(event)
})
