// 


let arr = ["apple", "banana", "grape"];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    for (let j = 0; j < word.length; j++) {
        let ch = word[j];
        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u'
        ) {
            count++;
        }
    }
}

console.log(`Total vowels: ${count}`);