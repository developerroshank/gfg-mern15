// 7. Count the number of times each item appears in the array:
// ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, []);

console.log(count);

// console.log(str);