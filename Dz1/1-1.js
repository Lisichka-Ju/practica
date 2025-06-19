function concatenate(arr, p) {
    return arr.join(p);
}

const strings = ['Я','Учусь','на','лучшей','кафедре'];
const p = " ";
const result = concatenate(strings, p);
console.log(result);
