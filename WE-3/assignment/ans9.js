const num = [123, 45, 7];
let output = [];

for (let i = 0; i < num.length; i++) {
    const d = num[i].toString();
    let sum = 0;

    for (let j = 0; j < d.length; j++) {
        const e = Number(d[j]);
        sum += e;
    }

    output.push(sum);
}

console.log("Sum of Digits:", output);