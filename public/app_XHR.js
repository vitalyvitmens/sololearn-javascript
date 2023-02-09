// TODO: https://jsonplaceholder.typicode.com/
// УНИВЕРСАЛЬНЫЙ МЕТОД ПОДДЕРЖИВАЕМЫЙ НА ВСЕХ БРАУЗЕРАХ

const requesrURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url) // открываем запрос 'GET'

    xhr.responseType = 'json' // указываем xhr что нужно распарсить ответ, для получения не строки, а реального объекта, для возможности работы и взаимодействия с ним внутри JS
    xhr.setRequestHeader('Content-Type', 'application/json') // устанавливаем headers отправляемые с запросом

    xhr.onload = () => {
      // добавляем слушателя
      if (xhr.status >= 400) {
        // Если статус-код >= 400
        reject(xhr.response) // выбрасываем в консоль ошибку
      } else {
        resolve(xhr.response) // иначе (т.е. успех) - выводим ответ в консоль
      }
    }

    xhr.onerror = () => {
      // обрабатываем возможные ошибки
      reject(xhr.response) // выводим в консоль ошибку которая может содержаться в xhr.response. Если ошибок нет попадем в xhr.onload, если ошибка есть попадём в xhr.onerror
    }

    // xhr.send() // отправляем запрос 'GET' //! раскомментируй для запроса
    xhr.send(JSON.stringify(body)) // что бы отправить 'POST' добавляем в скобки объект body, который оборачиваем в JSON.stringify, чтобы не было в RequestPayload [object Object]
  })
}

// sendRequest('GET', requesrURL) //! раскомментируй для запроса
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

const body = [
  { name: 'Vladimir', age: 53, budget: 40000 },
  { name: 'Iosif', age: 73, budget: 6900 },
  { name: 'Lavrentiy', age: 54, budget: 50000 },
  { name: 'Yuriy', age: 34, budget: 1800 },
  { name: 'Egor', age: 14, budget: 300 },
  { name: 'Arina', age: 20, budget: 1000 },
]

sendRequest('POST', requesrURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
