// 7. Count the number of times each item appears in the array:
// ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

let str = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

str = str.filter(s => s == s.pop())

console.log(str);