// 8. Convert an array of numbers into an array of strings with a dollar sign prefix, e.g., [10, 20, 30] → ['$10', '$20', '$30'].

const num = [10, 20, 30];

const newNum = num.map(e => '$' + e);
console.log(newNum);