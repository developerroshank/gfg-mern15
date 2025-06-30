/**
 * ## 3. Write a program that separates even and odd numbers from an array and stores them in two different arrays.
 * Input: [1, 2, 3, 4, 5, 6]
 * Output:
 * Even: [2, 4, 6]
 * Odd: [1, 3, 5]
 */

const num = [1, 2, 3, 4, 5, 6];
const even = [];
const odd = [];


for (let i = 0; i < num.length; i++) {
    const e = num[i];
    if (e % 2 === 0) {
        even.push(e);
    } else {
        odd.push(e);
    }
}

console.log("Even Numbers : ", even);
console.log("Odd Numbers : ", odd);