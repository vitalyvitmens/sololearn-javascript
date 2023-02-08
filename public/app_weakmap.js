let obj = { name: 'weakmap' }

// const arr = [obj]

// obj = null

// console.log(obj)
// console.log(arr[0])

const map = new WeakMap([[obj, 'obj data']]) // get set delete has
obj = null
// console.log(map.has(obj))
// console.log(map.get(obj))
// console.log(map)

// TODO: ===========================================

const cache = new WeakMap()

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now())
  }
  return cache.get(user)
}

let lena = { name: 'Elena' }
let alex = { name: 'Alex' }

cacheUser(lena)
cacheUser(alex)

lena = null
console.log(cache.has(lena))
console.log(cache.has(alex))