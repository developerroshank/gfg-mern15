// 9. Flatten an array of arrays:
// [[1, 2], [3, 4], [5]]
// output=>[1,2,3,4,5]

let arr = [[1, 2], [3, 4], [5]];
arr = arr.reduce((a, b) => a.concat(b))

console.log(arr);
