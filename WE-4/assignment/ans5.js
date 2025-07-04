// 5. Get all odd numbers from [1, 2, 3, 4, 5], then square them.

const num = [1, 2, 3, 4, 5];
let odd = [];

for (let i = 0; i < num.length; i++) {
    const e = num[i];
    if (e % 2) {
        odd.push(e ** 2);
    }
}
console.log(odd);


const oddNum = num.filter(Element => Element % 2).map(Element => Element ** 2);
console.log(oddNum);