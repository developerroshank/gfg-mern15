// 1. Write a function that takes an array of numbers and returns a new array with only the positive numbers using if, for loop, and push.
// Example:
// Input: [1, -3, 4, 0, -2] → Output: [1, 4]

const num = [1, -3, 4, 0, -2];
let posNum = [];

for (let i = 0; i < num.length; i++) {
    const e = num[i];
    if (e > 0) {
        posNum.push(e);
    }
}

console.log(posNum);