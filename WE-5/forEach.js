/**
 * for each loop
 */

const arr = ['jashmin', 'venkatesh', 'gopalachari', 'latika'];
const newArr = []

arr.forEach(e => {
    const word = e[0].toUpperCase() + e.slice(1).toLowerCase()
    newArr.push(word);
});

console.log(newArr);