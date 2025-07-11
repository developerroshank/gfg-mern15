// Set() is a collection of unique items.

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
console.log(mySet);

mySet.delete(3); // delete takes index as an argumnents
console.log(mySet);

console.log(mySet.has(6)); 


// map() ==> map() is built-in function which is key-value pairs
const myMap = new Map();
myMap.set('name', 'roshan');
myMap.set(123, 'roll');
myMap.set(true, 'male');

console.log(myMap);