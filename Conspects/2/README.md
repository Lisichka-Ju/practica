# Основы Web
---
# Web
---
## Базовый сценарий работы web-приложения
1.	Пользователь вводит URL
2.	Браузер загружает страницу (HTML документ)
3.	Браузер анализирует (парсит) HTML и загружает дополнительные ресурсы
4.	Браузер отображает (рендерит) HTML-страницу

## URL (Unified Resource Locator)

•	http - протокол
•	mi-ami.ru - доменное имя (DNS имя сервера)
•	8080 - TCP порт
•	/profile/account.html - путь до документа
•	?gender=male&age=13 - query-параметры (параметры запроса)
•	#comments - якорь

## Документы

Документ - это тело ответа HTTP-запроса. MIME-типы документов:
•	text/html
•	text/css
•	text/javascript
•	image/png
•	video/mp4 и др.
Статические и динамические документы
•	Статические: файлы на дисках сервера, зачастую с постоянным адресом.
•	Динамические: создаются на каждый запрос, зависят от внешних факторов (пользователя, времени и т.д.), адрес может меняться.

## Ресурсы
Примеры подключения ресурсов:
html
```ts
<link rel="stylesheet" href="/css/index.css">
<script src="http://code.jquery.com/jquery-2.1.4.js"></script>
<img src="pictures/network.png" width="200">
```
---
# HTTP
---
## Протоколы
Например:
- TCP
- UPD
- HTTP
- FTP
- SSH

## HTTP (HyperText Transfer Protocol)
Основой HTTP является технология «клиент-сервер»: клиент отправляет запрос, сервер обрабатывает его и возвращает ответ.

## Структура HTTP-запроса
•	Метод (GET, POST, PUT, DELETE и др.)
•	URL запроса (адрес ресурса)
•	Заголовки (характеризуют тело сообщения и параметры передачи)
•	Тело (может отсутствовать)

## Структура HTTP-ответа
•	Тело
•	Заголовки
•	Статус ответа:
o	1xx - информативный статус
o	2xx - успешный статус
o	3xx - перенаправление
o	4xx - клиентская ошибка
o	5xx - ошибка сервера

## Пример HTTP-запроса
```ts
GET http://www.ru/robots.txt HTTP/1.0  
Accept: text/html, text/plain  
User-Agent: curl/7.64.1  
If-Modified-Since: Fri, 24 Jul 2015 22:53:05 GMT  
```

## Пример HTTP-ответа
```ts
HTTP/1.1 404 Not Found  
Server: nginx/1.5.7  
Date: Sat, 25 Jul 2015 09:58:17 GMT  
Content-Type: text/html; charset=iso-8859-1  
Connection: close  

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">  
<HTML><HEAD>...
```
---
# HTML
---
Основная структура HTML-документа
```ts
<!DOCTYPE html>
<html>
   <head>
      <title>Страница</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="description" content="Cайт">
      <link rel="stylesheet" href="./style.css">
   </head>
   <body id="the_body">
      <p class="article">...</p>
      <script src="./script.js"></script>
   </body>
</html>
```
## DOCTYPE
•	HTML 5:
```ts
<!DOCTYPE html>
```
•	HTML 4 (Строгий синтаксис):
```ts
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
"http://www.w3.org/TR/html4/strict.dtd">
```

## Основные теги
•	Верхний уровень:
o	html - обертка документа
o	head - заголовок (не отображается на странице)
o	body - тело (отображается пользователю)
•	Внутри head:
o	title - название страницы
o	meta - дополнительная информация для браузера
o	link - подключение ресурсов (например, CSS)
o	script - загрузка JavaScript
•	Внутри body:
o	h1-h6 - заголовки
o	p - параграфы
o	div - блочный контейнер
o	span - строчный контейнер
o	a - гиперссылки
o	img - изображения
o	ul, ol, li - маркированные списки

## Гиперссылки
•	href - URL гиперссылки
•	target - окно для открытия ссылки
•	name - название якоря (вместо href)
```ts
<a href="http://iu5.bmstu.ru" target="_blank">Текст ссылки</a>
```

## Формы
•	action - URL для отправки формы
•	method - GET или POST
•	enctype - способ кодирования данных
```ts
<form method="POST">
   <input name="image" type="file">
   <input name="id" type="hidden" value="3">
   <input name="nick" type="text">
   <input type="submit" value="Отправить">
</form>
```
---
# CSS
---
Как выглядит CSS
```ts
.mid-play {
   padding: 13px 0px 0px 13px;
}
p.inner-play a {
   color: #3c3c3c;
   text-decoration: underline;
}
.big-top {
   background-image: url(img/pc/220_130_top.gif);
}
```

## Способы задания стилей
1.	Внешний файл:
```ts
<link rel="stylesheet" href="style.css">
```
2.	В HTML коде:
```ts
<style>...</style>
```
3.	В HTML теге:
```ts
<img style="margin: 3px" src="...">
```

## Основные стили
•	width, height - размер элемента
•	margin, padding - границы и отступы
•	display - отображение элемента
•	color - цвет текста
•	background - фон элемента
•	font - управление шрифтом
•	text-align - выравнивание текста

## Классы и идентификаторы
•	id - уникальный идентификатор элемента:
```ts
<div id="userpic"><img src="./..."></div>
```
•	class - список классов элемента (может повторяться):
```ts
<button class="btn btn-main">Одобрить</button>
```
## CSS селекторы
•	Базовые:
o	Универсальный: * { margin: 0px; }
o	По тегу: p { margin-top: 100px; }
o	По классу: .btn { border: solid 1px gray; }
o	По id: #userpic { padding: 100px }
•	Сложные:
o	Контекстные: div.article a { text-decoration: underline }
o	Дочерние: a > img { border: 2px }
o	Соседние: h2.sic + p { margin-left: 30px }
o	Группировка: h1, h2 { color: red }

## Наследование и приоритеты стилей
•	Стили наследуются от родительских элементов.
•	При конфликте стилей применяется более специфичный или расположенный ниже в коде.
•	Флаг !important перекрывает проверку специфичности.
```ts
<head>
   <style>
      p { color: red; }
      .class { color: black; }
      #id { color: blue; }
   </style>
</head>
<body>
   <p id="id" class="class">Hello World!</p>
</body>
```
---
# JavaScript
---
Пример JavaScript кода
```ts
<!DOCTYPE HTML>
<html>
<body>
   <p>Перед скриптом...</p>
   <script>
      alert('Привет, мир!');
   </script>
   <p>...После скрипта.</p>
</body>
</html>
```

## Способы загрузки JavaScript
1.	Внешний файл:
```ts
<script src="./jquery.js"></script>
```
2.	В HTML коде:
```ts
<script>...</script>
```

