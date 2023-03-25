const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')

h1.style.color = 'red'

h1.addEventListener('click', () => {
  if (h1.style.color === 'black') {
    h1.style.color = 'white'
    h1.style.backgroundColor = 'blue'
  } else {
    h1.style.color = 'black'
    h1.style.backgroundColor = 'yellow'
  }
})

h2.addEventListener('click', () => {
  if (h2.style.color === 'black') {
    h2.style.color = 'white'
    h2.style.backgroundColor = 'blue'
  } else {
    h2.style.color = 'black'
    h2.style.backgroundColor = 'yellow'
  }
})

h3.addEventListener('click', () => {
  if (h3.style.color === 'black') {
    h3.style.color = 'white'
    h3.style.backgroundColor = 'blue'
  } else {
    h3.style.color = 'black'
    h3.style.backgroundColor = 'yellow'
  }
})

h4.addEventListener('click', () => {
  if (h4.style.color === 'black') {
    h4.style.color = 'white'
    h4.style.backgroundColor = 'green'
  } else {
    h4.style.color = 'black'
    h4.style.backgroundColor = 'red'
  }
})

function addStyleTo(node, text, color, bgcolor, fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.backgroundColor = bgcolor
  node.style.fontSize = '40px'
  node.style.textAlign = 'center'
  node.style.padding = '2rem'
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

setTimeout(() => {
  addStyleTo(h1, 'УЧИТЬСЯ', 'black', 'yellow', '30px')
}, 500)

setTimeout(() => {
  addStyleTo(h2, 'УЧИТЬСЯ', 'black', 'yellow', '30px')
}, 1000)

setTimeout(() => {
  addStyleTo(h3, 'И ЕЩЁ РАЗ УЧИТЬСЯ', 'black', 'yellow', '30px')
}, 1500)

setTimeout(() => {
  addStyleTo(h4, '___ В.И. ЛЕНИН ___', 'black', 'red', '30px')
}, 2000)
