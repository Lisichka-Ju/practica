# Лекция 3: Углубленный JavaScript

## Продвинутая работа с функциями

### Rest-оператор
Используется для сбора всех оставшихся аргументов функции в массив.

**Пример:**
```javascript
function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
```

### Spread-оператор
Позволяет разложить элементы массива в отдельные аргументы.

**Пример:**
```javascript
const arr1 = [0, -2, 1, 5];
const arr2 = [100, 200, 300, -322];
console.log(Math.max(...arr1, ...arr2));
```

### Замыкание
Функция запоминает своё лексическое окружение даже после завершения выполнения.

**Пример:**
```javascript
function makeWorker() {
    let name = "Pete";
    return function() {
        alert(name);
    };
}
let name = "John";
let work = makeWorker();
work(); // "Pete"
```

### Лексическое окружение
Каждая функция, блок кода или скрипт имеет связанный с ним объект `LexicalEnvironment`, который содержит локальные переменные и ссылку на внешнее окружение.

**Пример:**
```javascript
let phrase = "Hello";
function say(name) {
    alert(`${phrase}, ${name}`);
}
say("John"); // "Hello, John"
```

### Функции-обёртки (декораторы)
Позволяют добавлять дополнительное поведение к функциям.

**Пример:**
```javascript
function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) return cache.get(x);
        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}
```

### Привязывание контекста
Методы `call`, `apply` и `bind` позволяют явно указать контекст вызова функции.

**Пример:**
```javascript
function say(phrase) {
    alert(this.name + ': ' + phrase);
}
let user = { name: "John" };
say.call(user, "Hello"); // "John: Hello"
```

## Прототипы и наследование

### Прототипное наследование
Объекты могут наследовать свойства и методы других объектов через свойство `[[Prototype]]`.

**Пример:**
```javascript
let animal = { eats: true };
let rabbit = { jumps: true };
rabbit.__proto__ = animal;
alert(rabbit.eats); // true
```

### Классы
Синтаксический сахар для прототипного наследования.

**Пример:**
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    run(speed) {
        alert(`${this.name} бежит со скоростью ${speed}.`);
    }
}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name} прячется!`);
    }
}
let rabbit = new Rabbit("Белый кролик");
rabbit.run(5); // "Белый кролик бежит со скоростью 5."
```

## Модули

### Экспорт и импорт
Позволяют разделять код на отдельные файлы и использовать их функциональность.

**Пример:**
```javascript
// say.js
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// main.js
import { sayHi } from './say.js';
sayHi('John'); // "Hello, John!"
```

## Обработка ошибок

### Try...catch
Позволяет обрабатывать ошибки в коде.

**Пример:**
```javascript
try {
    let user = JSON.parse("{ некорректный JSON }");
} catch (e) {
    alert("Ошибка: " + e.message);
}
```

### Пользовательские ошибки
Можно создавать собственные классы ошибок.

**Пример:**
```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
```

## Регулярные выражения

### Создание и использование
Используются для поиска и замены текста.

**Пример:**
```javascript
let regexp = /любо/i;
let str = "Любо, братцы, любо!";
alert(str.match(regexp)); // "Любо"
```

## События

### Обработчики событий
Позволяют реагировать на действия пользователя.

**Пример:**
```javascript
document.getElementById('button').onclick = function() {
    alert('Клик!');
};
```

### Всплытие и погружение
События сначала погружаются от корня к целевому элементу, а затем всплывают обратно.

**Пример:**
```javascript
form.addEventListener("click", e => alert('Погружение'), true);
form.addEventListener("click", e => alert('Всплытие'));
```

### Отмена действий по умолчанию
Можно предотвратить стандартное поведение элемента.

**Пример:**
```javascript
document.querySelector('a').onclick = function(event) {
    event.preventDefault();
    alert("Ссылка не откроется!");
};
```
