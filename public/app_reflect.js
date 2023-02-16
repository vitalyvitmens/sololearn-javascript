class Schoolboy {
  constructor(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`)
  }
}

class ProtoSchoolboy {
  school = 'СШ №199 (Сухарево)'
}

const schoolboy = Reflect.construct(
  Schoolboy,
  ['Egor', 14, 'Schoolboy']
  // ProtoSchoolboy
)
// console.log(schoolboy)
// console.log(schoolboy.__proto__ === Schoolboy.prototype)
// console.log(schoolboy.__proto__ === ProtoSchoolboy.prototype)

Reflect.apply(schoolboy.greet, { name: 'Tester' }, [])
console.log(Reflect.ownKeys(schoolboy))

// TODO: Модификация объекта Schoolboy:
schoolboy.height = 182
console.log(schoolboy)

// TODO: Запрет модификации объекта Schoolboy:
Reflect.preventExtensions(schoolboy)
schoolboy.weight = 50
console.log(schoolboy)

// TODO: Узнать возможна ли модификация (расширяемый ли объект) Schoolboy:
console.log(Reflect.isExtensible(schoolboy))
