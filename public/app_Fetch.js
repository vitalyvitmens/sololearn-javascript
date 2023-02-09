// TODO: https://jsonplaceholder.typicode.com/

const requesrURL = 'https://jsonplaceholder.typicode.com/users'

async function sendRequest(method, url, body = null) {
  const headers = { 'Content-Type': 'application/json' }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  })
  if (response.ok) {
    return response.json()
  }
  const error = await response.json()
  const e = new Error('Что-то пошло не так')
  e.data = error
  throw e
}

// sendRequest('GET', requesrURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

const body = [
  { name: 'Vladimir', age: 53, job: 'Revolutionary', budget: 40000 },
  { name: 'Iosif', age: 73, job: 'General Secretary', budget: 6900 },
  { name: 'Lavrentiy', age: 54, job: 'General Commissioner', budget: 50000 },
  { name: 'Yuriy', age: 34, job: 'Spaceman', budget: 1800 },
  { name: 'Egor', age: 14, job: 'Schoolboy', budget: 300 },
  { name: 'Arina', age: 20, job: 'Student', budget: 1000 },
]

sendRequest('POST', requesrURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
