function Palindrom(input) {
  const str = String(input)
    .toLowerCase()
    .replace(/[^a-zа-я0-9]/gi, ''); // Оставляем только буквы и цифры

  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(Palindrom('А роза упала на лапу Азора')); 
console.log(Palindrom(121));
console.log(Palindrom(1890));