function* strGenerators() {
  yield 'H'
  yield 'E'
  yield 'L'
  yield 'L'
  yield 'O'
}

const str = strGenerators()

function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

const num = numberGen(7)

// const iterator = {
//   [Symbol.iterator] (n = 10) {
//     let i = 0

//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false }
//         }
//         return { value: undefined, done: true }
//       },
//     }
//   },
// }

// for (let k of iterator) {
//   console.log(k)
// }

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}
for (let k of iter(6)) {
  console.log(k)
}
