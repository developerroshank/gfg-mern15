// function sum(a, b, c) {
//     return a + b + c;
// }

// sum(1, 2, 3);




// function outerFunc() {
//     return function innerFunc() {
//         return "Hello World";
//     }
// }
// console.log(outerFunc())


/**
 * Currying  ==> Very Imp.
 * 
 * Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.
 */

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log(sum(1)(2)(3))


/**
 * Spread Operator
 */

// const arr = [1,4,5,6,3,3]
// const arr2 = [1,4,5,6,3,3]
// const arr3 = [1,4,5,6,3,3]

// const newArr = [...arr, ...arr2, ...arr3]
// console.log(newArr);


/**
 * Rest Operator
 */

// function sum(a,b,c,...d) {
//     console.log(a,b,c,'values') 
//     console.log(d)
// }

// console.log(sum(...newArr))



/**
 * Destructuring ==> ES6
 */

// Object == key value pair

// const obj = {
//     name: "roshan",
//     age: 200,
//     isStudent: true,
//     address: {
//         room: 11,
//         city: "Noida",
//         state: "Uttar Pradesh"
//     },
//     skills: ['a', 'b', 'c']
// }

// console.log(obj.age)


// To upper case skills

// const toSentenceCase = obj.skills.map(e => e.toUpperCase())
// console.log(toSentenceCase)



const people = [
    { name: "Aarav Mehta", age: 24 },
    { name: "Isha Verma", age: 22 },
    { name: "Karan Malhotra", age: 29 },
    { name: "Sneha Reddy", age: 26 },
    { name: "Rohan Kapoor", age: 31 },
    { name: "Tanya Joshi", age: 28 },
    { name: "Vikram Shah", age: 35 },
    { name: "Neha Dubey", age: 21 },
    { name: "Siddharth Rao", age: 33 },
    { name: "Pooja Nair", age: 25 },
    { name: "Yash Tiwari", age: 30 },
    { name: "Ananya Ghosh", age: 27 },
    { name: "Manav Singh", age: 23 },
    { name: "Divya Chauhan", age: 20 },
    { name: "Arjun Bhatia", age: 32 },
    { name: "Kriti Sinha", age: 24 },
    { name: "Rahul Deshmukh", age: 29 },
    { name: "Meera Pillai", age: 26 },
    { name: "Devansh Jain", age: 34 },
    { name: "Aisha Qureshi", age: 22 }
];

// ==> Access all name
const n = people.map(e => e.name)
console.log(n)


// ===> Covert name first letter cpas to small || small to caps
const a = people.map(e => e.name[0].toLowerCase() + e.name.slice(1).toUpperCase())
console.log(a)




/**
 * Object.keys, Object.values, Object.entries
 */

// const obj = {
//     name: "roshan",
//     age: 200,
//     isStudent: true,
//     address: {
//         room: 11,
//         city: "Noida",
//         state: "Uttar Pradesh"
//     },
//     skills: ['a', 'b', 'c']
// }


// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))




/**
 * for each loop
 */

// const arr = ['jashmin', 'venkatesh', 'gopalachari', 'latika'];
// const newArr = []

// arr.forEach(e=>{
//     const word = e[0].toUpperCase() + e.slice(1).toLowerCase()
//     newArr.push(word)
// })

// console.log(newArr)



/**
 * for-of & for-in
 */

// const obj = {
//     name: "roshan",
//     age: 200,
//     isStudent: true,
//     address: {
//         room: 11,
//         city: "Noida",
//         state: "Uttar Pradesh"
//     },
//     skills: ['a', 'b', 'c']
// }


// const arr = ['jashmin', 'venkatesh', 'gopalachari', 'latika'];

// for (const e of arr) {
//     console.log(e)
// }

// for (const i in obj) {
//     console.log(obj[i])
// }


/**
 * Ques. Find the most occurance of a string.
 */

// const findOccurance = (str) => {
//     const obj = {}
//     const newStr = str.split(' ').join("").split('')
//     for (const char of newStr) {
//         if (!obj[char]) {
//             obj[char] = 1
//         } else {
//             obj[char] +=1
//         }
//     }
//     // return obj

//     let maxCount = 0
//     let maxChar = ""
//     for (let char in obj) {
//         // console.log(obj[char])
//         if (obj[char] > maxCount) {
//             maxChar = char
//             maxCount = obj[char]
//         }
//     }
//     return maxChar
// }

// console.log(findOccurance('hello worrrrrrrrrrrrrrrrrld'));

