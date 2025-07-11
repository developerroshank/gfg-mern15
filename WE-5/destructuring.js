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

const data = [
    {
        name: 'harsh',
        age: 20
    },
    {
        name: 'shivam',
        age: 24
    },
    {
        name: 'mohan',
        age: 28
    },
    {
        name: 'monika',
        age: 21
    },
    {
        name: 'rohit',
        age: 25
    },
    {
        name: 'akash',
        age: 19
    },
];

// ==> Access all name
const n = data.map(e => e.name)
console.log(n);

// ===> Covert name first letter cpas to small || small to caps

const p = data.map(e => e.name[0].toUpperCase() + e.name.slice(1));
console.log(p);



/**
 * Object.keys, Object.values, Object.entries
 */

const obj = {
    name: "roshan",
    age: 200,
    isStudent: true,
    address: {
        room: 11,
        city: "Noida",
        state: "Uttar Pradesh"
    },
    skills: ['a', 'b', 'c']
}


console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
