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