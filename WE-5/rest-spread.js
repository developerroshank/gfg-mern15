/**
 * Spread Operator
 */

const arr = [1,4,5,6,3,3]
const arr2 = [1,4,5,6,3,3]
const arr3 = [1,4,5,6,3,3]

const newArr = [...arr, ...arr2, ...arr3]
console.log(newArr);


/**
 * Rest Operator
 */

function sum(a,b,c,...d) {
    console.log(a,b,c,'values') 
    console.log(d)
}

console.log(sum(...newArr));
