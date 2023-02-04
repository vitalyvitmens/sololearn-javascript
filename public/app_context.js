function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Vladimir',
  age: 52,
  sayHello: hello,
  sayHelloWindow1: hello.bind(window),
  sayHelloWindow2: hello.bind(this),
  sayHelloDocument: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`),
      console.log(`Name is ${this.name}`),
      console.log(`Age is ${this.age}`),
      console.log(`Job is ${job}`),
      console.log(`Phone is ${phone}`),
      console.groupEnd()
  },
}

const lena = {
  name: 'Elena',
  age: 23,
}

// const fnLenaLogInfo = person.logInfo.bind(lena)
// fnLenaLogInfo('Frontend', '+375297777777')

// const fnLenaLogInfo2 = person.logInfo.bind(lena, 'Frontend', '+375297777777')
// fnLenaLogInfo2()

// person.logInfo.bind(lena, 'Frontend', '+375297777777')()
// person.logInfo.call(lena, 'Frontend', '+375297777777')
// person.logInfo.apply(lena, ['Frontend', '+375297777777'])

// TODO: ПРАКТИКА:
const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n
//   })
// }
// console.log(multBy(array, 10))

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n
  })
}

console.log(array.multBy(10))
