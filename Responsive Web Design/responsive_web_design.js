//TODO: Responsive Web Design (Отзывчивый веб-дизайн)
// Отзывчивый веб-дизайн — это практика создания веб-сайтов, которые могут адаптироваться к любому устройству и любому размеру экрана. В ходе этого курса мы научимся создавать современные адаптивные веб-сайты с использованием HTML и CSS. В качестве нашего курсового проекта мы создадим веб-сайт с нуля и, в качестве бонуса, добавим к нему некоторые функции с помощью JavaScript в конце курса!

//TODO: Responsive Web Design (Отзывчивый веб-дизайн)
// Добро пожаловать на наш курс адаптивного веб-дизайна! В ходе этого курса мы научимся создавать современные адаптивные веб-сайты с использованием HTML и CSS. В качестве нашего курсового проекта мы создадим настоящий веб-сайт с нуля! В качестве бонуса мы также добавим некоторые функции на сайт с помощью JavaScript в конце курса!
// Если вы не знакомы с базовым синтаксисом HTML/CSS, мы рекомендуем вам сначала пройти наши курсы по HTML и CSS, прежде чем начинать этот.

//TODO: Responsive Web Design (Отзывчивый веб-дизайн)
// Отзывчивый веб-дизайн — это практика создания веб-сайтов, которые могут адаптироваться к любому устройству и любому размеру экрана. Адаптивный веб-сайт можно использовать на экранах разных размеров, от больших компьютеров до маленьких мобильных экранов.
// Основная концепция адаптивного веб-дизайна заключается в создании макетов, которые реагируют на изменение размера экрана путем адаптации и изменения стиля страницы.

//TODO: Course Project (Курсовой проект)
// Давайте посмотрим на проект, который мы создадим: универсальную целевую страницу для приложения.
// Вот как это будет выглядеть на десктопе:
//  См. Рис: CourseProject.png
// Как видите, лендинг состоит из нескольких разделов:
// - шапка с текстом и кнопкой
// - раздел с функциями - раздел с цитатами - нижний колонтитул с меню
// Целевая страница — это место, куда пользователи попадают при переходе по рекламным/маркетинговым ссылкам.
// Например, когда вы хотите продвигать свое приложение, вы делитесь URL-адресом его целевой страницы в социальных и других сетях.

//TODO: Course Project (Курсовой проект)
// Мы создадим целевую страницу как адаптивную, чтобы она могла адаптироваться к разным размерам экрана.
// Например, так это будет выглядеть на мобильных устройствах:
//   См. Рис: CourseProject_2.png
// Как видите, некоторые разделы меняют свой макет на мобильных устройствах. Например, раздел функций и меню нижнего колонтитула становятся вертикальными списками, кнопка загрузки становится шире и т.д.

//TODO: HTML Structure (HTML-структура)
// Давайте начнем с создания базовой HTML-структуры нашей целевой страницы. Мы начнем с создания настольной версии, а затем адаптируем ее для мобильных устройств и сделаем адаптивной.
// Мы будем использовать семантические теги HTML5 для определения разделов:
// Мы использовали тег header (заголовка) - для заголовка, теги section  (раздела) - для разделов features (функций) и цитат, и тег footer (нижнего колонтитула) - для нижнего колонтитула. Мы дали соответствующие имена классов разделам функций и цитат, чтобы мы могли определить для них стили CSS.
// У нас еще нет определенных стилей CSS, поэтому разделы представляют собой просто белые блоки с фиктивным текстом.
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Landing Page</title>
//   </head>
//   <body>
//     <header>
//       header
//     </header>

//     <section class="features">
//       features
//     </section>

//     <section class="quote">
//       quote
//     </section>
//     <footer>
//       footer
//     </footer>

// </body>
// </html>

//TODO: HTML Structure (HTML-структура)
// Теперь нам нужно добавить несколько основных стилей CSS, чтобы придать нашим разделам цвет и размер.
// Мы использовали отступы, чтобы придать секциям некоторую высоту.
// Поскольку мы предоставили только два значения для padding (заполнения), оно установит как верхнее, так и нижнее padding (заполнение) в указанное значение.
// (padding: 40px 0; is the same as padding: 40px 0 40px 0;)
// Мы также определили цвета фона и текста для разделов. Мы не задавали ширину секциям, поэтому они будут занимать всю доступную ширину. Это означает, что при изменении размера экрана ширина раздела всегда будет составлять 100% от доступной ширины. Поскольку мы планируем создать адаптивную страницу, мы не устанавливаем фиксированных значений ширины для наших разделов; скорее мы заставляем его занимать всю ширину экрана.
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Landing Page</title>
//   </head>
//   <body>
//     <header>
//       header
//     </header>

//     <section class="features">
//       features
//     </section>

//     <section class="quote">
//       quote
//     </section>
//     <footer>
//       footer
//     </footer>

// </body>
// </html>
// @import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,800,300);

// body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
//     line-height: 1.45;
// }
// header {
//   color: #FFFFFF;
//   background-color: #284b63;
//   padding: 80px 0;
//   text-align: center;
// }
// section {
//   padding: 40px 0;
//   text-align: center;
// }
// .features {
//   background: #FFFFFF;
//   color: #000000;
// }
// .quote {
//   background:#549DA0;
//   color:#FFFFFF;
// }
// footer {
//   background: #353535;
//   padding: 32px 0;
//   text-align: center;
//   color: #868686;
// }

//TODO: Building The Header (Создание заголовка)
// Теперь, когда у нас есть базовая структура нашей страницы, мы можем приступить к созданию каждого из ее разделов.
// Начнем с заголовка:
//  BuildingTheHeader.png
// мы используем теги h1 и h2 для текстов и тег a для кнопки. Кроме того, мы помещаем весь заголовок в div-контейнер, чтобы его можно было стилизовать с помощью CSS:
// Мы определяем соответствующие классы для нашего контейнера div и ссылки Download Now.
// Запустите код, чтобы увидеть результат.
// Теперь пришло время добавить стили CSS!
{
  /* <header>

<div class="container">
  <h1>Awesome App</h1>
  <h2>This app will change your life!</h2>
  <a class="btn">Download Now</a>
</div>

</header> */
}
// header {
//   color: #FFFFFF;
//   background-color: #284b63;
//   padding: 80px 0;
//   text-align: center;
// }

//TODO: Building The Header (Создание заголовка)
// Теперь пришло время добавить некоторые стили CSS к нашим элементам заголовка.
// Начнем с тегов h1 и h2:
// Здесь мы определяем размеры шрифта и margin (поля).
// Вспомните, как работают значения margin (поля): первое значение — это верхнее поле, второе значение — правое поле, третье — нижнее поле, а последнее определяет левое поле. Это означает, что значения идут по часовой стрелке, начиная сверху.
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>My Landing Page</title>
//   </head>
//   <body>
//     <header>
//         <div class="container">
//           <h1>Awesome App</h1>
//           <h2>This app will change your life!</h2>
//           <a class="btn">Download Now</a>
//           <p>Some information about the app</p>
//         </div>
//     </header>

//     <section class="features">
//       <div class="container">
//         <div class="feature">
//           <img src="https://www.sololearn.com/uploads/img_blue_pin.png" alt=""/>
//           <p>An awesome feature</p>
//         </div>
//         <div class="feature">
//           <img src="https://www.sololearn.com/uploads/img_blue_chart.png" alt=""/>
//           <p>An awesome feature</p>
//         </div>
//         <div class="feature">
//           <img src="https://www.sololearn.com/uploads/img_blue_msg.png" alt=""/>
//           <p>An awesome feature</p>
//         </div>
//       </div>
//     </section>

//     <section class="quote">
//       <blockquote class="container">
//         <p>"Some great quote!"</p>
//         <cite>Satisfied Customer</cite>
//       </blockquote>
//     </section>

//     <footer>
//       <div class="container">
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contacts</a></li>
//         </ul>
//         <p>&copy; All rights reserved.</p>
//       </div>
//     </footer>
//   </body>
// </html>
// h1 {
//   font-size: 3rem;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 1.5rem;
//   margin: 0 0 16px 0;
// }

//TODO: Building The Header (Создание заголовка)
// Для нашего контейнера div мы определим следующие стили:
// Поскольку наш заголовок занимает всю ширину браузера, мы ограничили максимальную ширину текстового контейнера до 900 пикселей, используя свойство max-width.
// Это останавливает расширение div, чтобы текст не становился слишком широким.
// Поскольку мы будем повторно использовать наш контейнерный класс для других разделов, мы определили некоторые левые и правые отступы, которые гарантируют, что дочерние элементы останутся на расстоянии 20 пикселей от краев экрана.
// поле: 0 авто; гарантирует, что содержимое остается в центре контейнера, независимо от его размера.
// На экране шириной более 900 пикселей контейнер div будет иметь ширину 900 пикселей, поэтому мы выравниваем его по центру экрана.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//     </head>
// 	<body>

//     <header>
//         <div class="container">
//         <h1>Awesome App</h1>
//         <h2>This app will change your life!</h2>
//         <a class="btn">Download Now</a>
//         </div>
//     </header>

//     <section class="features">
//         features
//     </section>

//     <section class="quote">
//         quote
//     </section>
//     <footer>
//     footer
//     </footer>
// </body>
// </html>
// @import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,800,300);

// body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
//     line-height: 1.45;
// }
// header {
//     color: #FFFFFF;
//     background-color: #284b63;
//     padding: 80px 0;
//     text-align: center;
// }
// h1 {
//   font-size: 48px;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 24px;
//   margin: 0 0 16px 0;
// }
// .container {
//     margin: 0 auto;
//     padding: 0 20px 0 20px;
//     max-width: 900px;
// }
// section {
//     text-align: center;
//     padding: 40px 0;
// }
// .features {
//     background: #FFFFFF;
//     color: #000000;
// }
// .quote {
//     background:#549DA0;
//     color:#FFFFFF;
// }
// footer {
//     background: #353535;
//     padding: 32px 0;
//     text-align: center;
//     color: #868686;
// }

//TODO: Building The Header (Создание заголовка)
// Наш заголовок почти готов!
// Однако в настоящее время наша кнопка «Download Now» представляет собой просто ссылку без какого-либо стиля.
// Чтобы он выглядел как кнопка, нам нужно добавить следующие стили:
// Свойство display определяет поведение отображения элемента. Мы установили его в inline-block, чтобы ссылка вела себя как встроенный блок-контейнер.
// Мы также установили цвета и размер шрифта, а также радиус границы, что привело к закруглению углов.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//     </head>
// 	<body>

//     <header>
//         <div class="container">
//         <h1>Awesome App</h1>
//         <h2>This app will change your life!</h2>
//         <a class="btn">Download Now</a>
//         </div>
//     </header>

//     <section class="features">
//         features
//     </section>

//     <section class="quote">
//         quote
//     </section>
//     <footer>
//     footer
//     </footer>
// </body>
// </html>
// @import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,800,300);

// body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
//     line-height: 1.45;
// }
// header {
//     color: #FFFFFF;
//     background-color: #284b63;
//     padding: 80px 0;
//     text-align: center;
// }
// h1 {
//   font-size: 48px;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 24px;
//   margin: 0 0 16px 0;
// }
// .container {
//     margin: 0 auto;
//     padding: 0 20px 0 20px;
//     max-width: 900px;
// }
// .btn {
//     display: inline-block;
//     color: white;
//     font-weight: 500;
//     font-size: 20px;
//     background: #549DA0;
//     border: none;
//     border-radius: 5px;
//     padding: 12px 16px;
//     cursor: pointer;
// }
// section {
//     text-align: center;
//     padding: 40px 0;
// }
// .features {
//     background: #FFFFFF;
//     color: #000000;
// }
// .quote {
//     background:#549DA0;
//     color:#FFFFFF;
// }
// footer {
//     background: #353535;
//     padding: 32px 0;
//     text-align: center;
//     color: #868686;
// }

//TODO: Building The Header (Создание заголовка)
// Нашей кнопке также нужен эффект наведения, поэтому она меняет цвет фона при наведении на нее курсора мыши. Чтобы определить стиль, мы будем использовать :hover selector:
// Теперь при наведении курсора на кнопку цвет фона кнопки меняется.
// Наш заголовок готов! Запустите код, чтобы увидеть результат.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//     </head>
// 	<body>

//     <header>
//         <div class="container">
//         <h1>Awesome App</h1>
//         <h2>This app will change your life!</h2>
//         <a class="btn">Download Now</a>
//         </div>
//     </header>

//     <section class="features">
//         features
//     </section>

//     <section class="quote">
//         quote
//     </section>
//     <footer>
//     footer
//     </footer>
// </body>
// </html>

//TODO: The Features Section (Раздел Характеристики)
// Давайте начнем создавать наш раздел характеристик:
//   См. Рис: TheFeaturesSection.png
// раздел содержит три характеристики, а также изображение и текст. Элементы выравниваются горизонтально рядом друг с другом. Мы будем повторно использовать наш container div, чтобы обернуть все элементы раздела характеристик:
// Каждая характеристика заключена в div с классом «feature», который мы будем использовать для позиционирования характеристик.
// Он содержит изображение и абзац текста.
// Прямо сейчас они просто расположены друг под другом, поэтому нам нужно добавить некоторые стили CSS, чтобы исправить это.
// Мы используем образцы файлов изображений, которые мы загрузили на наш сервер.
{
  /* <section class="features">
  <div class="container">
    
<div class="feature">
      <img src="https://www.sololearn.com/uploads/img_blue_pin.png" alt=""/>
      <p>An awesome feature</p>
    </div>

    <div class="feature">
      <img src="https://www.sololearn.com/uploads/img_blue_chart.png" alt=""/>
      <p>An awesome feature</p>
    </div>

    <div class="feature">
      <img src="https://www.sololearn.com/uploads/img_blue_msg.png" alt=""/>
      <p>An awesome feature</p>
    </div>

  </div>
</section>   */
}
// @import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,800,300);

// body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
//     line-height: 1.45;
// }
// section {
//     text-align: center;
//     padding: 40px 0;
// }
// .container {
//     margin: 0 auto;
//     padding: 0 20px 0 20px;
//     max-width: 900px;
// }
// .features {
//     background: #FFFFFF;
//     color: #000000;
// }

//TODO: The Features Section (Раздел Характеристики)
// Чтобы расположить элементы div рядом друг с другом по горизонтали, мы будем использовать display: inline-block, чтобы сделать их блочными контейнерами встроенного уровня и указать ширину:
// Поскольку у нас есть 3 характеристики, мы выделили каждой характеристике div 32% от ширины их контейнера.
// Оставшееся пространство останется для пространства между элементами.
// Мы также устанавливаем ширину изображений равной 40% их контейнеров.
// Используя только значения % для ширины, объекты всегда будут оставаться рядом друг с другом и располагаться горизонтально, независимо от ширины браузера.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//     </head>
// 	<body>

//     <header>
//         <div class="container">
//         <h1>Awesome App</h1>
//         <h2>This app will change your life!</h2>
//         <a class="btn">Download Now</a>
//         </div>
//     </header>

//     <section class="features">
//         <div class="container">
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_pin.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_chart.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_msg.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         </div>
//     </section>

//     <section class="quote">
//         quote
//     </section>
//     <footer>
//     footer
//     </footer>
// </body>
// </html>
// @import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,800,300);

// body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
//     line-height: 1.45;
// }
// header {
//     color: #FFFFFF;
//     background-color: #284b63;
//     padding: 80px 0;
//     text-align: center;
// }
// h1 {
//   font-size: 48px;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 24px;
//   margin: 0 0 16px 0;
// }
// .container {
//     margin: 0 auto;
//     padding: 0 20px 0 20px;
//     max-width: 900px;
// }
// .btn {
//     display: inline-block;
//     color: white;
//     font-weight: 500;
//     font-size: 20px;
//     background: #549DA0;
//     border: none;
//     border-radius: 5px;
//     padding: 12px 16px;
//     cursor: pointer;
// }
// .btn:hover {
//     background: #468486;
// }
// section {
//     text-align: center;
//     padding: 40px 0;
// }
// .features {
//     background: #FFFFFF;
//     color: #000000;
// }
// .feature {
//     width: 32%;
//     display: inline-block;
//     font-size:16px;
// }
// .feature img {
//     width:40%;
// }
// .quote {
//     background:#549DA0;
//     color:#FFFFFF;
// }
// footer {
//     background: #353535;
//     padding: 32px 0;
//     text-align: center;
//     color: #868686;
// }

//TODO: The Quote Section (Раздел цитат)
// Наш раздел Quote содержит отзыв довольного клиента:
//   См. Рис: TheQuoteSection.png
// Давайте создадим HTML-код, используя семантические теги:
// Мы использовали тег blockquote в качестве контейнера и повторно использовали для него наш класс контейнера. Внутри цитаты у нас есть абзац текста, представляющий цитату, и тег цитирования, содержащий имя клиента.
// Элемент blockquote определяет раздел, который цитируется, а cite используется для определения заголовка.
{
  /* <section class="quote">
  <blockquote class="container">
    <p>"Some great quote!"</p>
    <cite>Satisfied Customer</cite>
  </blockquote>
</section>  */
}
// body {
//   margin: 0;
//   padding: 0;
//   font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
//   line-height: 1.45;
// }
// .container {
//   margin: 0 auto;
//   padding: 0 20px 0 20px;
//   max-width: 900px;
// }
// section {
//   text-align: center;
//   padding: 40px 0;
// }
// .quote {
//   background:#549DA0;
//   color:#FFFFFF;
// }

//TODO: The Quote Section (Раздел цитат)
// Время определить стили!
// Во-первых, нам нужно сбросить отступы/поля элемента blockquote, так как браузеры имеют для них некоторые значения по умолчанию.
// Мы также определяем размеры шрифта и поля для элементов. И последнее, но не менее важное: мы используем селектор :before, чтобы установить тире перед элементом cite.
// Мы могли бы добавить тире в текст тега cite, но это более причудливый способ сделать то же самое.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//     </head>
// 	<body>

//     <header>
//         <div class="container">
//         <h1>Awesome App</h1>
//         <h2>This app will change your life!</h2>
//         <a class="btn">Download Now</a>
//         </div>
//     </header>

//     <section class="features">
//         <div class="container">
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_pin.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_chart.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_msg.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         </div>
//     </section>

//     <section class="quote">
//         <blockquote class="container">
//       <p>"Some great quote!"</p>
//       <cite>Satisfied Customer
//       </cite>
//     </blockquote>
//     </section>

//     <footer>
//     footer
//     </footer>
// </body>
// </html>
// @import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,800,300);

// body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
//     line-height: 1.45;
// }
// header {
//     color: #FFFFFF;
//     background-color: #284b63;
//     padding: 80px 0;
//     text-align: center;
// }
// h1 {
//   font-size: 48px;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 24px;
//   margin: 0 0 16px 0;
// }
// .container {
//     margin: 0 auto;
//     padding: 0 20px 0 20px;
//     max-width: 900px;
// }
// .btn {
//     display: inline-block;
//     color: white;
//     font-weight: 500;
//     font-size: 20px;
//     background: #549DA0;
//     border: none;
//     border-radius: 5px;
//     padding: 12px 16px;
//     cursor: pointer;
// }
// .btn:hover {
//     background: #468486;
// }
// section {
//     text-align: center;
//     padding: 40px 0;
// }
// .features {
//     background: #FFFFFF;
//     color: #000000;
// }
// .feature {
//     width: 32%;
//     display: inline-block;
//     font-size:16px;
// }
// .feature img {
//     width: 40%;
// }
// .quote {
//     background:#549DA0;
//     color:#FFFFFF;
// }
// blockquote {
//     margin: 0;
//     padding: 0;
//     text-align: center;
// }
// blockquote p {
//     margin: 0 0 5px 0;
//     font-size: 24px;
// }
// blockquote cite {
//     font-size: 16px;
//     font-style: italic;
// }
// blockquote cite:before {
//     content: '–';
//     margin-right: 5px;
// }
// footer {
//     background: #353535;
//     padding: 32px 0;
//     text-align: center;
//     color: #868686;
// }

//TODO: Building The Footer (Создание нижнего колонтитула)
// Последний раздел нашей целевой страницы — нижний колонтитул:
//  См. Рис: BuildingTheFooter.png
// он содержит меню и текст об авторских правах. Общепринятой практикой является использование списка для пунктов меню:
// Мы повторно использовали наш блок-контейнер, чтобы обеспечить необходимые отступы и выравнивание по центру.
// Каждая из ссылок меню содержится в элементах списка.
// Текст авторского права представляет собой простой абзац.
// По умолчанию элементы списка имеют вертикальный маркированный список. Мы изменим этот стиль с помощью CSS в следующей части этого урока.
{
  /* <footer>
  <div class="container">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
    <p>&copy; All rights reserved.</p>
  </div>
</footer>  */
}
// footer {
//   background: #353535;
//   padding: 32px 0;
//   text-align: center;
//   color: #868686;
// }
// .container {
//   margin: 0 auto;
//   padding: 0 20px 0 20px;
//   max-width: 900px;
// }

//TODO: Building The Footer (Создание нижнего колонтитула)
// Чтобы сделать список меню горизонтальным и убрать маркеры, мы использовали list-style: none; для элемента ul. Мы также устанавливаем display: inline-block; для элементов списка, чтобы сделать их контейнерами элементов встроенного уровня, и поэтому они расположены рядом друг с другом по горизонтали. Остальные стили — это простые цвета текста и фона, а также размеры текста. Запустите код, чтобы увидеть результат.
// Мы завершили создание настольной версии нашей целевой страницы!
// Однако, несмотря на то, что он всегда занимает всю ширину браузера, он не очень отзывчив, так как макет остается прежним для небольших экранов и не очень удобен для мобильных устройств.
// Мы сделаем его адаптивным в следующем модуле!
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//     </head>
// 	<body>

//     <header>
//         <div class="container">
//         <h1>Awesome App</h1>
//         <h2>This app will change your life!</h2>
//         <a class="btn">Download Now</a>
//         </div>
//     </header>

//     <section class="features">
//         <div class="container">
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_pin.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_chart.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         <div class="feature">
//             <img src="https://www.sololearn.com/uploads/img_blue_msg.png" alt=""/>
//             <p>An awesome feature</p>
//         </div>
//         </div>
//     </section>

//     <section class="quote">
//         <blockquote class="container">
//       <p>"Some great quote!"</p>
//       <cite>Satisfied Customer
//       </cite>
//     </blockquote>
//     </section>

//     <footer>
//   <div class="container">
//     <ul>
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Contacts</a></li>
//     </ul>
//     <p>&copy; All rights reserved.</p>
//   </div>
// </footer>
// </body>
// </html>
// @import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,800,300);

// body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Open Sans','Helvetica Neue',Helvetica, sans-serif;
//     line-height: 1.45;
// }
// header {
//     color: #FFFFFF;
//     background-color: #284b63;
//     padding: 80px 0;
//     text-align: center;
// }
// h1 {
//   font-size: 48px;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 24px;
//   margin: 0 0 16px 0;
// }
// .container {
//     margin: 0 auto;
//     padding: 0 20px 0 20px;
//     max-width: 900px;
// }
// .btn {
//     display: inline-block;
//     color: white;
//     font-weight: 500;
//     font-size: 20px;
//     background: #549DA0;
//     border: none;
//     border-radius: 5px;
//     padding: 12px 16px;
//     cursor: pointer;
// }
// .btn:hover {
//     background: #468486;
// }
// section {
//     text-align: center;
//     padding: 40px 0;
// }
// .features {
//     background: #FFFFFF;
//     color: #000000;
// }
// .feature {
//     width: 32%;
//     display: inline-block;
//     font-size:16px;
// }
// .feature img {
//     width: 40%;
// }
// .quote {
//     background:#549DA0;
//     color:#FFFFFF;
// }
// blockquote {
//     margin: 0;
//     padding: 0;
//     text-align: center;
// }
// blockquote p {
//     margin: 0 0 5px 0;
//     font-size: 24px;
// }
// blockquote cite {
//     font-size: 16px;
//     font-style: italic;
// }
// blockquote cite:before {
//     content: '–';
//     margin-right: 5px;
// }
// footer {
//     background: #353535;
//     padding: 32px 0;
//     text-align: center;
//     color: #868686;
//     font-size: 12px;
// }
// footer ul {
//     margin: 0;
//     padding: 0;
//     list-style: none;
// }
// footer li {
//     display: inline-block;
// }
// footer li a {
//     padding: 6px;
//     font-size: 14px;
//     text-decoration: none;
//     color: #c3c3c3;
// }
// footer li a:hover {
//     color: white;
// }
