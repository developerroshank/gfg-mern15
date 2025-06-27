const num = [1, 2, 3, 4];
const rev_num = [];

for (let i = num.length - 1; i >= 0; i--) {
    const e = num[i];
    rev_num.push(e);
}

console.log("Reversed Numbers:", rev_num);