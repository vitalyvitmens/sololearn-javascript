const IndexArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach((item) => (index[item.id] = item))

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return (item) => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          case 'findById':
            return (id) => index[id]
          default:
            return arr[prop]
        }
      },
    })
  },
})

const users = new IndexArray([
  { id: 1, name: 'Vladimir', job: 'Revolutionary', age: 53 },
  { id: 2, name: 'Iosif', job: 'General Secretary', age: 73 },
  { id: 3, name: 'Lavrentiy', job: 'General Commissioner', age: 54 },
  { id: 4, name: 'Yuriy', job: 'Spaceman', age: 34 },
])
