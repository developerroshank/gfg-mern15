// 10. Remove falsy values from an array:
// [0, "hello", false, null, 42, "", undefined]

let arr = [0, "hello", false, null, 42, "", undefined];

arr = arr.filter(Boolean);

console.log(arr);