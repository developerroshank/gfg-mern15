/**
 * Task 2 
 * channing
 */

const num = [2, 4, 5, 6, 7, 8];

const ques = num.map(element => element * 5).filter(element => element % 2  === 0).reduce((acc, cur) => {
    acc += cur
    return acc;
}, 0);

console.log(ques);
