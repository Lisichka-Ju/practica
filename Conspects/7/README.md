# Конспект лекции по асинхронному JavaScript

## Основные концепции асинхронности в JavaScript

### Проблема синхронного выполнения кода
JavaScript выполняется однопоточно, но некоторые операции (например, загрузка скриптов) могут занимать значительное время. Без асинхронности это блокировало бы выполнение всего кода.

Пример проблемы:
```javascript
function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');
alert('Ура, скрипт загрузился! (на самом деле нет)'); // Выполнится ДО загрузки скрипта
```

### Решение через колбэки
```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Здорово, скрипт ${script.src} загрузился`);
  alert(_); // Функция из загруженного скрипта
});
```

### Event Loop
JavaScript использует механизм Event Loop для обработки асинхронных операций:

- **Call Stack** - выполняет синхронный код
- **Microtask Queue** - для промисов и MutationObserver
- **Macrotask Queue** - для setTimeout, setInterval, setImm ediate
- **Render Queue** - для операций отрисовки

## Проблемы колбэков

### Callback Hell
Глубоко вложенные колбэки делают код нечитаемым:
```javascript
loadScript('/my/script.js', function(script) {
  loadScript('/my/script2.js', function(script) {
    loadScript('/my/script3.js', function(script) {
      // ...
    });
  });
});
```

### Обработка ошибок
Ошибки в асинхронных колбэках сложно обрабатывать:
```javascript
try {
  loadScript('...', onLoadScript);
} catch(err) {
  // Не сработает для асинхронных ошибок
}
```

## Промисы (Promise)

### Основы промисов
Промис может находиться в одном из состояний:
- `pending` - ожидание
- `fulfilled` - успешное выполнение
- `rejected` - выполнение с ошибкой

Пример:
```javascript
const promise = new Promise((resolve, reject) => {
  // Асинхронная операция
  if (success) resolve('result');
  else reject(new Error('failure'));
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Преимущества промисов
1. Читаемый цепочечный синтаксис:
```javascript
loadScript('/my/script.js')
  .then(() => loadScript('/my/script2.js'))
  .then(() => loadScript('/my/script3.js'));
```

2. Централизованная обработка ошибок через `.catch()`

3. Комбинирование промисов:
- `Promise.all()` - ожидает выполнения всех промисов
- `Promise.race()` - возвращает первый выполненный промис
- `Promise.any()` - возвращает первый успешно выполненный промис
- `Promise.allSettled()` - ждет завершения всех промисов

## Async/Await

Синтаксический сахар над промисами для более читаемого кода:

```javascript
async function loadData() {
  try {
    const script1 = await loadScript('/script1.js');
    const script2 = await loadScript('/script2.js');
    // ...
  } catch (error) {
    console.error('Ошибка загрузки:', error);
  }
}
```

## Fetch API
Метод fetch — это XMLHttpRequest нового поколения
Улучшенный интерфейс для осуществления запросов к серверу: как по части возможностей и контроля над происходящим, так и по синтаксису, так как построен на промисах

## Fetch API options
● method — метод запроса
● headers — заголовки запроса
(объект)
● body — тело запроса: FormData,
Blob, строка и т.п.

## Браузерная поддержка
JavaScript был создан в 1996 году
В 1997 году Ecma International предложила стандартизировать JavaScript, и в результате появился ECMAScript
ECMAScript содержит правила, сведения и рекомендации, которые должны соблюдаться скриптовым языком, чтобы он считался совместимым с ECMAScript
JavaScript - скриптовый язык общего назначения, соответствующий спецификации ECMAScript

## JavaScript-движок
Программа или интерпретатор, способный понимать и выполнять JavaScript-код
JavaScript-движки обычно используются в веб-браузерах, включая V8 в Chrome, SpiderMonkey в Firefox и Chakra в Edge. Каждый движок подобен языковому модулю, который позволяет приложению поддерживать определенное подмножество языка JavaScript.
Среда выполнения – в ней JavaScript-код выполняется и интерпретируется JavaScriptдвижком:
● На клиентской стороне средой выполнения JavaScript будет веб-браузер, в котором становятся доступными для манипуляций такие хост-объекты, как окна и HTMLдокументы.  
● На серверной стороне среда выполнения JavaScript — это Node.js.  

## Процесс ТС39
TC39 (технический комитет 39) — занимается развитием JavaScript. Его членами являются компании (помимо прочих, все основные производители браузеров)
Процесс TC39 — алгоритм внесения изменений в спецификацию ECMAScript. Каждое предложение по добавлению новой возможности в ECMAScript в процессе созревания проходит ряд этапов
0 этап: идея (strawman)
1 этап: предложение (proposal)
2 этап: черновик (draft)
3 этап: кандидат (candidate)
4 этап: финал (finished)

## ECMAScript (как выглядит)
● Декабрь 1999 — ECMAScript 3
● ECMAScript 4 (abandoned) — заброшенная версия
● Декабрь 2009 — ECMAScript 5
● Июнь 2011 — ECMAScript 5.1
● Июль 2015 — ECMAScript 2015 (ECMAScript 6th edition)
● Июль 2016 — ECMAScript 2016 (ECMAScript 7th edition)
● Июнь 2017 — ECMAScript 2017 (ECMAScript 8th edition)
● Лето 2018 — ECMAScript 2018 (и так далее)
ES.Next — так временно называют совокупность новых возможностей языка, которые могут войти в следующую версию спецификации.
Фичи из ES.Next правильнее называть “предложения” (proposals) , потому что они всё ещё находятся на стадии обсуждения


## Современные инструменты

### Транспайлинг с Babel
> Транспайлинг — это конвертация кода программы, написанной на одном языке программирования в другой язык программирования  
> Тут показан пример перевода кода из ES6 (ES2015) в старый ES5
Babel — многофункциональный транспайлер, позволяет транспиллировать ES5, ES6, ES2016, ES2017, ES2018, ES.Next, JSX и Flow  
Конвертирует современный JavaScript в код, понятный старым браузерам:
```javascript
// До
const f = num => `${num} в квадрате это ${num ** 2}`;

// После
var f = function(num) {
  return num + ' в квадрате это ' + Math.pow(num, 2);
};
```

## Bundler
Bundler — программа, которая упаковывает сложный проект со многими файлами и внешними
зависимостями в один (иногда несколько) файл, который будет отправлен браузеру.

### Сборка с Vite
Современный инструмент для сборки проектов, который:
- Объединяет множество файлов в один bundle
- Оптимизирует производительность
- Решает проблемы CORS
- Поддерживает горячую перезагрузку

## Применение сборки bundle через Vite
Вместо большого проекта с множеством файлов мы получили один файл js и один css, который и будет выполняться в браузере
Более того, теперь у нас нет проблемы CORS, так как страницу из bundle мы получаем от сервера бэкенда


