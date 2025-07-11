/**
 * Ques. Find the most occurance of a string.
 */

const findOccurance = (str) => {
    const obj = {}
    const newStr = str.split(' ').join("").split('')
    for (const char of newStr) {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }
    
    // return obj

    let maxCount = 0;
    let maxChar = "";
    for (let char in obj) {
        // console.log(obj[char])
        if (obj[char] > maxCount) {
            maxChar = char;
            maxCount = obj[char];
        }
    }
    return maxChar;
}

console.log(findOccurance('hello world'));