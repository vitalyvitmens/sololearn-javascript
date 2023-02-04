console.log('Start')

console.log('Start 2')

function timeout2sec() {
  console.log('function timeout2sec, after 2 seconds')
}

window.setTimeout(function () {
  console.log('Inside timeout, after 5 seconds')
}, 5000)

setTimeout(timeout2sec, 2000)

console.log('End')
