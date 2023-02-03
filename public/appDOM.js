// TODO: DOM

// TODO: Объект window относится исключительно к браузеру!
// window.alert('Тоже самое что и alert() без windows')
// window.prompt('Как тебя зовут?')
// window.confirm('Тебе уже есть 18 лет?')
// window.setInterval(2000)

const heading = document.getElementById('home')
// const heading2 = document.getElementsByTagName('h2')[0] // старый метод
// const heading2 = document.getElementsByClassName('h2-class')[0] // старый метод
// const heading2 = document.querySelector('h2') // новый метод доступ по тегу возращает только 1 элемент
// const heading2 = document.querySelector('.h2-class') // новый метод доступ по классу возращает только 1 элемент
const heading2 = document.querySelector('#sub-home') // новый метод доступ по id возращает только 1 элемент
// console.log(heading2)
console.dir(heading2)

// const heading3 = heading2.nextElementSibling
// console.dir(heading3)

const h2List = document.querySelectorAll('h2')
console.log(h2List)
// const heading3 = h2List[1]
const heading3 = h2List[h2List.length - 2]
console.log(heading3)

const heading4 = h2List[h2List.length - 1]

setTimeout(() => {
  addStyleTo(heading, 'УЧИТЬСЯ', 'red', 'blue')
}, 2000)

setTimeout(() => {
  addStyleTo(heading2, 'УЧИТЬСЯ', 'red', 'blue')
}, 3500)

setTimeout(() => {
  addStyleTo(heading3, 'И ЕЩЕ РАЗ УЧИТЬСЯ!', 'red', 'blue')
}, 5000)

setTimeout(() => {
  addStyleTo(
    heading4,
    '_____ В.И. Ленин _____',
    'white',
    'rgb(21, 38, 117)',
    '3rem'
  )
}, 6500)

function addStyleTo(node, text, color, bgcolor, fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.fontStyle = 'italic'
  node.style.fontSize = '40px'
  node.style.textAlign = 'center'
  node.style.backgroundColor = bgcolor
  node.style.padding = '2rem'
  // falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

heading4.onclick = () => {
  if (heading4.style.color === 'white') {
    heading4.style.color = 'grey'
    heading4.style.backgroundColor = 'black'
    heading4.style.text = 'Б.С. Мицура'
  } else {
    heading4.style.color = 'white'
    heading4.style.backgroundColor = 'rgb(21, 38, 117)'
    heading4.style.text = '_____ В.И. Ленин _____'
  }
}

// console.dir(heading)
// console.log(heading.id)
// console.log(heading.textContent)
