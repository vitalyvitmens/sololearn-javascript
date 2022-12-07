//TODO: Game Development with JS (Разработка игр с JS)
// Добро пожаловать на наш курс по разработке игр! В ходе этого курса мы научимся разрабатывать игры в Интернете. Мы начнем с основ HTML 5, CSS и JavaScript, а также покажем, как создавать настоящие веб-игры с нуля!

//TODO: Introduction (
// Введение:
// Добро пожаловать на наш курс по разработке игр!!!
// В ходе этого курса мы научимся разрабатывать игры в Интернете.
// Мы будем использовать базовые веб-технологии: HTML 5, CSS и JavaScript.
// Мы начнем с основ HTML 5, CSS и JavaScript, а также покажем, как создавать настоящие веб-игры с нуля!

//TODO: JavaScript (JavaScript)
// JavaScript — это язык программирования для Интернета. Его можно использовать для создания интерактивных элементов, создания раскрывающихся меню, обработки событий нажатия кнопок и многого другого!
// В нашем курсе мы будем использовать JavaScript для рисования фигур, графики, а также для создания анимации.

//TODO: Benefits of HTML (Преимущества HTML)
// Одним из самых больших преимуществ использования HTML/CSS/JavaScript является то, что он может работать на любом устройстве без необходимости в каком-либо дополнительном программном обеспечении! Это возможно, потому что он работает в браузере, как простой веб-сайт.
// Большинство современных браузеров поддерживают тот функционал, который мы будем использовать, благодаря чему наши игры запускаются даже на мобильных устройствах!

//TODO: Introduction (
// Введение
// Вот некоторые вещи, которые мы изучим в этом курсе:
// - HTML
// - CSS
// - JavaScript basics (Основы JavaScript)
// - Drawing on the web (Рисование в Интернете)
// - Animations (Анимации)
// - Game Loops (Игровые циклы)
// - Collision Detection (Обнаружение столкновений)
// - и многое другое!
// Если вы чувствуете, что вам нужна дополнительная информация, вы всегда можете обратиться к нашим учебникам по HTML, CSS и JavaScript, которые охватывают основные теги, синтаксис и концепции веб-разработки.

//TODO: HTML (HTML)
// Начнем с HTML.
// HTML расшифровывается как язык гипертекстовой разметки . _ _ _ Язык разметки использует теги для идентификации содержимого.
{
  /* <p> — это тег, используемый для создания абзаца текста.
Вот пример тега HTML: */
}
{
  /* <p> I'm a paragraph </p> */
}

//TODO: Tags (Теги)
// Большинство тегов имеют открывающий и закрывающий теги, между которыми размещается содержимое.
// Например, тег абзаца <p> должен иметь закрывающий тег </p> .
// Закрывающий тег создается с помощью косой черты / .
{
  /* <p> I'm a paragraph </p> */
}

//TODO: Basic HTML Document (Базовый HTML-документ)
// В HTML есть много разных тегов, которые служат своей цели.
// Базовый HTML-документ в Интернете имеет следующую структуру:
// Тег <html> определяет страницу, а тег <body> определяет основное содержимое HTML-документа и содержит все элементы страницы, такие как абзацы, таблицы, списки и т.д.
{
  /* <html>
   <body>
   </body>
</html> */
}

//TODO: HTML Headings (HTML-заголовки)
// Теперь давайте посмотрим на некоторые из основных элементов, которые мы можем создать.
// Заголовки используются для создания заголовков и подзаголовков на странице.
// HTML включает шесть уровней заголовков, ранжированных по степени важности.
// Это <h1>, <h2>, <h3>, <h4>, <h5> и <h6>. Следующий код определяет все заголовки:
{
  /* <html>
    <head>
        <title>first page</title>
    </head>
    <body>
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>
        <h4>This is heading 4</h4>
        <h5>This is heading 5</h5>
        <h6>This is heading 6</h6>
    </body>
</html> */
}

//TODO: Paragraphs (Параграфы, обзацы, пункты)
// Как мы уже видели, абзацы создаются с помощью тега <p> . На нашей странице
// может быть несколько тегов <p>:
{
  /* <h1>My Game</h1>
<p>This is fun</p>
<p>This is another text</p> */
}

//TODO: Line Break (Разрыв строки)
// Некоторые элементы HTML не имеют закрывающего тега. Например, тег <br /> используется для добавления разрыва строки:
// Приведенный ниже код создает абзац текста с разрывом строки.
// Как видите, теги HTML можно включать в другие теги для форматирования содержимого.
{
  /* <p>
Name: Player 1 <br />
Points: 42
</p> */
}

//TODO: Practice: HTML Basics (Практика: основы HTML)
// Давайте вспомним некоторые основные концепции HTML, которые вы можете применить к своему игровому проекту.
// 1. Заголовки используются для создания заголовков и подзаголовков на странице.
// HTML включает шесть уровней заголовков, ранжированных по степени важности.
// Это <h1>, <h2>, <h3>, <h4>, <h5> и <h6>.
// 2. Абзацы создаются с помощью тега <p>.
{
  /* <div class="box">
  some text
</div> */
}

//TODO: Практика: Welcome to Code Repo! (Добро пожаловать в репозиторий кода!)
// В этом проекте мы создадим игру Jumper с нуля.
// Мы начнем с базовой веб-структуры и перейдем к более сложной анимации и обработке событий по мере прохождения уроков!
// Просмотрите каждую задачу, напишите свой код, зафиксируйте его, чтобы сохранить прогресс, и продолжайте развивать проект на каждом этапе.
// Это будет весело, так что давайте начнем! Давайте начнем с базового HTML. Задания: 1. Добавить заголовок с текстом «My Jumper Game». 2. Добавьте абзац под заголовком, который гласит: «Веселая игра, похожая на птичку». Подсказка : добавьте заголовок и абзац, используя соответствующие теги, например:
{
  /* <h1>My Jumper Game</h1>
<p>A fun flappy-bird like game.</p> */
}

//TODO: HTML Attributes (HTML-атрибуты)
// Атрибуты предоставляют дополнительную информацию об элементе или теге, а также изменяют их. Большинство атрибутов имеют значение; значение изменяет атрибут.
// В этом примере значение «center» указывает, что содержимое внутри элемента p должно быть выровнено по центру:
// Атрибуты всегда указываются в начальном теге и появляются в парах name="value".
{
  /* <p align="center">
    This text is aligned to center
</p>
<p align="right">
    This text is aligned to right
</p> */
}

//TODO: Attribute Measurements (Измерения атрибутов)
// Тег <hr /> используется для создания простой горизонтальной линии.
// Например, мы можем изменить горизонтальную линию так, чтобы она имела ширину 50 пикселей. Это можно сделать с помощью атрибута ширины:
// Ширина элемента также может быть определена в процентах:
// Строка займет 50% ширины страницы.
{
  // <hr width="50px" />
  // <hr width="50%" />
}

//TODO: Images (Изображения, картинки)
// Изображения добавляются с помощью тега <img />.
// Атрибут src используется для определения URL-адреса изображения.
// Вот пример:
{
  //  <img src="http://www.sololearn.com/images/tree.jpg"
  //  height="150px" width="150px" />
}

//TODO: Image Resizing (Изменение размера изображения)
// Чтобы определить размер изображения, используйте атрибуты ширины и высоты . Значение может быть указано в пикселях или в процентах:
// Как видите, тег <img /> не нуждается в закрывающем теге.
//   <img src="http://www.sololearn.com/images/tree.jpg" height="150px" width="150px" />
// <br />
// <img src="http://www.sololearn.com/images/tree.jpg" height="50%" width="50%" />

//TODO: Summary (Резюме)
// HTML поддерживает множество других тегов, таких как кнопки, текстовые поля и т.д.
// Все они имеют одинаковую структуру: у них есть открывающий и закрывающий тег, и их можно изменять с помощью атрибутов. Вот почему понимание логики важнее, чем запоминание всех названий тегов, так как вы всегда можете поискать и найти нужный тег.
// Мы не будем рассматривать все теги, доступные в HTML. Вместо этого мы будем объяснять их по мере того, как сталкиваемся с соответствующим элементом в наших примерах и играх.

//TODO: Practice: Attributes (Практика: атрибуты)
// Пришло время пересмотреть некоторые вещи и попрактиковаться!
// Атрибуты предоставляют дополнительную информацию об элементе или теге, а также изменяют их. Большинство атрибутов имеют значение; значение изменяет атрибут. Например, align="center" перемещает содержимое в центр.
{
  /* <div class="box">
  some text
</div> */
}

//TODO: Практика: Attributes (Практика: атрибуты)
// Давайте добавим немного выравнивания к нашему заголовку и абзацу!
// Задача: Выровнять заголовок и абзац по центру страницы.
// Подсказка: используйте атрибут align="center" в начальных тегах, например:
{
  /* <h1 align"center">My Jumper Game</h1>
<p align"center">A fun flappy-bird like game.</p> */
}

{
  /* <h1>My Jumper Game</h1>
<p>A fun flappy-bird like game.</p> */
}

//TODO: CSS (Cascading Style Sheets)
// CSS означает каскадные таблицы стилей.
// CSS и HTML работают рука об руку:
// - HTML определяет структуру страницы.
// - CSS определяет стили.
// Мы научимся применять различные стили к элементам HTML!

// TODO: Inline CSS (Встроенный CSS)
// Использование встроенного стиля — один из способов вставки таблицы стилей.
// При использовании встроенного стиля уникальный стиль применяется к одному элементу. Чтобы использовать встроенный стиль, добавьте атрибут стиля к соответствующему тегу.
// В приведенном ниже примере показано, как создать абзац с серым фоном и белым текстом:
// Атрибут стиля может содержать несколько свойств CSS.
{
  //   <p style="color:white; background-color:gray;">
  //     This is an example of inline styling.
  // </p>
}

// TODO: CSS Styles (Стили CSS)
// Давайте снова посмотрим на код:
// Стили CSS внутри атрибута стиля имеют следующий формат:
// Каждое определение свойства заканчивается точкой с запятой.
{
  //   <p style="color:white; background-color:gray;">
  //     This is an example of inline styling.
  // </p>
}
{
  // property:value;
}

// TODO: CSS Properties (CSS-свойства)
// CSS поддерживает множество свойств, таких как: цвет, ширина, высота, граница и т.д. Например, давайте создадим абзац с заданной шириной и цветом фона:
// Как и в случае с HTML, в ходе нашего курса мы узнаем о других свойствах CSS.
{
  /* <p style="width:50px;background-color:red">
This is some text
</p> */
}

// TODO: External CSS (Внешний CSS)
// Другой способ определить CSS для HTML-страницы — создать отдельный файл CSS.
// Таким образом, все стили определяются в отдельном файле, который связан с HTML.
// Чтобы указать стиль для определенного элемента HTML, нам нужно его выбрать.
// Для этого нам нужно предоставить элементу HTML атрибут id. Например:
// Мы дали абзацу идентификатор, который можно использовать для его выбора в CSS.
// Значение идентификатора может быть любым.
{
  //   <p id="name">
  // Player One
  // </p>
}

// TODO: External CSS (Внешний CSS)
// Чтобы выбрать элемент с определенным идентификатором, используйте символ решетки, а затем укажите идентификатор элемента:
// Обратите внимание, что мы используем одно и то же свойство: значение; синтаксис при определении стилей CSS. Единственным отличием являются фигурные скобки, используемые для заключения стиля.
{
  /* <p id="name">Player One</p> */
}
// #name {
//   color: white;
//   background-color: blue;
// }

// TODO: External CSS (Внешний CSS)
// Селекторы классов работают аналогичным образом. Основное отличие состоит в том, что идентификаторы могут применяться только один раз на странице, а классы могут использоваться на странице столько раз, сколько необходимо. Например, допустим, нам нужно применить один и тот же стиль к двум абзацам, содержащим имена игроков:
// Таким образом, мы можем создать один стиль и применить его к нескольким элементам.
// Обратите внимание, что нам нужно использовать точку перед именем класса вместо хэша при использовании идентификатора.
{
  /* <p class="name">
  Player One
</p>
<hr />
<p class="name">
  Player Two
</p> */
}
// .name {
//   color: white;
//   background-color: blue;
// }

// TODO: Practice: CSS Basics (Практика: основы CSS)
// Давайте повторим некоторые элементы CSS и реализуем их в качестве следующего шага в нашем проекте. Вы можете связать стиль CSS с помощью тегов HTML , атрибутов id и имен классов. Например, приведенный выше код установит цвет и цвет фона заголовка:
{
  // <h1>My Game</h1>
}

//TODO: Практика: Adding CSS (Добавление CSS)
// Давайте сделаем нашу страницу красивее, добавив несколько цветов с помощью CSS! Задача: 1. Добавьте цвет фона на страницу: установите цвет #c3c3c3 . 2. Измените цвет заголовка на #4c6ebb . Подсказка: чтобы изменить цвет фона страницы, используйте тело в CSS, например:
// body {
//   background-color:#c3c3c3;
// }
// Точно так же установите цвет для заголовка:
{
  // h1 {
  //   color: #4c6ebb;
  // }
}

//TODO: JavaScript (JavaScript)
// Теперь, когда мы знаем, как создавать HTML-элементы и стилизовать их с помощью CSS, давайте познакомимся с JavaScript. Чтобы увидеть результаты наших примеров, нам нужно сгенерировать некоторый вывод. Для этого мы будем использовать функцию console.log(). Например:
// console.log('Hello!')
// Это выведет текст "Hello!" в консоль.
// Консоль является частью веб-браузера и позволяет вам регистрировать сообщения, запускать код JavaScript и просматривать ошибки и предупреждения.

//TODO: Text (Текст)
// Чтобы использовать текст в JavaScript, нам нужно заключить его в кавычки:
// Текст внутри кавычек называется строкой.
// Обратите внимание, что каждое выражение заканчивается точкой с запятой.

//TODO: Numbers (Числа)
// При работе с числами кавычки не нужны.
// В программировании целые числа называются целыми, а десятичные — числами с плавающей запятой.
// console.log(42)
// console.log(3.14)

//TODO: Variables (Переменные)
// В играх нам обычно нужно хранить какие-то значения и работать с ними во время игры.
// Это делается с помощью переменных, которые являются контейнерами для хранения значений.
// Переменные могут быть объявлены с использованием ключевого слова var:
// points — это имя нашей переменной, а 42 — это значение, которое она содержит.
// var points = 42
// console.log(points)

//TODO: Variables (Переменные)
// Мы можем использовать различные математические операторы с переменными. Для примера создадим две переменные, посчитаем их сумму и выведем результат в консоль.
// Переменные можно переназначать столько раз, сколько вы хотите, чтобы изменить их значение.
// var x = 8
// var y = 54

// console.log(x + y)

//TODO: Operators (Операторы)
// Вот список основных математических операторов с примерами:
// Как и в случае с математикой, вы можете использовать круглые скобки, чтобы определить, какие операции необходимо выполнить в первую очередь.
// См. Рис: Operators.png
// var x = (1 + 2) * 3
// console.log(x)

//TODO: Variables (Переменные)
// Другой способ объявить переменную — использовать ключевое слово let:
// Ключевое слово let является новым для JavaScript и имеет ряд преимуществ по сравнению с var. Например, переменные let нельзя повторно объявить, что упрощает поддержку кода и делает его менее подверженным ошибкам.
// let name = 'Player One'
// console.log(name)

//TODO: Decision Making (Принятие решения)
// Обычно наша программа должна принимать решения на основе некоторых значений.
// Например, останавливать игру, когда здоровье ниже 1, или повышать уровень на основе очков. Мы используем if, чтобы указать блок кода, который мы хотим выполнить, если заданное условие истинно.
// Операторы будут выполняться только в том случае, если заданное условие истинно.
// if (condition) {
//   statements
// }

//TODO: Decision Making (Принятие решения)
// Код сравнивает значение переменной работоспособности и выводит сообщение, если оно меньше 1.
// Если условие не истинно, операторы if не будут выполняться.
// let health = 0

// if (health < 1) {
//   console.log('Game Over')
// }

//TODO: Comparison Operators (Операторы сравнения)
// Ознакомьтесь с этой таблицей, чтобы увидеть разбивку операторов сравнения, которые вы можете использовать:
// См. Рис: ComparisonOperators.png

//TODO: Decision Making (Принятие решения)
// Мы можем использовать оператор else, чтобы указать блок кода, который будет выполняться, если условие ложно. Как это:
// В каждом блоке условий if может быть только один оператор else.
// if (expression) {
//   // executed if condition is true (выполняется, если условие истинно)
// } else {
//   // executed if condition is false (выполняется, если условие ложно)
// }

//TODO: Decision Making (Принятие решения)
// Вот пример, который выводит сообщение на основе значения баллов:
// Вы можете иметь сколько угодно операторов внутри if и else. Только не забудьте заключить их в фигурные скобки.
// let points = 42

// if (points >= 100) {
//   console.log('You Win!')
// } else {
//   console.log('Try Again')
// }

//TODO: Functions (Функции)
// Функция — это блок кода, предназначенный для выполнения определенной задачи.
// Например, в нашей игре могут быть такие функции, как hit(), levelUp(), shoot() и т.д.
// Цель функции состоит в том, чтобы создать ее один раз и вызвать ее несколько раз, когда это необходимо для выполнения определенных задач.

//TODO: Defining a Function (Определение функции)
// Чтобы определить функцию, используйте ключевое слово function, за которым следует имя, за которым следует набор скобок (). Код, который будет выполняться функцией, заключен в фигурные скобки {}.
// function name() {
//   //code to be executed
// }

//TODO: Functions (Функции)
// Давайте создадим функцию под названием « hit », которая выводит простое сообщение. Не забудьте круглые скобки после имени функции.
// function hit() {
//   console.log('Hit!')
// }

//TODO: Calling a Function (Вызов функции)
// После определения нашей функции мы можем вызывать ее в нашей программе столько раз, сколько захотим.
// Чтобы вызвать функцию, начните с имени функции, а затем заключите его в круглые скобки. Давайте вызовем нашу функцию hit() дважды:
// function hit() {
//   console.log('Hit!')
// }

// hit()
// hit()

//TODO: Parameters (Параметры)
// Функции могут иметь параметры, которые они могут использовать в своем коде.
// Параметры определяются в круглых скобках и могут использоваться как переменные в функции. Например, давайте добавим параметр мощности в нашу функцию hit():
// Обратите внимание, что мы использовали оператор + с текстом: это складывает два текста вместе и называется конкатенацией.
// function hit(power) {
//   console.log('Hit with ' + power)
// }

//TODO: Parameters (Параметры)
// Теперь при вызове функции нам нужно передать ей значение параметра мощности внутри скобок.
// Таким образом, мы можем вызывать нашу функцию с разными параметрами и генерировать на их основе разные результаты.
// Функции могут принимать несколько параметров. Для этого нам просто нужно разделить их запятыми, например: удар(сила, оружие)
// function hit(power, weapon) {
//   console.log('Hit with ' + power, weapon)
// }

// hit(42, 'shotgun')
// hit(8, 'an automatic weapon')

//TODO: Functions (Функции)
// JavaScript имеет несколько встроенных полезных функций. Например, функция alert() используется для создания окна сообщения.
// Мы рассмотрим некоторые другие функции в следующих уроках.
// alert('Game Over')

// function test(a, b) {
//   if (a > b) {
//     return a * b
//   } else {
//     return b / a
//   }
// }
// alert(test(5, 15))
// console.log(test(5, 15))

//TODO: Events (События)
// Функции обычно вызываются, когда происходит какое-либо событие, например, нажатие кнопки или клавиши клавиатуры. Допустим, у нас есть кнопка в нашем HTML и мы хотим вызвать нашу функцию, когда кнопка нажата. Как мы это делаем? Вот наша кнопка в HTML:
{
  /* <button id="myButton">
  Click me
</button> */
}

//TODO: Events (События)
// Чтобы обработать событие нажатия кнопки в JavaScript, нам сначала нужно получить ссылку на нее, используя ее идентификатор:
// Функция document.getElementById() позволяет вам выбрать элемент HTML, используя его атрибут id.
// Теперь btn — это переменная, которая ссылается на кнопку.
let btn = document.getElementById('myButton')
alert('JavaScript подключен!')
