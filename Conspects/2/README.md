# Лекция 2: JavaScript
---
# Основы JavaScript
---
## Переменные
Объявление переменных:
- `let` – современный способ.  
- `var` – устаревший способ (не рекомендуется).  
- `const` – значение нельзя изменить.  

## Типизация
JavaScript — не строго типизированный язык.  
Пример:
```javascript
let message = "hello";
message = 123456;
```

## Преобразование типов
Примеры:
```javascript
"" == 0;       // true
"0" == 0;      // true
"" == "0";     // false
"0" == false;  // true
```

## Математические операции
```javascript
const a = 3 + 2;   // сложение
const b = a - 5;   // вычетание
const c = -b;      // отрицание
const d = 10 % 2;  // остаток от деления
const e = d * 2;   // умножение
const f = d / 2;   // деление
let a = 0;
a += 2; // сложение с присвоением
a++;    // плюс 1
```

## Операторы сравнения
```javascript
3 > 2;        
4 >= 1;       
1 < 3;        
2 <= 2;      
false == "";  
0 == 0;       
false != 1;   
false !== true; 
```

## Условные операторы
```javascript
if (year == 2007) {
  alert('Верните меня туда');
} else {
  alert('Эх...');
}

// Тернарный оператор
const year = (условие) ? 2007 : 2023;
```

## Циклы
```javascript
while (condition) {
  // тело цикла
}

do {
  // тело цикла
} while (condition);

for (начало; условие; шаг) {
  // тело цикла
}
```

## Функции
### Function Declaration
```javascript
function sum(a, b) {
  return a + b;
}
```

### Function Expression
```javascript
let sum = function(a, b) {
  return a + b;
};
```
*Function Expression* создаётся, когда выполнение доходит до него, и затем
уже может использоваться.
*Function Declaration* может быть вызвана раньше, чем она объявлена.

## Стрелочные функции
```javascript
const sum1 = (a, b) => a + b;
const sum2 = (a, b) => {
  let result = a + b;
  return result;
};

alert(sum(1, 2); // 3
```
---
# Объекты
---

## Создание объекта
```javascript
let user = new Object(); // Конструктор
let user = {};          // Литерал
```

## Доступ к полям
```javascript
const user = {
  name: "John",
  age: 30
};
console.log(user.name);    // "John"
console.log(user["age"]);  // 30
```

### Сравнение объектов
```javascript
let a = {};
let b = a;
alert(a == b); // true (одна ссылка)
---
let a = {};
let b = {};
alert(a == b); // false (разные объекты)
```
---
# Типы данных
---
## Примитивы
● string  
● number  
● boolean  
● symbol  
● null  
● undefined  
● bigint  

## Примитив как объект
Работа с методами примитива:  
● Примитивы остаются примитивами  
● Для доступа к методу создается “объект-обертка”, который  
предоставляет нужную функциональность, а потом удаляется  
Объекты обертки примитивов:  
● String  
● Number  
● Boolean  
● Symbol  
● BigInt  

## Примитив как объект
● Строка str - примитив  
● В момент обращения к toUpperCase создается “объект-обертка”  
● Запускается метод, возвращает новую строку  
● Специальный “объект-обертка” удаляется, остается примитив str  
```javascript
let str = "Привет;

alert(str.toUppercase());
```

## Примитив как объект
● null/undefined не имеют “объект-обертку”  
● Использовать конструкторы “объектов-оберток” нежелательно  
● Использование функцию без new - преобразование типов  

## Числа
● 1000000000  
● 1_000_000_000 - 1000000000  
● 1e9 - 100000000  
● 1e-9 - 100000000  
● 0b11111111 - 255 (двоичная)  
● 0o377 - 255 (восьмеричная)  
● 0xFF - 255 (шестнадцатеричные)  

## Числа (методы)
● num.toString(base) - число в строку  
● num.toFixed(digits) - округление в меньшую сторону   

## Числа (округление)
● Math.floor(num) - округление в меньшую сторону  
● Math.ceil(num) - округление в большую сторону  
● Math.round(num) - округление до ближайшего целого  
● Math.trunc(num) - удаление дробной части  

## Числа (неточные выражения)
- Слишком большое число  
- сложение дробных чаисел
- Потеря точности

## Числа (проверки)
● isNaN(value) - проверка на NaN
● isFinite(value) - преобразование в число, проверка что это число
● Number.isNaN(value) - строгая проверка isNaN
● Number.isFinite(value) - строгая проверка isFinite

## Числа (преобразование)
● +value или Number(value) - преобразование в число
● parseInt(value) - преобразование в число (только число из строки)
● parseFloat(value) - преобразование в число (только число из строки)

## Строки

● Одинарные кавычки
● Двойные кавычки
● Обратные кавычки

## Строки (методы)
● str.length - длина строки
● str.indexOf(str, pos) - получение индекса наличия подстроки (с начала)
● str.lastIndexOf(str, pos) - получение индекса наличия подстроки (с конца)
● str.toLowerCase() - преобразование в нижний регистр
● str.toUpperCase() - преобразование в верхний регистр
● str.includes(str, pos) - проверка наличия подстроки (с позиции)
● str.startsWith(str) - проверка наличия подстроки (с начала)
● str.endsWith(str) - проверка наличия подстроки (с начала)

## Строки (получение подстроки)
● str.slice(start, end) - возвращает часть строки от start (не включая) до end
● str.substring(start, end) - возвращает часть строки между start и end
● str.substr(start, length) - возвращает часть строки от start длины length
---
# Массивы
---
## Создание
```javascript
let arr = new Array();
let arr = [];
let fruits = ["Яблоко", "Апельсин", "Слива"];
alert(fruits[0]); // "Яблоко"
```
## Доступ
● arr[]
● arr.at(index)

## Массивы (методы)
● arr.length - длина массива
● arr.pop() - удаление последнего элемента
● arr.push(el) - добавление в конец массива
● arr.shift() - удаление первого элемента
● arr.unshift(el) - добавление в начало массива

## Массивы (добавление/удаление значений)
● arr.slice(start, end) - создание нового массива с start до end (не включая)
● arr.concat(arg1, arg2…) - создание нового массива с добавление argN

## Массивы (перебор элементов)
Цикл for

## Массивы (перебор элементов)
Цикл for of

## Массивы (перебор элементов)
Метод forEach

## Массивы (поиск)
● arr.indexOf(el, start) - получение индекса элемента (с начала)
● arr.lastIndexOf(el, start) - получение индекса элемента (с конца)
● arr.includes(el, start) - проверка наличия элемента
● arr.find(function(el, index)) - получение элемента по условию
● arr.findIndex(function(el, index)) - получение индекса по условию (с начала)
● arr.findLastIndex(function(el, index)) - получение индекса по условию (с конца)

## Массивы (преобразование массива)
● arr.filter(function(el, index)) - получение нового массива по условию
● arr.map(function(el, index)) - преобразование каждого элемента
● arr.sort(function(el1, el2)) - сортировка массива
● arr.reverse() - меняет порядок элементов на обратный
● str.split(delim) - преобразование строки в массив
● arr.join(glue) - преобразование массива в строку
- arr.reduce(function(acc, el, index))

## Массивы (проверка)
Array.isArray(arr) - проверка, что элемент массив

## Object (методы)
● Object.keys(obj) - получение массива ключей
● Object.values(obj) - получение массива значений
● Object.entries(obj) - получение массива ключ/значение


## Методы массивов
```javascript
fruits.pop();     // Удалить последний элемент
fruits.push("Груша"); // Добавить в конец
fruits.shift();   // Удалить первый элемент
fruits.unshift("Яблоко"); // Добавить в начало
```

## Поиск в массиве
```javascript
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"}
];
let user = users.find(item => item.id == 1); // {id: 1, name: "Вася"}
```

# Map
Map - коллекция ключ/значение

## Map (методы)
● map.set(key, value)
● map.get(key)
● map.has(key)
● map.delete(key)
● map.clear()
● map.size()
● map.keys() - получение массива ключей
● map.values() - получение массива значений
● map.entries() - получение массива ключ/значение

## Set
Set - коллекция значений
● set.add(value)
● set.has(value)
● set.delete(value)
● set.clear()
● set.size()
● set.keys() - получение массива значений
● set.values() - получение массива значений
● set.entiers() - получение массива значение/значение
---
# Классы
---
Kласс
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

let user = new User("Иван");
user.sayHi(); // "Иван"
```

## Наследование
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    alert(`${this.name} бежит!`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }
}
```
