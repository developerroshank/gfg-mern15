let arr = ["madam", "apple", "civic", "pop"];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (e === e.split('').reverse().join('')) {
        count++;
    }
}

console.log(`Palindromes: ${count}`);