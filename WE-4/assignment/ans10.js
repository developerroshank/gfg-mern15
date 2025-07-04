// 10. Remove falsy values from an array:
// [0, "hello", false, null, 42, "", undefined]

let arr = [0, "hello", false, null, 42, "", undefined];

arr = arr.filter(s => s == s);

console.log(arr);