const obj = {
  name: 'Vladimir',
  age: 53,
  job: 'Revolutionary',
}

const entr = [
  ['name', 'Vladimir'],
  ['age', 53],
  ['job', 'Revolutionary'],
]

// console.log(Object.entries(obj)) // функция entries() превращает Объект в Массив
// console.log(Object.fromEntries(entr)) // функция fromEntries() превращает Массив в Объект

const map = new Map(entr)
// console.log(map.get('job'))
// console.log(obj.job)
map.set('newField', 42).set(obj, 'Value of object').set(NaN, 'NaN ??') // добавить новые ключ-значения в Map
// console.log(map)
// console.log(map.get(NaN)) // из Map получить ключ NaN

// map.delete('job') // удалить из Map ключ 'job'
// console.log(map.has('job')) // есть ли ключ 'job' в Map
// console.log(map.size) // размер Map
// map.clear() // очистка Map
// console.log(map.size) // размер Map

// TODO: ================================================

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// for (let val of map.values()) {
//   console.log(val)
// }

// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach((val, key, mapArr) => console.log(val, key))

// TODO: ================================================

// // const arrMap = [...map]
// const arr2Map = Array.from(map)
// // console.log(arrMap)
// // console.log(arr2Map)

// const mapObj = Object.fromEntries(map)
// console.log(mapObj)

// TODO: ================================================

const users = [
  { name: 'Vladimir' },
  { name: 'Iosif' },
  { name: 'Lavrentiy' },
  { name: 'Yuriy' },
  { name: 'Egor' },
  { name: 'Arina' },
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))
  .set(users[3], new Date(new Date().getTime() + 6000 * 60))
  .set(users[4], new Date(new Date().getTime() + 7000 * 60))
  .set(users[5], new Date(new Date().getTime() + 8000 * 60))

function lastVisits(user) {
  return visits.get(user)
}

console.log(lastVisits(users[0]))
console.log(lastVisits(users[1]))
console.log(lastVisits(users[2]))
console.log(lastVisits(users[3]))
console.log(lastVisits(users[4]))
console.log(lastVisits(users[5]))

// TODO: Map
// const map = new Map([['a', 1]])

// console.log(map)
// console.log(map.get('a'))
// map.set('b', 2).set(NaN, 'Number').set(42, 'demo')
// console.log(map.get(NaN))
// // map.clear()
// // console.log(map)
// console.log(map.has(42))
// map.delete('b')
// console.log(map)
// console.log(map.size)

// console.log(map.keys())
// console.log(map.entries())
// console.log(map.values())
