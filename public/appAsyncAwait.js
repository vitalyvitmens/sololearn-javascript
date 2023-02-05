const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms))
}
// delay(2000).then(() => console.log('Delay after 2 seconds'))

const url = 'https://jsonplaceholder.typicode.com/todos'

// TODO: Метод №1
// function fetchTodos() {
//   console.log('Fetch toto started...')
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json())
// }

// fetchTodos()
//   .then((data) => {
//     console.log('Data:', data)
//   })
//   .catch((err) => console.error(err))

// TODO: Метод №2. Это предыдущий метод №1 записанный при помощи Async, Await. Async function всегда возращает Promise. Оператор Await обрабатывает и ждет когда завершится Promise.
async function fetchAsyncTodos() {
  console.log('Fetch toto started...')
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data:', data)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Finally')
  }
}

fetchAsyncTodos()
