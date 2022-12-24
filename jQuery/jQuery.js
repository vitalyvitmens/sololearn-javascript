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

//TODO: DOM Traversal (Обход объектной модели документа)
// jQuery имеет много полезных методов для обхода DOM.
// Метод parent() возвращает прямой родительский элемент выбранного элемента. Например:
{
  /* <div> div element
  <p>paragraph</p> 
</div> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//     <div> div element
//         <p>paragraph</p>
//     </div>
//     </body>
// </html>
// div {
//   padding: 10px;
// }
// p {
//   border: 1px solid black;
//   padding: 5px;
// }
// JS:
// $(function () {
//   var e = $('p').parent()
//   e.css('border', '2px solid red')
// })
// Приведенный выше код выбирает родительский элемент абзаца и устанавливает для него красную рамку.
// Запустите код, чтобы увидеть его в действии.

//TODO: DOM Traversal (Обход объектной модели документа)
// Метод parent() может перемещаться только на один уровень вверх по дереву DOM.
// Чтобы получить всех предков выбранного элемента, вы можете использовать метод parents(). Например:
// HTML:
{
  /* <body>  body
  <div style="width:300px;"> div
    <ul> ul
      <li> li
        <p>paragraph</p>
      </li>
    </ul>   
  </div>
</body> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>body
//         <div style="width:300px;">div
//             <ul>ul
//                 <li>li
//                     <p>paragraph</p>
//                 </li>
//             </ul>
//         </div>
//     </body>
// </html>
// body, div, ul, li {
//   padding: 5px;
//   margin: 15px;
// }
// p {
//   border: 1px solid black;
//   padding: 5px;
// }
// JS:
// $(function () {
//   var e = $('p').parents()
//   e.css('border', '2px solid red')
//   $('p').css({
//     'background-color': 'red',
//     'font-size': '200%',
//     'font-weight': 'bold',
//     color: 'blue',
//     padding: '10px',
//     border: '5px solid black',
//   })
// })
// Приведенный выше код устанавливает красную рамку для всех родителей абзаца. Некоторые из наиболее часто используемых методов обхода представлены ниже:
// См. Рис: DOMTraversal.png

//TODO: DOM Traversal (Обход объектной модели документа)
// Метод eq() можно использовать для выбора определенного элемента из нескольких выбранных элементов.
// Например, если на странице несколько элементов div и мы хотим выбрать третий:
// $("div").eq(2);
// Номера индексов начинаются с 0, поэтому первый элемент будет иметь номер индекса 0.

//TODO: Remove Elements (Удалить элементы)
// Удаляем выбранные элементы из DOM с помощью метода remove(). Например:
{
  /* <p style="color:red">Red</p>
<p style="color:green">Green</p>
<p style="color:blue">Blue</p> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p style="color:red">Red</p>
//         <p style="color:green">Green</p>
//         <p style="color:blue">Blue</p>
//     </body>
// </html>
// JS:
// $(function () {
//   $('p').eq(1).remove()
// })
// Это удаляет зеленый, второй элемент абзаца.
// Вы также можете использовать метод remove() для нескольких выбранных элементов, например, $("p").remove() удаляет все абзацы.
// Метод jQuery remove() удаляет выбранные элементы, а также их дочерние элементы.

//TODO: Removing Content (Удаление содержимого)
// Метод empty() используется для удаления дочерних элементов выбранного элемента(ов). Например:
// HTML:
{
  /* <div>
   <p style="color:red">Red</p>
   <p style="color:green">Green</p>
   <p style="color:blue">Blue</p>
</div> */
}
// CSS:
// div {
//   background-color: aqua;
//   width: 300px;
//   height: 200px;
// }
// JS:
// $(function () {
//   $('div').empty()
// })
// Это удаляет все три дочерних элемента div, оставляя его пустым.

//TODO: ЗАДАЧА: Removing Content (Удаление содержимого)
// Чтобы очистить второй дочерний элемент элемента с id="nav".
// $(function () {
//   var e = $('#nav').children()
//   e.eq(1).empty()
// })

//TODO: Handling Events (Обработка событий)
// JQuery предоставляет эффективный способ обработки событий. События происходят, когда пользователь выполняет действие, например, щелкает элемент, перемещает мышь или отправляет форму.
// Когда событие происходит на целевом элементе, выполняется handler function.
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//     </head>
//     <body>
//         <div id="demo">Click Me</div>
//     </body>
// </html>
// Например, предположим, что мы хотим обработать событие click для элемента с id="demo" и отобразить текущую дату при нажатии кнопки. Используя чистый JavaScript, код выглядит так:
// window.onload = function () {
//   var x = document.getElementById('demo')
//   x.onclick = function () {
//     document.body.innerHTML = Date()
//   }
// }
// Это же событие можно обработать с помощью jQuery со следующим кодом:
// $(function () {
//   $('#demo').click(function () {
//     $('body').html(Date())
//   })
// })
// Как видите, код jQuery короче, его легче читать и писать.
// Обратите внимание, что имя события предоставляется без префикса «on» (т.е. onclick в JavaScript — это click в jQuery).
// Функция, которая выполняется при возникновении события, называется обработчиком события.

//TODO: Common Events (Общие события)
// Ниже приведены наиболее часто используемые события:
// События мыши:
// - click (щелчок) происходит при щелчке элемента.
// - dblclick (двойной щелчок) возникает при двойном щелчке элемента.
// - mouseenter (вход мыши) возникает, когда указатель мыши находится над выбранным элементом (входит в него).
// - mouseleave (уход мыши) возникает, когда указатель мыши покидает выбранный элемент.
// - mouseover (наведен курсор мыши) происходит, когда указатель мыши находится над выбранным элементом.
// События клавиатуры:
// - keydown (нажатие клавиши) происходит при нажатии клавиши клавиатуры.
// - keyup (отпускание клавиши) происходит, когда клавиша клавиатуры отпускается.
// События формы:
// - submit (подать, предоставить) происходит при отправке формы.
// - change (изменение) происходит, когда значение элемента было изменено.
// - focus (фокус) возникает, когда элемент получает фокус.
// - blur (размытие) происходит, когда элемент теряет фокус.
// События документа:
// - ready (готовность) происходит, когда DOM был загружен.
// - resize (изменение размера) происходит, когда окно браузера меняет размер.
// - scroll (прокрутка) происходит, когда пользователь прокручивает указанный элемент.
// В качестве примера давайте изменим содержимое div, когда пользователь вводит текст в поле ввода. Для этого нам нужно обработать событие keydown, которое происходит при нажатии клавиши на клавиатуре:
// HTML:
{
  /* <input type="text" id="name" />
<div id="msg"></div> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <input type="text" id="name" />
//         <div id="msg"></div>
//     </body>
// </html>
// CSS:
// #msg {
//   color: blue;
//   font-size: 16pt;
//   font-weight: bold;
// }
// JS:
// $(function () {
//   $('#name').keydown(function () {
//     $('#msg').html($('#name').val())
//   })
// })
// Приведенный выше код обрабатывает событие нажатия клавиши для элемента с id="name" и присваивает содержимому div с id="msg" значение поля ввода.
// Названия событий говорят сами за себя, поэтому просто поэкспериментируйте, чтобы увидеть их в действии.

//TODO: ЗАДАЧА: Common Events (Общие события)
// Чтобы обработать событие щелчка по тегу абзаца.
// $(function () {
//   $('p').click(function () {
//     alert('Clicked!')
//   })
// })

//TODO: Handling Events (Обработка событий)
// Другой способ обработки событий в jQuery — использование метода on().
// Метод on() используется для присоединения события к выбранному элементу.
// Например:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p>Click Me</p>
//     </body>
// </html>
// $(function () {
//   $('p').on('click', function () {
//     alert('clicked')
//   })
// })
// Как видите, имя события передается в качестве первого аргумента метода on(). Второй аргумент — это функция-обработчик.
// Метод on() полезен для привязки одной и той же функции-обработчика к нескольким событиям. Вы можете указать несколько имен событий, разделенных пробелами, в качестве первого аргумента. Например, вы можете использовать один и тот же обработчик событий для событий click и dblclick.

//TODO: off() (выключенный())
// Вы можете удалить обработчики событий, используя метод off().
// Например:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <div>Click Me</div>
//     </body>
// </html>
// Аргументом метода off() является имя события, для которого вы хотите удалить обработчик.
// $(function () {
//   $('div').on('click', function () {
//     alert('Hi there!')
//   })
//   $('div').off('click')
// })

//TODO: The Event Object (Объект события)
// Каждая функция обработки событий может получать event object (объект события), который содержит свойства и методы, связанные с событием:
// - pageX, pageY положение мыши (координаты X и Y) в момент возникновения события относительно верхнего левого края страницы.
// - type (тип события) введите тип события (например, "click").
// - which (какая) какая кнопка или клавиша была нажата.
// - data (данные) любые данные, которые были переданы, когда событие было привязано.
// - target (цель) нацельтесь на элемент DOM, который инициировал событие.
// - preventDefault() (предотвращение по умолчанию) предотвращает действие события по умолчанию (например, переход по ссылке).
// - stopPropagation() (остановить распространение) Остановить распространение события на другие элементы.
// Вы можете ознакомиться с нашим курсом JavaScript для получения дополнительной информации о свойствах событий.
// Например, давайте обработаем событие click для элемента <a> и предотвратим его переход по ссылке, предоставленной в атрибуте href:
// HTML:
{
  /* <a href="https://www.sololearn.com">Click me</a> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <a href="https://www.sololearn.com">Click me</a>
//     </body>
// </html>
// JS:
// $(function () {
//   $('a').on('click', function (event) {
//     alert(event.pageX)
//     event.preventDefault()
//   })
// })
// Приведенный выше код предупреждает о положении мыши во время щелчка и предотвращает переход по ссылке.
// Как видите, объект события передается функции обработчика события в качестве аргумента.

//TODO: Trigger Events (Триггерные события)
// Мы также можем инициировать события программно, используя метод trigger(). Например, вы можете инициировать событие щелчка без фактического нажатия пользователем на элемент:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <div>Click me</div>
//     </body>
// </html>
// $(function () {
//   $('div').on('click', function () {
//     alert('Clicked!')
//   })
//   $('div').trigger('click')
// })
// Этот код запускает событие click для выбранного элемента.
// Метод trigger() нельзя использовать для имитации собственных событий браузера, таких как нажатие на поле ввода файла или тег привязки. Можно обрабатывать только события в системе событий jQuery.

//TODO: To-Do List (Список дел)
// Давайте создадим проект списка дел, используя изученные концепции.
// Список дел сможет добавлять новые элементы в список, а также удалять существующие элементы.
// Сначала мы создаем HTML:
// <h1>My To-Do List</h1>
// <input type="text" placeholder="New item" />
// <button id="add">Add</button>
// <ol id="mylist"></ol>
// Щелчок по кнопке должен добавить значение поля ввода в наш список <ol>.

//TODO: To-Do List (Список дел)
// Теперь, когда HTML готов, мы можем начать писать наш код jQuery.
// Во-первых, мы обрабатываем событие click для кнопки:
// $(function () {
//   $('#add').on('click', function () {
//     //event handler
//   })
// })
// Внутри обработчика события мы выбираем значение поля ввода и создаем новый элемент <li>, добавляя его в список:
// var val = $('input').val()
// if (val !== '') {
//   var elem = $('<li></li>').text(val)
//   $(elem).append("<button class='rem'>X</button>")
//   $('#mylist').append(elem)
//   $('input').val('') //clear the input
// }
// Приведенный выше код принимает значение поля ввода и присваивает его переменной val. Оператор if проверяет, не является ли значение пустым, а затем создает новый элемент <li>. Добавляется кнопка для его удаления, после чего вновь созданный элемент добавляется в список <ol id="mylist">. Вот полный код в действии:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>My To-Do List</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <h1>My To-Do List</h1>
//         <input type="text" placeholder="New item" />
//         <button id="add">Add</button>
//         <ol id="mylist"></ol>
//     </body>
// </html>
// CSS:
// h1 {
//   color: #1abc9c;
// }
// .rem {
//   margin-left: 5px;
//   background-color: white;
//   color: red;
//   border: none;
//   cursor: pointer;
// }
// $(function () {
//   $('#add').on('click', function () {
//     var val = $('input').val()
//     if (val !== '') {
//       var elem = $('<li></li>').text(val)
//       $(elem).append("<button class='rem'>X</button>")
//       $('#mylist').append(elem)
//       $('input').val('')
//     }
//   })
// })
// Кнопка удаления пока не работает. Мы разберемся с этим в следующем разделе!

//TODO: To-Do List (Список дел)
// Все, что осталось сделать, это обработать событие click на кнопке class="rem" и удалить соответствующий элемент <li> из списка.
// $('.rem').on('click', function () {
//   $(this).parent().remove()
// })
// Помните, что это текущий объект. Приведенный выше код удаляет родителя текущего объекта, который в нашем случае является родителем кнопки удаления, элемента <li>. Полный код:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>My To-Do List</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <h1>My To-Do List</h1>
//         <input type="text" placeholder="New item" />
//         <button id="add">Add</button>
//         <ol id="mylist"></ol>
//     </body>
// </html>
// CSS:
// h1 {
//   color: #1abc9c;
// }
// .rem {
//   margin-left: 5px;
//   background-color: white;
//   color: red;
//   border: none;
//   cursor: pointer;
// }
// $(function () {
//   $('#add').on('click', function () {
//     var val = $('input').val()
//     if (val !== '') {
//       var elem = $('<li></li>').text(val)
//       $(elem).append("<button class='rem'>X</button>")
//       $('#mylist').append(elem)
//       $('input').val('')
//       $('.rem').on('click', function () {
//         $(this).parent().remove()
//       })
//     }
//   })
// })
// Список дел был просто короткой демонстрацией того, как обрабатывать события и создавать простой проект.

//TODO: Hide/Show (Скрыть/показать)
// В jQuery есть несколько простых в реализации эффектов для создания анимации.
// Методы hide() и show() используются для скрытия и отображения выбранных элементов.
// Метод toggle() используется для переключения между скрытием и отображением элементов.
// Например:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p>Click to toggle show/hide</p>
//         <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </div>
//     </body>
// </html>
// CSS:
// p {
//   background-color:grey;
//   text-align:center;
//   color:white;
//   padding:5px;
//   cursor:pointer;
// }
// div {
//   background-color:grey;
//   color:white;
// }
// $(function () {
//   $('p').on('click', function () {
//     $('div').toggle()
//   })
// })
// Методы hide/show/toggle могут принимать необязательный аргумент speed, который определяет скорость анимации в миллисекундах .
// Например, давайте передадим 1000 миллисекунд в качестве аргумента скорости для метода toggle():
// $(function () {
//   $('p').on('click', function () {
//     $('div').toggle(1000)
//   })
// })
// Методы скрытия/отображения/переключения также могут принимать второй необязательный параметр обратного вызова, который является функцией, выполняемой после завершения анимации.

//TODO: Fade In/Out (Постепенное появление/исчезновение)
// Подобно методам скрытия/отображения, jQuery предоставляет методы fadeIn fadeOut, которые делают элемент видимым и исчезающим.
// Точно так же, как метод toggle() переключается между скрытием и отображением, метод fadeToggle() появляется и исчезает.
// Давайте посмотрим на fadeToggle() в действии:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p>Click to toggle fading</p>
//         <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </div>
//     </body>
// </html>
// CSS:
// p {
//   background-color:grey;
//   text-align:center;
//   color:white;
//   padding:5px;
//   cursor:pointer;
// }
// div {
//   background-color:grey;
//   color:white;
// }
// JS:
// $(function () {
//   $('p').on('click', function () {
//     $('div').fadeToggle(1000)
//   })
// })
// Как и toggle(), функция fadeToggle() принимает два необязательных параметра:
// - speed (скорость)
// - callback (обратный вызов)
// Другой метод, используемый для затухания, — fadeTo(), который позволяет затухать до заданной непрозрачности (значение от 0 до 1).
// Например:
// $("div").fadeTo(1500, 0.7);

//TODO: Slide Up/Down (Слайд вверх/вниз)
// Методы slideUp() и slideDown() используются для создания эффекта скольжения на элементах.
// Опять же, аналогично предыдущим методам переключения, метод slideToggle() переключается между эффектами скольжения и может принимать два необязательных параметра: скорость и обратный вызов.
// Например:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <p>Click to toggle sliding</p>
//         <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </div>
//     </body>
// </html>
// CSS:
// p {
//   background-color:grey;
//   text-align:center;
//   color:white;
//   padding:5px;
//   cursor:pointer;
// }
// div {
//   background-color:grey;
//   color:white;
// }
// JS:
// $(function () {
//   $('p').on('click', function () {
//     $('div').slideToggle(500)
//   })
// })

//TODO: animate() (анимировать())
// Метод animate() позволяет вам анимировать заданное значение или значение относительно текущего значения.
// Вам необходимо определить свойства CSS для анимации в качестве его параметра в формате JSON (пары «ключ»: «значение»).
// Второй параметр определяет скорость анимации.
// Например, следующий код анимирует свойство ширины элемента div за 1 секунду до значения 250px:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <div>Click me</div>
//     </body>
// </html>
// CSS:
// div {
//   display:inline-block;
//   padding:25px;
//   background-color:grey;
//   color:white;
//   text-align:center;
//   cursor:pointer;
// }
// JS:
// $(function () {
//   $('div').on('click', function () {
//     $('div').animate({ width: '250px' }, 1000)
//   })
// })
// Обратите внимание на формат JSON для предоставления параметров CSS. Синтаксис JSON также использовался в предыдущих модулях при работе со свойствами CSS.
// Вы можете анимировать любое свойство CSS, используя вышеупомянутый синтаксис, но есть одна важная вещь, которую следует помнить: все имена свойств должны быть написаны в верблюжьем регистре при использовании с методом animate () ( верблюжий регистр — это практика написания составных слов или фраз таким образом, что каждое слово или аббревиатура начинается с заглавной буквы с первым словом в нижнем регистре). Вам нужно будет написать paddingLeft вместо padding-left, marginRight вместо margin-right и так далее.

//TODO: animate() (анимировать())
// Несколько свойств можно анимировать одновременно, разделяя их запятыми .
// Например:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//         <div>Click me</div>
//     </body>
// </html>
// CSS:
// div {
//   display:inline-block;
//   padding:25px;
//   background-color:grey;
//   color:white;
//   text-align:center;
//   cursor:pointer;
// }
// JS:
// $(function () {
//   $('div').on('click', function () {
//     $('div').animate(
//       {
//         width: '250px',
//         height: '250px',
//       },
//       1000
//     )
//   })
// })
// Также возможно определить относительные значения (тогда значение будет относиться к текущему значению элемента). Это делается путем добавления += или -= перед значением:
// $(function () {
//   $('div').on('click', function () {
//     $('div').animate(
//       {
//         width: '+=250px',
//         height: '+=250px',
//       },
//       1000
//     )
//   })
// })
// Чтобы остановить анимацию до ее завершения, jQuery предоставляет метод stop ().

//TODO: Animation Queue (Очередь анимации)
// По умолчанию jQuery поставляется с функцией очереди для анимации.
// Это означает, что если вы пишете несколько вызовов animate() один за другим, jQuery создает internal (внутреннюю) очередь для этих вызовов методов. Затем он запускает анимационные вызовы один за другим .
// Например:
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//     <div></div>
//     </body>
// </html>
// CSS:
// div {
//   background:orange;
//   height:80px;width:80px;
//   position:absolute;
//   border-radius: 50%;
//   opacity: 0.5;
// }
// JS:
$(function () {
  var div = $('div')
  div.animate({ opacity: 1 })
  div.animate({ height: '+=100px', width: '+=100px', top: '+=100px' }, 500)
  div.animate({ height: '-=100px', width: '-=100px', left: '+=100px' }, 500)
  div.animate({ height: '+=100px', width: '+=100px', top: '-=100px' }, 500)
  div.animate({ height: '-=100px', width: '-=100px', left: '-=100px' }, 500)
  div.animate({ opacity: 0.5 })
})
// Каждый вызов метода animate() будет выполняться один за другим.
// Помните, чтобы манипулировать положением элементов, вам нужно установить для свойства CSS position элемента значение relative, fixed или absolute.
// Метод animate(), как и методы hide/show/fade/slide, может принимать в качестве параметра необязательную функцию обратного вызова, которая выполняется после завершения текущего эффекта.

//TODO: Drop-Down Menu (Выпадающее меню)
// Давайте создадим простое выпадающее меню, которое будет открываться при нажатии на пункт меню.
// HTML:
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Page Title</title>
//         <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
//     </head>
//     <body>
//     <div class="menu">
//       <div id="item">Dropdown</div>
//       <div id="submenu">
//         <a href="#">Link 1</a>
//         <a href="#">Link 2</a>
//         <a href="#">Link 3</a>
//       </div>
//     </div>
//     </body>
// </html>
// CSS:
// #item {
//   background-color: #4CAF50;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;
// }
// #item:hover, #item:focus {
//   background-color: #3e8e41;
// }
// .menu {
//   position: relative;
//   display: inline-block;
// }
// #submenu {
//   display: none;
//   position: absolute;
//   background-color: #3e8e41;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
// }
// #submenu a {
//   color: white;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }
// #submenu a:hover {
//   background-color: #4CAF50
// }
// JS:
// $(function () {
//   $('#item').on('click', function () {
//     $('#submenu').slideToggle(500)
//   })
// })
// Приведенный выше код обрабатывает событие щелчка элемента id="item" и открывает/закрывает подменю за 500 миллисекунд.
// Запустите код, чтобы увидеть его в действии. Вы также можете проверить CSS, используемый для стилизации элементов.
