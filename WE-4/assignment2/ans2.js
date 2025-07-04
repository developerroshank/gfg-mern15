// Return all even numbers from the array [5, 8, 12, 15, 19, 20].

const num = [5, 8, 12, 15, 19, 20];

function evenNum() {
    return num.filter(Element => Element % 2 === 0);
}

console.log(evenNum());