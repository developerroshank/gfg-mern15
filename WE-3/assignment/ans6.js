const num = [10, 4, 5, 6, 9, 7];
let min = num[0];
let max = num[0];

for (let i = 0; i < num.length; i++) {
    const e = num[i];
    if (e < min) {
        min = e;
    }
    if (e > max) {
        max = e;
    }

}

console.log("Minimum Value:", min);
console.log("Maximum Value:", max);