const lists = [
  [1, 4, 5, 2, 3, 9, 8, 11, 0], 
  [1,2,3,5,6,7, 10, 11, 12, 14, 16,17, 18] 
];

console.log(lists.map(toRanges).join('\n')); // выводим результат для каждого массива

function toRanges(list) {
  const last = list.length - 1; // индекс последнего элемента
  if (!last) return String(list[0]); // если один элемент — возвращаем его как строку

  const sorted = list.sort((a, b) => a - b), // сортируем массив по возрастанию
        ranges = []; 

  for (var r = [sorted[0]], i = 1; i <= last; ++i) {
    if (sorted[i] - sorted[i - 1] === 1) continue; // если последовательность продолжается — пропускаем
    if (i !== 1) r.push(sorted[i - 1]); 
    ranges.push(r); 
    r = [sorted[i]]; 
  }

  if (r[0] !== sorted[last]) r.push(sorted[last]); 
  ranges.push(r); 

  return ranges.map(r => r.join('-')).join(', '); // строкa с диапазонами
}















