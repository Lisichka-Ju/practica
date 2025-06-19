function Palindrom(input) {
  const str = String(input).toLowerCase().replace(/[^a-zа-я0-9]/gi, '');
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(Palindrom('А роза упала на лапу Азора')); 
console.log(Palindrom(121));
console.log(Palindrom(1890));