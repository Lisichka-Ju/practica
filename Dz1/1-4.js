function getSumAndMultOfArray(arr) {
    let sum = 0;
    let m = 1;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        m *= arr[i];
    }

    return { sum: sum, m: m};
}

const nums = [5, 7, 37, 4, 5, 8, 99, -7, -8];
const result = getSumAndMultOfArray(nums);

console.log("Сумма:", result.sum);
console.log("Произведение:", result.m);
