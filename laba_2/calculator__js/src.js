let a = ''; //первое число
let b = ''; //Второе число
let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'] //числа
const action = ['+/-', '%', '/', 'X', '-', '+'] //знаки

const out = document.querySelector('.calc__screen p'); //экран

function clearAll () {                                           //функция для очистки всего
    a = ''; //первое число и результат
    b = ''; //второе число
    sign = ''; //знак
    finish = false;
    out.textContent = '0';
}

document.querySelector('.C').onclick = clearAll();

document.querySelector('.buttons').onclick = (event) => {          //нажатие кнопки

    //определитель нажата кнопка или нет
    if (!event.target.classList.contains('btn')) return;          //кнопка не нажата
    if (event.target.classList.contains('C')) return;             //нажата кнопка С (clearAll)

    out.textContent = '';                                         //очистка экрана

    const key = event.target.textContent;                         //Получаю нажатую кнопку

    if (digit.includes(key)) {
        a+=key;
        console.log(a, b, sign);
    }

}

