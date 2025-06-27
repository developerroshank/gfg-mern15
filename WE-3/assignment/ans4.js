const num = [12, 23, 22, 21];
let max = num[0];
let secMax = num[0];

for (let i = 0; i < num.length; i++) {
    const e = num[i];

    if (e > max) {
        secMax = max;
        max = e;
    } else if (e > secMax && e !== secMax) {
        secMax = e;
    }
}

console.log("Second Largest:", secMax);
console.log("Largest:", max);