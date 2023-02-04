// function createCalcFn(n) {
//   return function () {
//     console.log(1000 * n)
//   }
// }

// createCalcFn(42)()
// const calc = createCalcFn(42)
// calc()

// function createIncrementor(n) {
//   return function (num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(1)
// console.log(addOne(10))
// console.log(addOne(41))

// const addTen = createIncrementor(10)
// console.log(addTen(10))
// console.log(addTen(42))

// function urlGenerator(domain) {
//   return function (url) {
//     return `http://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(comUrl('netflex'))
// console.log(ruUrl('yandex'))

// function myBind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args)
//   }
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = { name: 'Михаил', age: 22, job: 'Frontend' }
// const person2 = { name: 'Елена', age: 19, job: 'SMM' }

// myBind(person1, logPerson)()
// myBind(person2, logPerson)()
