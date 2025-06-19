// Получаем элемент с id 'exp'
const exp = document.getElementById('exp');

//по нажатию на эту кнопку будет запускаться вычисление
const calcButton = document.getElementById('calc');

//сюда будет выводиться результат вычислений
const calcResult = document.getElementById('result');

//при клике вызывается функция calcFunc
calcButton.addEventListener('click', calcFunc);

// Объект, описывающий возможные арифметические операции
const actions = { // функция умножение с преобразованием в целые числа
  multipul: {
    value: '*',
    label: 'multipul',
    func: (a,b) => (parseInt(a) * parseInt(b))
  },
  division: { // функция деления
    value: '/',             
    label: 'division',
    func: (a,b) => (a / b)
  },
  addition: { // функция сложениe с преобразованием в целые числа
    value: '+',
    label: 'addintion',
    func: (a,b) => (parseInt(a) + parseInt(b))
  },
  subtraction: { //функция вычитаниe с преобразованием в целые числа
    value: '-',
    label: 'subtraction',
    func: (a,b) => (parseInt(a) - parseInt(b)) 
  }
}

//Функция, вызываемая при нажатии кнопки, запускает вычисление выражения
function calcFunc() {
  const res = parseBrackets(exp.value);
  calcResult.innerHTML = res;
}

//функция для обработки скобок
function parseBrackets(str) {
  const out = str.match(/\((.*)\)/);  //ищет вхождение выражения в скобках
  if (out) {
    const expResult = parseBrackets(out[1]); //вычисляем выражение внутри скобок
    str = str.replace(out[0], expResult);   //заменяем скобочное выражение на результат
    return calcExpr(str);                  //вычисляем получившееся выражение без скобок
  } else {
    return calcExpr(str);                //если скобок нет — вычисляем выражение
  }
}

//Функция для вычисления выражения без скобок
function calcExpr(str) {
  let res;
  Object.keys(actions).map(function(type) { 
    res = parseExpr(str, actions[type]);
    if (res) {
      str = str.replace(res.str, res.value.toString());
      str = calcExpr(str);
    }
  });
  return str;
}

function parseExpr(str, action) {
  const reg = new RegExp(`(\\d+)\\s*\\${action.value}\\s*(\\d+)`);
  const out = str.match(reg); //ищем совпадение
  if (!out) return false; //если нет совпадения — возвращаем false
  
  const result = {
    str: out[0]
  };
  
  result.value = action.func(out[1], out[2]);  // вычисляем результат подвыражения, передавая числа в функцию операции
  return result;
}