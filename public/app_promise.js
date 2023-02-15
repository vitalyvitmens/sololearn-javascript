// console.log('Request data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// console.log('Request data...')

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working',
//     }
//     resolve(backendData)
//   }, 2000)
// })

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       // reject(data) // имитируем ошибку
//       resolve(data)
//     }, 2000)
//   })
// })
//   .then((clientData) => {
//     clientData.fromPromise = true
//     return clientData
//   })
//   .then((data) => {
//     console.log('Modified', data)
//   })
//   .catch((err) => {
//     console.error('Error:', err)
//   })
//   .finally(() => {
//     console.log('Finally')
//   })

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })
}

// sleep(2000).then(() => console.log('After 2 seconds'))
// sleep(3000).then(() => console.log('After 3 seconds'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race promises')
})

// TODO: Promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success')
//   }, 1000)
// })
// promise.then((data) => console.log(data))

const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms} ms`), ms)
    // setTimeout(() => reject(`Error! ${ms} ms`), ms)
  })

// delay(1000)
//   .then((data) => delay(2000))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('Finally'))

// async function asyncDelay() {
//   try {
//     const data = await delay(2000) // === .then((data) => delay(2000))
//     console.log(data)
//   } catch (e) {
//     console.log(e)
//   }
// }

// asyncDelay()

Promise.all([
  delay(1000),
  delay(500),
  delay(2000),
  delay(3000),
  delay(4000),
]).then((data) => console.log(data))

Promise.race([
  delay(1000),
  delay(500),
  delay(2000),
  delay(3000),
  delay(4000),
]).then((data) => console.log(data))
