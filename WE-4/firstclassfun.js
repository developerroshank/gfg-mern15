// function sum(a,b) {
//     return a+b
// }

// function substract(a,b) {
//     return a-b
// }

// function airthmatic(func,x,y) {
//     return func(x,y)
// }

// console.log(airthmatic(sum,20,43));

// console.log(airthmatic(()=>{return 10+23}));

// console.log(airthmatic((a,b)=>{return 10*5}))



/**
 * High ordered functions
 * map : 
 */

const a = [1,3,4,6,8,9,1]

// const double = a.map(element => console.log(element));

// const double = a.map(element => element);

// const mappedArray = a.map(element => element*5);


// const double = a.map(element => a.indexOf(element));

// console.log(double);
// console.log(mappedArray);

// const filtereArray = a.filter(Element=> Element%2)
// console.log(filtereArray);

const num = [2,4,5,6,7,8]
const ques = num.map(element=>element*5).filter(element=>element%2).reduce((acc,cur) =>  {
    acc += cur
    return acc;
},0)

console.log(ques);

/**
 * home work
 * Question: remove duplicate elements from an array. Note: no need to use inbuilt methods like Sets()
 */
