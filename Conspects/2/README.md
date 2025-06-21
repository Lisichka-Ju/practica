# Лекция 2: JavaScript

## Основы JavaScript

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

















### Стрелочные функции
```javascript
const sum1 = (a, b) => a + b;
const sum2 = (a, b) => {
  let result = a + b;
  return result;
};
```

## Объекты
[Подробнее](https://learn.javascript.ru/object-basics)

### Создание объекта
```javascript
let user = new Object(); // Конструктор
let user = {};          // Литерал
```

### Доступ к полям
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

let a = {};
let b = {};
alert(a == b); // false (разные объекты)
```

## Массивы
### Создание и доступ
```javascript
let arr = new Array();
let arr = [];
let fruits = ["Яблоко", "Апельсин", "Слива"];
alert(fruits[0]); // "Яблоко"
```

### Методы массивов
```javascript
fruits.pop();     // Удалить последний элемент
fruits.push("Груша"); // Добавить в конец
fruits.shift();   // Удалить первый элемент
fruits.unshift("Яблоко"); // Добавить в начало
```

### Поиск в массиве
```javascript
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"}
];
let user = users.find(item => item.id == 1); // {id: 1, name: "Вася"}
```

## Классы
[Подробнее](https://learn.javascript.ru/classes)

### Пример класса
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

### Наследование
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

## JSON
### Преобразование в строку
```javascript
let student = {
  name: 'John',
  age: 30
};
let json = JSON.stringify(student);
```

### Парсинг строки
```javascript
let user = '{"name": "John", "age": 35}';
user = JSON.parse(user);
alert(user.name); // "John"
```

## Map и Set
### Map
```javascript
let map = new Map();
map.set("1", "str1");
map.get("1"); // "str1"
```

### Set
```javascript
let set = new Set();
set.add("John");
set.add("Pete");
alert(set.size); // 2
```

## Дополнительные материалы
[Документ](https://learn.javascript.ru/document)
```

