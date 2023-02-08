const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])
set.add(10).add(20).add(30).add(20)
// console.log(set)
// console.log(set.has(30))
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)

// console.log(set.values()) // одинаковый результат, для синхронизации с Map
// console.log(set.keys()) // одинаковый результат, для синхронизации с Map
// console.log(set.entries()) // entries() для проверки что методы values & keys выдают одно и тоже, для того что бы мы могли делать Map

// for (let key of set) {
//   console.log(key)
// }

// TODO: ========================================

function uniqValue(array) {
  // return [...new Set(array)]
  return Array.from(new Set(array))
}

console.log(uniqValue([1, 12, 2, 4, 4, 4, 4, 4, 5, 6, 6, 6]))

