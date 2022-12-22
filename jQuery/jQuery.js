//TODO: jQuery
// Изучите все основные функции jQuery, в том числе сделайте свой веб-сайт более интерактивным, создайте эффекты и анимацию, обработайте события и многое другое!

//TODO: What is jQuery (Что такое jQuery)
// jQuery — это быстрая, небольшая и многофункциональная библиотека JavaScript.
// Это значительно упрощает такие вещи, как обход и манипулирование документами HTML, обработку событий и анимацию. Все возможности jQuery доступны через JavaScript, поэтому для понимания, структурирования и отладки кода необходимо хорошо разбираться в JavaScript.
// Если вы хотите изучить JavaScript, ознакомьтесь с нашим бесплатным учебным пособием по JavaScript.

//TODO: What is jQuery (Что такое jQuery)
// Во-первых, давайте рассмотрим пример манипуляции с HTML с помощью JavaScript.
// Чтобы получить элемент с id="start" и изменить его html на "Go", нам нужно будет сделать следующее:
// var el = document.getElementById("start");
// el.innerHTML = "Go";
// Чтобы проделать те же манипуляции с jQuery, нам понадобится всего одна строка кода:
// $("#start").html("Go");
// Вы узнаете о новом синтаксисе в следующих уроках, но, как видите, код намного короче и понятнее.
// Еще одним большим преимуществом jQuery является то, что вам не нужно беспокоиться о поддержке браузера, ваш код будет работать одинаково во всех основных браузерах, включая Internet Explorer 6!

//TODO: Getting Started (Начиная)
// Вы можете загрузить копию библиотеки jQuery с сайта www.jquery.com или, в качестве альтернативы, включить ее из CDN (сети доставки контента), такой как Google или Microsoft.
// Мы будем использовать CDN с официального сайта jQuery.
// Чтобы начать использовать jQuery, нам сначала нужно добавить его в head (заголовок) нашего HTML-документа с помощью тега script:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//     </body>
// </html>
// jQuery — это библиотека JavaScript, поэтому она имеет расширение .js

//TODO: Getting Started (Начиная)
// Хорошей практикой является дождаться полной загрузки и готовности HTML-документа, прежде чем работать с ним.
// Для этого мы используем событие ready объекта документа:
// $(document).ready(function () {
//   // jQuery code goes here
// })
// $ используется для доступа к jQuery. Отсюда код получает доступ к объекту документа и определяет функцию, которая будет вызываться при запуске события готовности документа.
// Это предотвращает запуск любого кода jQuery до завершения загрузки документа.
// Поскольку приведенный выше код используется почти во всех случаях при использовании jQuery, для его написания есть удобный ярлык:
// $(function () {
//   // jQuery code goes here
// })
// Этот код выполняет ту же задачу, что и более длинный код выше.
// Если синтаксис jQuery кажется немного запутанным, не волнуйтесь, мы подробно рассмотрим его.
// Отличная работа

//TODO: Getting Started (Начиная)
// Теперь, имея библиотеку jQuery в разделе head и определив событие готовности документа, мы можем начать нашу первую манипуляцию с jQuery! Давайте изменим содержимое элемента div.
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Page Title</title>
//     <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//   </head>
//   <body>
//     <div id="start">Start</div>
//   </body>
// </html>
// JavaScript:
// $(function () {
//   $('#start').html('Go!')
// })
// Это изменяет HTML-код элемента с id="start" на "Go!".

//TODO: Syntax (Синтаксис)
// jQuery используется для выбора (запроса) HTML-элементов и выполнения над ними «actions» (действий).
// Основной синтаксис: $("selector").action()
// - $ обращается к jQuery.
// - "selector" (селектор) находит элементы HTML.
// - затем action() (действие)  выполняется над элементом(ами).
// Например:
// $('p').hide() // hides all <p> elements (скрывает все элементы <p>)
// $('.demo').hide() // hides all elements with class="demo" (скрывает все элементы с class="demo")
// $('#demo').hide() // hides the element with id="demo" (скрывает элемент с id="demo")
// Возвращаясь к коду из нашего предыдущего примера:
// $('#start').html('Go!')
// Это выбирает элемент с id="start" и вызывает для него метод html(). Метод html() используется для изменения HTML-содержимого элемента.
// Если вы раньше использовали CSS, вы заметите, что jQuery использует синтаксис CSS для выбора элементов.

//TODO: Selectors (Селекторы)
// Давайте посмотрим на все селекторы jQuery.
// Как вы видели на предыдущем уроке, селекторы jQuery начинаются со знака доллара и круглых скобок: $().
// Самый простой селектор — это селектор элементов, который выбирает все элементы на основе имени элемента.
// $('div') // selects all <div> elements (выбирает все элементы <div>)
// Далее идут селекторы id и class, которые выбирают элементы по их id и имени класса:
// $('#test') // select the element with the id="test" (выбирает элемент с id="test")
// $('.menu') //selects all elements with class="menu" (выбирает все элементы с class="menu")

//TODO: Selectors (Селекторы)
// Вы также можете использовать следующий синтаксис для селекторов:
// $('div.menu') // all <div> elements with class="menu" (выбирает все элементы <div> с class="menu")
// $('p:first') // the first <p> element (выбирает первый элемент <p>)
// $('h1, p') // all <h1> and all <p> elements (выбирает все элементы <h1> и все элементы <p>)
// $('div p') // all <p> elements that are descendants of a <div> element (выбирает все элементы <p>, являющиеся потомками элемента <div>)
// $('*') // all elements of the DOM (выбирает все элементы DOM)
// Селекторы упрощают доступ к элементам HTML DOM по сравнению с чистым JavaScript.

//TODO: Useful Selectors (Полезные селекторы)
//   См. Рис: UsefulSelectors.png
// Не пытайтесь запомнить все это, просто знайте, что они существуют.
// Вы можете перечитать это, когда вам нужно будет узнать больше.

//TODO: Attributes (Атрибуты)
// Мы можем легко манипулировать атрибутами, назначенными элементам HTML, через jQuery.
// href, src, id, class, style — все это примеры атрибутов HTML.
// Метод attr() используется для получения значения атрибута.
// Например: HTML:
{
  /* <a href="www.sololearn.com">
   Click here
</a>  */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <a href="https://www.sololearn.com/">Click here</a>
//     </body>
// </html>
// JavaScript:
// $(function () {
//   var val = $('a').attr('href')
//   alert(val)
// })
// В приведенном выше коде мы выбрали и уведомили значение атрибута href элемента <a>.

//TODO: Attributes (Атрибуты)
// Метод attr() также позволяет нам установить значение атрибута, указав его в качестве второго параметра.
// Например:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <a href="https://www.sololearn.com/">Click here</a>
//     </body>
// </html>
// $(function () {
//   $('a').attr('href', 'http://www.jquery.com')
// })
// Это изменит атрибут href элемента <a> на предоставленное значение.

//TODO: Removing Attributes (Удаление атрибутов)
// Вы также можете удалить атрибуты из HTML-элементов.
// Метод removeAttr() используется для удаления любого атрибута элемента. В приведенном ниже примере мы удаляем атрибуты таблицы: border & class
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//        <table border="5" class="tbl" >
//            <tr>
//                <td>one</td>
//                <td>two</td>
//            </tr>
//            <tr>
//                <td>three</td>
//                <td>four</td>
//            </tr>
//        </table>
//     </body>
// </html>
// .tbl {
//   background-color:aqua;
//   font-weight:bold;
// }
// $(function () {
//   $('table').removeAttr('border')
//   $('table').removeAttr('class')
// })

//TODO: Get Content (Получить контент)
// Существует несколько методов управления содержимым HTML-элементов с помощью jQuery.
// Метод html() используется для получения содержимого выбранного элемента, включая разметку HTML. Например:
// HTML:
{
  /* <p>
  JQuery is <b>fun</b>
</p> */
}
// JS:
// $(function () {
//   var val = $('p').html()
//   alert(val)
// })
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p>JQuery is <b>fun</b></p>
//     </body>
// </html>
// Обратите внимание, что разметка HTML (теги <b>) также возвращается.
// Если вам нужно только текстовое содержимое без разметки HTML, вы можете использовать метод text():
// $(function () {
//   var val = $('p').text()
//   alert(val)
// })
// Методы html() и text() можно использовать для всех элементов HTML, которые могут содержать содержимое.

//TODO: Set Content (Установить содержимое)
// Одни и те же методы html() и text() можно использовать для изменения содержимого HTML-элементов.
// Содержимое, которое необходимо установить, предоставляется в качестве параметра метода, например:
// HTML:
{
  /* <div id="test">
   <p>some text</p>
</div> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <div id="test">
//             <p>some text</p>
//         </div>
//     </body>
// </html>
// JS:
// $(function () {
//   $('#test').text('hello! hello!') //меняем some text на hello! hello!
// })
// Приведенный выше код изменяет содержимое элемента с id="test" на "hello!".
// Если содержимое, которое вы устанавливаете, содержит разметку HTML, вы должны использовать метод html() вместо text().
// $(function () {
//   $('#test').html('hello!<b> hello!</b>') //меняем some text на hello! hello!
// })

//TODO: val() ( значение() )
// В предыдущем уроке мы видели, как можно манипулировать содержимым HTML-элементов с помощью методов text() и html().
// Другим полезным методом является метод val(), который позволяет нам получать и устанавливать значения полей формы, таких как текстовые поля, раскрывающиеся списки и подобные входные данные. Например:
// HTML:
{
  /* <input type="text" id="name" value="Your Name"> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <input type="text" id="name" value="Your Name">
//     </body>
// </html>
// JS:
// $(function () {
//   alert($('#name').val())
// })
//Точно так же вы можете установить значение поля, указав его в качестве параметра метода val() .
// Получение и установка значений полей формы очень полезны, когда вам нужно обрабатывать события формы и проверку. Мы расскажем о событиях позже в ходе курса.

//TODO: Summary (Резюме)
// Для получения и установки содержимого и атрибутов выбранных элементов HTML доступны следующие методы jQuery:
// text() - устанавливает или возвращает текстовое содержимое выбранных элементов.
// html() - устанавливает или возвращает содержимое выбранных элементов (включая HTML-разметку).
// val() - устанавливает или возвращает значение полей формы.
// attr() - устанавливает или возвращает значение атрибутов.
// removeAttr() - удаляет указанный атрибут.
// Пишите код и тестируйте каждый метод хотя бы один раз.

//TODO: Adding Content (Добавление контента)
// Как мы видели в предыдущих уроках, методы html() и text() можно использовать для получения и установки содержимого выбранного элемента. Однако при использовании этих методов для установки содержимого существующее содержимое теряется.
// В jQuery есть методы, которые используются для добавления нового содержимого к выбранному элементу без удаления существующего содержимого:
// append() - вставляет содержимое в конец выбранных элементов.
// prepend() - вставляет содержимое в начало выбранных элементов.
// after() - вставляет содержимое после выбранных элементов (с новой строки).
// before() - вставляет содержимое перед выбранными элементами (на новой строке).
// Давайте посмотрим на них в действии!

//TODO: Adding Content (Добавление контента)
// Метод append() вставляет содержимое В КОНЕЦ выбранного HTML-элемента.
// Например: HTML:
{
  /* <p id="demo">Hi</p> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p id="demo">Hi</p>
//     </body>
// </html>
// JS:
// $(function () {
//   $('#demo').append(' David')
// })
// Точно так же метод prepend() вставляет содержимое В НАЧАЛО выбранного элемента.
// $(function () {
//   $('#demo').prepend('David ')
// })
// Вы также можете использовать разметку HTML для содержимого.

//TODO: Adding Content (Добавление контента)
// Методы jQuery after() и before() вставляют содержимое ПОСЛЕ и ДО выбранного HTML-элемента. Например:
// HTML:
{
  /* <p id="demo">Hi</p> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p id="demo">Hi</p>
//     </body>
// </html>
// JS:
// $(function () {
//   $('#demo').before('<i>Some Title</i>')
//   $('#demo').after('<b>Welcome</b>')
// })
// Нажмите « Попробуйте сами» , чтобы поиграть с кодом!

//TODO: Adding New Elements (Добавление новых элементов)
// Методы append(), prepend(), before() и after() также можно использовать для добавления вновь созданных элементов. Самый простой способ создания нового HTML-элемента с помощью jQuery заключается в следующем:
// var txt = $('<p></p>').text('Hi')
// Приведенный выше код создает новый элемент <p>, который содержит текст Hi и присваивает его переменной с именем txt .
// Теперь мы можем использовать эту переменную в качестве параметра вышеупомянутых методов, чтобы добавить ее в наш HTML, например:
// HTML:
{
  /* <p id="demo">Hello</p> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p id="demo">Hello</p>
//     </body>
// </html>
// JS:
// $(function () {
//   var txt = $('<p></p>').text('Hi')
//   $('#demo').after(txt)
// })
// $(function () {
//   var txt = $('<b></b>').text('Hi')
//   $('#demo').after(txt)
// })
// Это вставит вновь созданный элемент <p> после абзаца #demo.
// Вы также можете указать несколько элементов в качестве аргументов для методов before(), after(), append(), prepend(), разделив их запятыми: $("#demo").append(var1, var2, var3).
// Упомянутый выше синтаксис для создания элементов можно использовать для создания любого нового элемента HTML, например, $("<div></div>") создает новый элемент div.

//TODO: Manipulating CSS (Управление CSS)
// jQuery имеет несколько методов для работы с CSS.
// Метод addClass() добавляет к выбранным элементам один или несколько классов. Например:
// HTML:
{
  /* <div>Some text</div> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <div>Some text</div>
//     </body>
// </html>
// CSS :
// .header {
//   color: blue;
//   font-size:x-large;
// }
// JS:
// $(function () {
//   $('div').addClass('header')
//   // $('div').after('<b>Welcome</b>')
// })
// Приведенный выше код присваивает элементу div класс "header".
// Чтобы указать несколько классов в методе addClass(), просто разделите их пробелами. Например, $("div").addClass("класс1 класс2 класс3").

//TODO: Manipulating CSS (Управление CSS)
// Метод removeClass() удаляет одно или несколько имен классов из выбранных элементов.
// Например:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <div class="header red">Some text</div>
//     </body>
// </html>
// .header {
//   color: blue;
//   font-size:x-large;
// }
// .red {
//   color: red;
//   font-weight: bold;
// }
// $(function () {
//   $('div').removeClass('red')
// })
// Приведенный выше код удаляет класс «красный» из элемента div.
// Опять же, можно указать несколько имен классов, разделив их пробелами.

//TODO: toggleClass() (переключить класс())
// Метод toggleClass() переключает добавление/удаление классов из выбранных элементов, что означает, что если указанный класс существует для элемента, он удаляется, а если он не существует, он добавляется.
// Чтобы продемонстрировать это в действии, мы будем обрабатывать событие нажатия кнопки для переключения класса. Мы узнаем больше о событиях и их синтаксисе в следующих модулях.
// HTML:
{
  /* <p>Some text</p>
<button>Toggle Class</button> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p>Some text</p>
//         <button>Toggle Class</button>
//     </body>
// </html>
// CSS:
// .red {
//   color:red;
//   font-weight: bold;
// }
// JS:
// $(function () {
//   $('button').click(function () {
//     $('p').toggleClass('red')
//   })
// })
// Приведенный выше код переключает имя класса на «красный» при нажатии кнопки.

//TODO: CSS Properties (CSS-свойства)
// Подобно методу html(), метод css() можно использовать для получения и установки значений свойств CSS. Например:
// HTML:
{
  /* <p>Some text</p> */
}
// CSS:
// p {
//   background-color:red;
//   color: white;
// }
// JS:
// $(function () {
//   alert($('p').css('background-color'))
//   $('p').css('background-color', 'blue')
// })
// Приведенный выше код предупреждает свойство background-color абзаца, а затем устанавливает для него синий цвет.

//TODO: Multiple Properties (Несколько свойств)
// Чтобы установить несколько свойств CSS, метод css() использует синтаксис JSON, а именно:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p>Some text</p>
//     </body>
// </html>
// css({"property": "value", "property": "value", ...});
// JS
// $(function () {
//   $('p').css({
//     'background-color': 'red',
//     'font-size': '300%',
//     'font-weight': 'bold',
//     color: 'blue',
//     padding: '20px',
//   })
// })
// Как видите, синтаксис состоит из пар «свойство»: «значение», которые разделены запятыми и заключены в фигурные скобки { }.
// Например:
// Это установит свойства цвета и размера шрифта абзаца.
// Вы можете указать любое количество свойств, используя этот синтаксис JSON.

//TODO: Dimensions (Размеры)
// Методы width() и height() можно использовать для получения и установки ширины и высоты элементов HTML. Давайте установим ширину и высоту div на 100 пикселей, а также установим для него цвет фона:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <div></div>
//     </body>
// </html>
// $(function () {
//   $('div').css('background-color', 'red')
//   $('div').width(100)
//   $('div').height(100)
// })

//TODO: Dimensions (Размеры)
// Методы width() и height() получают и устанавливают размеры без padding (отступов), borders (границ) and margins (и полей).
// Методы innerWidth() и innerHeight() также включают заполнение (padding).
// Методы externalWidth() и externalHeight() включают padding and borders (отступы и границы).
// Посмотрите это изображение, чтобы понять, как они работают: Следующий пример демонстрирует, как работают методы: HTML:
//  См. Рис: Dimensions.png
// HTML
{
  /* <div></div> */
}
// CSS:
// div {
//   width: 300px;
//   height: 100px;
//   padding: 10px;
//   margin: 20px;
//   border: 3px solid blue;
//   background-color: red;
//   color: white;
// }
// JS:
// $(function () {
//   var txt = ''
//   txt += 'width: ' + $('div').width() + ' '
//   txt += 'height: ' + $('div').height() + '<br/>'
//   txt += 'innerWidth: ' + $('div').innerWidth() + ' '
//   txt += 'innerHeight: ' + $('div').innerHeight() + '<br/>'
//   txt += 'outerWidth: ' + $('div').outerWidth() + ' '
//   txt += 'outerHeight: ' + $('div').outerHeight()

//   $('div').html(txt)
// })
// Запустите код, чтобы просмотреть значения, возвращаемые методами измерений.

//TODO: The DOM (объектная модель документа)
// Когда вы открываете любую веб-страницу в браузере, HTML-код страницы загружается и визуально отображается на экране.
// Для этого браузер строит объектную модель документа (DOM) этой страницы, которая является объектно-ориентированной моделью ее логической структуры.
// DOM документа HTML может быть представлен в виде вложенного набора блоков:
// См. Рис: DOM.png
// DOM представляет документ как древовидную структуру, в которой элементы HTML являются взаимосвязанными узлами дерева.
// Узлы могут иметь child (дочерние) узлы. Узлы на одном уровне дерева называются siblings (братьями и сестрами).
// Обход jQuery — это термин, используемый для описания процесса перемещения по DOM и поиска (выбора) элементов HTML на основе их отношения к другим элементам.
// jQuery упрощает просмотр DOM и работу с элементами HTML.

//TODO: DOM Traversal (Обход объектной модели документа)
// Например, рассмотрим HTML, представленный следующей структурой:
// См. Рис: DOMTraversal.jpg
// Элемент <html> является родителем <body> и предком всего, что находится под ним.
// Элемент <body> является родителем элементов <h1> и <a>.
// Элементы <h1> и <a> являются дочерними элементами элемента <body> и потомками <html>.
// Элементы <h1> и <a> являются одноуровневыми (у них один и тот же родитель). Резюме:
// ancestor (Предок) — это parent (родитель), дедушка и бабушка, прадедушка и т.д.
// descendant (Потомок) — это child (ребенок), внук, правнук и так далее. имеют одного и того же родителя.
// Понимание отношений между элементами DOM важно для правильного перемещения по DOM.
