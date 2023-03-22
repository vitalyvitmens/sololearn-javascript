// TODO: Function

greet1('Лена')

// Function Declaration (данную функцию можно вызвать до инициализации)
function greet1(name) {
  console.log(`Привет 1 - ${name}!`)
}

// Function Expression (когда создаем функцию с кладываем её в переменную) (данную функцию нельзя вызвать до инициализации)
const greet2 = function greet2(name) {
  console.log(`Привет 2 - ${name}!`)
}

greet2('Лена')

// Анонимные функции
let counter = 0
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval)
  } else {
    console.log(++counter)
  }
}, 100)

// Стрелочные функции
// Преобразуем функцию Declaration ниже в стрелочные функции
// function greet(name) {
//   console.log(`Привет - ${name}!`)
// }

const arrow = (name) => {
  console.log(`Привет - ${name}!`)
}

const arrow2 = (name, age) => console.log(`Привет - ${name}! Тебе ${age} лет?`)

arrow('Лена')
arrow2('Лена', 25)

const pow2 = (num) => num ** 2

console.log(pow2(5))

// Параметры по умолчанию
const sum = (a = 41, b = a * 2) => a + b
console.log(sum())
console.log(sum(41, 1))

function sumAll(...all) {
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// Замыкания
function createMember(name) {
  return function (lastname) {
    console.log(`${name} ${lastname}`)
  }
}

const logWithLastName = createMember('Vladimir')
logWithLastName('Lenin')
