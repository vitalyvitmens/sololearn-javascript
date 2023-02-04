const person = Object.create(
  {
    calculateAge() {
      console.log('Age:', new Date().getFullYear() - this.birthYear)
    },
  },
  {
    name: {
      value: 'Vladimir',
      enumerable: true, // попадёт в цикл, значение станет итерируемым
      writable: true, // not immutable
      configurable: true, // позволяет манипулировать ключами объекта, например удалить поле name
    },
    birthYear: {
      value: 1870,
      enumerable: false, // не попадет в цикл, значение будет не итерируемым
      writable: false, // immutable
      configurable: false, // не позволяет манипулировать ключами объекта, например будет не возможно удалить поле name 
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        document.body.style.background = 'red'
        console.log('Set age', value)
      },
    },
  }
)

console.log(person)

// person.name = 'Maxim'

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('Key:', key, person[key])
  }
}
