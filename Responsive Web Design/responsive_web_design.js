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

//TODO: Viewport (Область просмотра)
// Прежде чем мы начнем делать нашу целевую страницу адаптивной, нам нужно рассмотреть несколько концепций.
// Первая концепция — это область просмотра: видимая область веб-страницы.
// Обычно веб-страница с фиксированной шириной становится слишком большой, чтобы соответствовать области просмотра на маленьком экране, таком как мобильное устройство или планшет. Чтобы исправить это, браузеры на этих устройствах уменьшили масштаб всей веб-страницы до размеров экрана.
// Вы можете управлять областью просмотра своих веб-страниц.

//TODO: Viewport (Область просмотра)
// Вы можете управлять своим окном просмотра в HTML5 с помощью метатега:
// <meta name="viewport" content="width=device-width, initial-scale=1.0">  width=device-width устанавливает ширину страницы в соответствии с шириной экрана устройства.
// initial-scale=1.0 устанавливает начальный уровень масштабирования при первой загрузке страницы браузером.
// Вы также можете использовать пользовательские значения для тега области просмотра, однако в большинстве случаев рекомендуется использовать значения по умолчанию, применяя значение ширины устройства.

//TODO: Media Queries (Медиа-запросы)
// Медиа-запросы предоставляют возможность указывать разные стили CSS для разной ширины области просмотра или других спецификаций.
// Это позволяет веб-странице определять разные стили макета для разных размеров экрана и делать страницу адаптивной! Вы определяете медиа-запрос, используя правило @media внутри существующей таблицы стилей:
// @media screen and (max-width: 600px) {
//   body {
//     background-color: blue;
//  }
// }
// За правилом @media следует тип носителя, на который мы ориентируемся (в нашем случае экран), и задается условие, при котором применяются правила (в нашем случае max-width:600px).
// Итак, теперь стиль будет применяться, если страница имеет ширину до 600 пикселей.

//TODO: Media Queries (Медиа-запросы)
// Вы также можете определить несколько условий, например максимальную и минимальную ширину области просмотра:
// @media screen and (min-width: 800px) and (max-width: 1024px) {
//   body {
//     background-color: blue;
//  }
// }
// Теперь стиль будет применяться для размеров экрана от 800 до 1024 пикселей. Вы также можете определить несколько медиа-запросов для одной веб-страницы.
// Медиа-запросы позволяют вам определять точки останова, когда макет страницы и стиль должны измениться, а также определять соответствующие стили CSS для этих точек останова.

//TODO: Responsive Header (Адаптивный заголовок)
// Теперь, когда мы знаем, как определить стили CSS для разных размеров экрана, мы можем начать делать нашу целевую страницу адаптивной! Типичная точка останова для мобильного экрана — ширина 480 пикселей. Давайте определим область просмотра и пустую цель медиа-запроса для нашей целевой страницы:
// Мы создадим отдельные стили для наших разделов, когда размер экрана меньше 480 пикселей по ширине.
// 480px — типичная точка останова для мобильных устройств.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
// @media screen and (max-width: 480px) {

// }

//TODO: Responsive Header (Адаптивный заголовок)
// На мобильном экране мы хотим изменить размер текста наших заголовков и сделать так, чтобы кнопка Download Now занимала всю ширину контейнера. Для этого мы определяем соответствующие стили в нашем медиа-запросе:

// Как видите, мы изменили некоторые свойства font-size (размера шрифта), изменили paddings (отступы) контейнера раздела и изменили свойство display кнопки на block, сделав его элементом уровня блока, который занимает всю ширину своего контейнера. Результат на мобильном экране: Тот же заголовок на большом экране:
// См. Рис: ResponsiveHeader.png
// См. Рис: ResponsiveHeader_2.png
// Обратите внимание, что нам не нужно переопределять весь стиль для элементов в медиа-запросе. Нам нужно только определить стиль, который мы хотим изменить.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
// @media screen and (max-width: 480px) {
//     .btn {
//         display: block;
//         font-size: 18px;
//     }
//     h1 {
//         font-size: 32px;
//         margin: 0 0 8px 0;
//     }
//     h2 {
//         font-size: 18px;
//     }
//     section {
//         padding: 25px 0 15px 0;
//     }
// }

//TODO: Responsive Features (Адаптивные функции)
// Пришло время сделать раздел функций адаптивным!
// В настоящее время он включает в себя 3 функции, выровненные рядом друг с другом. На маленьком экране мы хотим разместить их горизонтально, чтобы каждая функция занимала всю ширину контейнера. Вот стиль, который мы будем использовать в нашем медиа-запросе:
// Мы изменили ширину каждого элемента div на 100% и установили для свойства display значение flex, что делает div контейнером flexbox. Это позволяет нам располагать дочерние элементы горизонтально, а также устанавливать выравнивание их дочерних элементов — значка и текста — с помощью свойств align-items и justify-content. Мы также установили ширину значков и определили некоторые поля.
// Теперь функции будут выравниваться рядом друг с другом на больших экранах и друг под другом на меньших экранах.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
// @media screen and (max-width: 480px) {
//     .btn {
//         display: block;
//         font-size: 18px;
//     }
//     h1 {
//         font-size: 32px;
//         margin: 0 0 8px 0;
//     }
//     h2 {
//         font-size: 18px;
//     }
//     section {
//         padding: 25px 0 15px 0;
//     }
//     .feature {
//         width: 100%;
//         text-align: left;
//         margin: 0 0 10px 0;
//         font-size: 16px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .feature img {
//         width:15%;
//         min-width:60px;
//         margin-right:20px;
//     }
// }

//TODO: Flexbox (Флексбокс)
// Модель макета flexbox позволяет легко создавать гибкие макеты без необходимости использования позиционирования CSS и плавающих элементов. Давайте продемонстрируем, как это работает, на простом примере:
{
  /* <div class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>   */
}
// Чтобы использовать flexbox, мы сначала определяем контейнер и устанавливаем для его свойства display значение flex.
// .container {
//   display: flex;
// }
// Теперь мы можем поиграть с выравниванием дочерних элементов div, используя свойства flexbox:
// Это сделает все дочерние элементы одинаковой ширины (flex: 1) и заполнит всю ширину контейнера.
// Ознакомьтесь с полным руководством по flexbox здесь https://css-tricks.com/snippets/css/a-guide-to-flexbox/.
// .container {
//   display: flex;
//   align-items: stretch;
// }
// .container div {
//   background-color: red;
//   margin: 10px;
//   text-align: center;
//   line-height: 75px;
//   font-size: 30px;
//   flex: 1;
// }

//TODO: Responsive Quote (Отзывчивая цитата)
// Для нашего раздела цитат мы просто изменим размер текста и некоторые отступы:
// Нам не нужно менять положение элементов раздела, так как они уже выровнены по центру экрана.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
// @media screen and (max-width: 480px) {
//     .btn {
//         display: block;
//         font-size: 18px;
//     }
//     h1 {
//         font-size: 32px;
//         margin: 0 0 8px 0;
//     }
//     h2 {
//         font-size: 18px;
//     }
//     section {
//         padding: 25px 0 15px 0;
//     }
//     .feature {
//         width: 100%;
//         text-align: left;
//         margin: 0 0 10px 0;
//         font-size: 16px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .feature img {
//         width:15%;
//         min-width:60px;
//         margin-right:20px;
//     }
//     .quote {
//         padding: 30px 0;
//     }
//     blockquote p {
//         font-size: 18px;
//     }
//     blockquote cite {
//         font-size: 14px;
//     }
// }

//TODO: Responsive Footer (Отзывчивый нижний колонтитул)
// И последнее, но не менее важное: нам нужно изменить наш нижний колонтитул. Нам нужно расположить ссылки меню друг под другом:
// display:block; - style (стиль) делает элементы списка блочными элементами, чтобы они занимали всю ширину своего контейнера. Это заставляет элементы выравниваться друг под другом: Один и тот же нижний колонтитул на большом экране: Теперь наша целевая страница полностью адаптивна и имеет разные макеты для экранов мобильных и настольных компьютеров.
// См. Рис: ResponsiveFooter.png
// См. Рис: ResponsiveFooter_2.png
// Настройте целевую страницу, добавьте больше разделов и контрольных точек и поделитесь своим творением в разделе комментариев ниже!
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
// @media screen and (max-width: 480px) {
//     .btn {
//         display: block;
//         font-size: 18px;
//     }
//     h1 {
//         font-size: 32px;
//         margin: 0 0 8px 0;
//     }
//     h2 {
//         font-size: 18px;
//     }
//     section {
//         padding: 25px 0 15px 0;
//     }
//     .feature {
//         width: 100%;
//         text-align: left;
//         margin: 0 0 10px 0;
//         font-size: 16px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .feature img {
//         width:15%;
//         min-width:60px;
//         margin-right:20px;
//     }
//     .quote {
//         padding: 30px 0;
//     }
//     blockquote p {
//         font-size: 18px;
//     }
//     blockquote cite {
//         font-size: 14px;
//     }
//     footer {
//         padding: 30px 0 10px 0;
//     }
//     footer li {
//         display: block;
//         margin: 5px 0;
//     }
// }

//TODO: CSS Units (Единицы CSS)
// Важной частью нашего макета было отсутствие фиксированных единиц измерения ширины.
// Мы использовали процентные значения, которые заставляли элементы растягиваться относительно ширины их родителей.
// Такой подход позволяет элементам быть более гибкими, что очень важно при создании адаптивного дизайна. CSS также позволяет вам определять относительные размеры единиц для font-sizes (размеров шрифта): размер единицы em будет относиться к размеру шрифта родителя. Например, если тело нашей страницы имеет размер шрифта 16px, использование 1.5em будет равно 24px (16 * 1.5):
// Это полезно, потому что, когда вам нужно изменить размер шрифта, вам нужно изменить его только для верхнего родителя. Все дочерние элементы получат от него соответствующий относительный размер, используя единицы em.
// Однако, когда вы определяете все размеры с помощью em, вы столкнетесь с каскадным эффектом. В этой ситуации у вас есть много вложенных элементов, которые используют размеры шрифта относительно своих соответствующих родителей, что приводит к трудноуправляемым размерам единиц.
// <!DOCTYPE html>
// <html>
// 	<body>
// 		<p>some text</p>
// 	</body>
// </html>
// body {
//   font-size: 16px;
// }
// p {
//   font-size: 1.5em;
// }

//TODO: rem (rem)
// Еще одна относительная единица — rem. Это расшифровывается как Root Em, что означает, что он смотрит только на размер шрифта корневого элемента, который является элементом html.
// Это делает его более простым в использовании, чем em. Давайте изменим размер шрифта нашей целевой страницы на rem:
// Мы установили размер шрифта html-элементов равным 16px и использовали его для установки всех остальных размеров шрифта с помощью rem.
// Вы также можете использовать относительные единицы CSS для полей и отступов.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

// html {
//     font-size: 16px;
// }
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
//   font-size: 3rem;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 1.5rem;
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
//     font-size: 1.25rem;
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
//     font-size: 1rem;
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
//     font-size: 1.5rem;
// }
// blockquote cite {
//     font-size: 1rem;
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
//     font-size: 0.75rem;
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
//     font-size: 0.875rem;
//     text-decoration: none;
//     color: #c3c3c3;
// }
// footer li a:hover {
//     color: white;
// }
// @media screen and (max-width: 480px) {
//     .btn {
//         display: block;
//         font-size: 1.125rem;
//     }
//     h1 {
//         font-size: 2rem;
//         margin: 0 0 8px 0;
//     }
//     h2 {
//         font-size: 1.125rem;
//     }
//     section {
//         padding: 25px 0 15px 0;
//     }
//     .feature {
//         width: 100%;
//         text-align: left;
//         margin: 0 0 10px 0;
//         font-size: 1rem;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .feature img {
//         width: 15%;
//         min-width: 60px;
//         margin-right: 20px;
//     }
//     .quote {
//         padding: 30px 0;
//     }
//     blockquote p {
//         font-size: 1.125rem;
//     }
//     blockquote cite {
//         font-size: 0.875rem;
//     }
//     footer {
//         padding: 30px 0 10px 0;
//     }
//     footer li {
//         display: block;
//         margin: 5px 0;
//     }
// }

//TODO: A Submenu (Подменю)
// Современные веб-сайты включают интерактивные элементы и анимацию, которые улучшают пользовательский опыт и эстетику. Давайте добавим подменю на нашу адаптивную целевую страницу, которая будет открываться и закрываться при нажатии на кнопку Download Now. Наше подменю также будет адаптивным — оно будет отображаться поверх элементов на рабочем столе и будет смещать элементы на мобильном устройстве.
// Desktop version (Настольная версия):
//   См. Рис: A_Submenu_1.png
// Mobile version (Мобильная версия):
// См. Рис: A_Submenu_2.png
// Подменю откроется, когда вы нажмете кнопку Download Now.

//TODO: A Submenu (Подменю)
// Начнем с создания подменю с помощью HTML/CSS.
// Наше подменю будет простым элементом div со ссылками внутри контейнера div нашего заголовка:
{
  /* <div class="submenu">
   <a href="#">Link 1</a>
   <a href="#">Link 2</a>
</div>  */
}
// Мы стилизуем его с помощью следующего CSS:
// Мы использовали CSS-хак, чтобы расположить наше подменю в центре экрана. Комбинация absolute (абсолютного) позиционирования с использованием свойства left и transform приводит к тому, что наше подменю располагается в центре экрана и открывается over (поверх) элементов страницы.
// Мы также использовали display: block; для наших ссылок, чтобы они вели себя как блочные элементы.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     </head>
// 	<body>

//     <header>
//         <div class="container">
//         <h1>Awesome App</h1>
//         <h2>This app will change your life!</h2>
//         <a class="btn">Download Now</a>
//         <div class="submenu">
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//         </div>
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

// html {
//     font-size: 16px;
// }
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
//   font-size: 3rem;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 1.5rem;
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
//     font-size: 1.25rem;
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
//     font-size: 1rem;
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
//     font-size: 1.5rem;
// }
// blockquote cite {
//     font-size: 1rem;
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
//     font-size: 0.75rem;
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
//     font-size: 0.875rem;
//     text-decoration: none;
//     color: #c3c3c3;
// }
// footer li a:hover {
//     color: white;
// }
// .submenu {
//     left: 50%;
//     transform: translate(-50%, 0);
//     text-align:center;
//     position: absolute;
//     background-color: #549DA0;
//     min-width: 160px;
//     border-radius: 5px;
//     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
// }
// .submenu a {
//     color: white;
//     padding: 12px 16px;
//     text-decoration: none;
//     display: block;
// }
// .submenu a:hover {
//     background-color: #468486;
// }
// @media screen and (max-width: 480px) {
//     .btn {
//         display: block;
//         font-size: 1.125rem;
//     }
//     h1 {
//         font-size: 2rem;
//         margin: 0 0 8px 0;
//     }
//     h2 {
//         font-size: 1.125rem;
//     }
//     section {
//         padding: 25px 0 15px 0;
//     }
//     .feature {
//         width: 100%;
//         text-align: left;
//         margin: 0 0 10px 0;
//         font-size: 1rem;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .feature img {
//         width: 15%;
//         min-width: 60px;
//         margin-right: 20px;
//     }
//     .quote {
//         padding: 30px 0;
//     }
//     blockquote p {
//         font-size: 1.125rem;
//     }
//     blockquote cite {
//         font-size: 0.875rem;
//     }
//     footer {
//         padding: 30px 0 10px 0;
//     }
//     footer li {
//         display: block;
//         margin: 5px 0;
//     }
// }

//TODO: A Submenu (Подменю)
// Пришло время использовать CSS в нашем медиа-запросе.
// Нам нужно сделать подменю шире и сдвинуть страницу вниз, а не открывать ее поверх элементов.
// Нам нужно только изменить ширину и свойство положения подменю.
// В настоящее время подменю всегда открыто. Мы добавим анимацию открытия/закрытия в следующем уроке.
// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title>My Landing Page</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     </head>
// 	<body>

//     <header>
//         <div class="container">
//         <h1>Awesome App</h1>
//         <h2>This app will change your life!</h2>
//         <a class="btn">Download Now</a>
//         <div class="submenu">
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//         </div>
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

// html {
//     font-size: 16px;
// }
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
//   font-size: 3rem;
//   margin: 0 0 16px 0;
// }
// h2 {
//   font-weight: 300;
//   font-size: 1.5rem;
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
//     font-size: 1.25rem;
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
//     font-size: 1rem;
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
//     font-size: 1.5rem;
// }
// blockquote cite {
//     font-size: 1rem;
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
//     font-size: 0.75rem;
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
//     font-size: 0.875rem;
//     text-decoration: none;
//     color: #c3c3c3;
// }
// footer li a:hover {
//     color: white;
// }
// .submenu {
//     left: 50%;
//     transform: translate(-50%, 0);
//     text-align:center;
//     position: absolute;
//     background-color: #549DA0;
//     min-width: 160px;
//     border-radius: 5px;
//     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
// }
// .submenu a {
//     color: white;
//     padding: 12px 16px;
//     text-decoration: none;
//     display: block;
// }
// .submenu a:hover {
//     background-color: #468486;
// }
// @media screen and (max-width: 480px) {
//     .btn {
//         display: block;
//         font-size: 1.125rem;
//     }
//     h1 {
//         font-size: 2rem;
//         margin: 0 0 8px 0;
//     }
//     h2 {
//         font-size: 1.125rem;
//     }
//     section {
//         padding: 25px 0 15px 0;
//     }
//     .feature {
//         width: 100%;
//         text-align: left;
//         margin: 0 0 10px 0;
//         font-size: 1rem;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .feature img {
//         width: 15%;
//         min-width: 60px;
//         margin-right: 20px;
//     }
//     .quote {
//         padding: 30px 0;
//     }
//     blockquote p {
//         font-size: 1.125rem;
//     }
//     blockquote cite {
//         font-size: 0.875rem;
//     }
//     footer {
//         padding: 30px 0 10px 0;
//     }
//     footer li {
//         display: block;
//         margin: 5px 0;
//     }
//     .submenu {
//         width: 100%;
//         position: relative;
//     }
// }

//TODO: Animation (Анимация)
// Давайте используем JavaScript для открытия/закрытия подменю при нажатии кнопки.
// Поскольку мы хотим открыть подменю с помощью красивой анимации скольжения, мы воспользуемся библиотекой JQuery, которая поддерживает простые анимации. Начнем с включения jQuery на нашу страницу:
{
  /* <head>
  <title>App Landing Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>  */
}
// Мы использовали тег script для импорта библиотеки jQuery.
// jQuery — это быстрая, небольшая и многофункциональная библиотека JavaScript.
// Это значительно упрощает такие вещи, как обход и манипулирование документами HTML, обработку событий и анимацию.
// Узнайте больше в нашем учебном пособии по jQuery.

//TODO: Animation (Анимация)
// Нам нужно обработать событие нажатия нашей кнопки, которое должно открывать и закрывать наше подменю. Мы будем использовать метод slideToggle(), который переключается между видимым и невидимым состояниями выделенного элемента с помощью слайдовой анимации:
$(function () {
  $('.btn').click(function () {
    $('.submenu').slideToggle(500)
  })
})
// В приведенном выше коде мы обработали событие клика out. btn, выбрал файл. элемент подменю и открывал/закрывал его с помощью метода slideToggle, обеспечивая 500 мс для скорости анимации. Теперь осталось только скрыть подменю по умолчанию:
// display: none;
// У нас есть полнофункциональное подменю, в котором используется анимация слайдов.
// Настройте код и создайте свои собственные уникальные анимации и эффекты!
// Поделитесь своим творением в разделе комментариев ниже.

//TODO: Summary (Резюме)
// Поздравляем, вы прошли наш курс адаптивного веб-дизайна! Вот некоторые из наиболее распространенных приемов, которым следует следовать при создании адаптивной веб-страницы:
// - Use relative units (Используйте относительные единицы) (например, проценты) для размеров элементов и шрифтов.
// - Use CSS media queries (Используйте медиа-запросы CSS) для определения точек останова и изменений макета.
// - Define the viewport (Определите область просмотра) для адаптации к мобильным экранам.
// - Use CSS Flexbox (Используйте CSS Flexbox), чтобы упростить создание гибких макетов.
// Всегда проверяйте свою страницу, используя браузеры разной ширины; вы можете изменить размер своего браузера, чтобы увидеть, как ваша страница адаптируется к новой ширине.
// Современные браузеры также поддерживают эмуляцию размера экрана мобильного устройства, что упрощает тестирование с использованием предопределенной ширины.
