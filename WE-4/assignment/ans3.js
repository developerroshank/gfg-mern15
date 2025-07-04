// 3. Find the sum of all numbers in the array [3, 6, 9, 12].

const num = [3, 6, 9, 12];

const sumNum = num.reduce((a, b) => a + b, 0);

console.log(sumNum);