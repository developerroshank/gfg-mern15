/**}
 * 8. Given an array of words, return the longest word and its length.
 * Input: ["apple", "banana", "grapefruit"] → Output: "grapefruit", 10
 */

const words = ["apple", "banana", "grapefruit"];
let wordLength = 0;
let lonWord = "";

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > wordLength) {
        lonWord = word;
        wordLength = lonWord.length;
    }
}

console.log("Longest Word:", lonWord);
console.log("Word Length:", wordLength);