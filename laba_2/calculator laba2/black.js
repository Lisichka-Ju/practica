let sim = ['*','/','-','+','.'];
let input = ''; // Строка, хранящая текущий ввод пользователя
let story = [];
let longStory = ''; // Строка, хранящая историю вычислений
let $input = document.querySelector('.input');
let $story = document.querySelector('.story');

$input.onkeyup = function(e){ // Обработчик события нажатия клавиши в поле ввода
	console.log(e) // Вывод объекта события в консоль (для отладки)
	if(e.key == 'Enter') // Если нажата клавиша Enter это то же самое что =
		ev('=');
}

$input.oninput = function(e){ // Обработчик события изменения значения поля ввода
	ev(e.inputType == "deleteContentBackward" ? 'del' : e.data);
	return false;
};

[...document.querySelectorAll('button')].forEach(function(el) {	
	el.onclick = ev;
})

function ev(data) { // Функция обработки событий
	let value = typeof data == 'string' ? data : this.attributes['inTo'].value;

	if(value == 'C'){ // Если нажата кнопка "C" (очистка)
		if(!input && $input.value) // Если input пуст
			input = $input.value;

		if(input) // Если input не пуст
			return $input.value = longStory = input = '';

		$story.innerHTML = ''; // Очистка истории вычислений
		return false;
	}

	if(value == '='){ // Если нажата кнопка "="
		if(input != $input.value)
			input = $input.value;
		
		input = sim.includes(input[input.length-1]) ? input.slice(0, -1) : input; // Если последний символ в input - оператор, удаляем его
		input = sim.includes(input[input.length-1]) ? input.slice(0, -1) : input;

		let string = longStory ? `(${longStory.split('=')[0]})${input.replace(longStory.split('=')[1], '')}` : input; // Формируем строку для вычисления
		let result = strToMath(string);

		
		longStory = `${string}=${result}`; 
		story.push(`${input}=${result}`);
		$story.innerHTML += `<i>${story[story.length-1]}</i>`;
		input = $input.value = result;

		return false;
	}

	if(value == 'del'){ // Если нажата кнопка "del" (удаление последнего символа)
		input = $input.value = input.slice(0, -1);
		return false;
	}

	if(story.length && value == '.' || !input && value == '.'){ 
		value = '0.';
	}

	if(sim.includes(input[input.length-1]) && sim.includes(value)){
		if(value != '-' && sim.includes(input[input.length-1]))
			input = input.slice(0, -1);
		if(value == '-' && input[input.length-1] == '-' || value == '-' && input[input.length-1] == '+')
			input = input.slice(0, -1);
		if(value != '-' && sim.includes(input[input.length-1]))
			input = input.slice(0, -1);
	}

	if(input == '' && sim.includes(value) && value != '-'){
		value = '';
	}

	if(story.length && !sim.includes(value)){
		input = '';
		longStory = '';
	}

	story = []; // Очищаем историю вычислений (массив story)

	input += value;
	$input.value = input;


	if (value === 'x^2') {  // Квадрат числа
        input += '**'; // Используем ** для степени
        value = '**';
    }
    if (value === 'x!') {  // Факториал числа
        input = factorial(parseFloat(input));
        $input.value = input;
        return false;
    }
    if (value === '000') {  // Три нуля
        input += '000';
    }
   if (value === '%') { // Процент
        input += '/100*';
        value = '/100*';
    }
    if (value === 'sqrt') { // Квадратный корень
      letinput = 'Math.sqrt(' + input + ')';
      value = 'Math.sqrt(';
    }
}


// Функция для вычисления факториала
function factorial(n) {
  if (isNaN(n) || !Number.isInteger(n) || n < 0) {
    return NaN; // Факториал определен только для неотрицательных целых чисел
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


// функция для накапления +, -, *, /

function strToMath(string){ // Функция для вычисления результата строкового выражения
	string = string.replaceAll(' ', '').replaceAll('+', ' + ').replaceAll('*', ' * ').replaceAll('-', ' - ').replaceAll('/', ' / ').split(' ');
	
	for(let i = 0; i < string.length; i++){ // Перебираем элементы массива
		if(string[i] == ''){ // Если элемент пустой
			string.splice(i, 2); // Удаляем текущий и следующий элементы
			string[i] = '-'+string[i]; // Объединяем следующий элемент со знаком "-"
		}
	}
	
	let calc = document.createElement('calc'); // Создаем временный элемент <calc>
	calc.style['opacity'] = `calc(${string.join(' ')})`;
	let result = parseFloat(calc.style['opacity'].replace('calc(', '').replace(')', ''))
	calc.remove(); // Удаляем временный элемент

	return result; // Возвращаем результат
}





