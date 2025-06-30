/**
 * ## 7. Write a function that checks how many strings in an array are palindromes.
 * Input: ["madam", "apple", "civic", "pop"]
 * Output: 3
 */

let arr = ["madam", "apple", "civic", "pop"];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (e === e.split('').reverse().join('')) {
        count++;
    }
}

console.log(`Palindromes: ${count}`);