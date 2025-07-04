// 1. Given the array [1, 2, 3, 4], return a new array with each element doubled.

const arr = [1, 2, 3, 4];

function doubleArr() {
    return arr.map(Element => Element * 2);
}

console.log(doubleArr());