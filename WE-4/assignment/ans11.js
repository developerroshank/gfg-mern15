// 11. Implement your own version of the map() function.

function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const num = [1,2,3,4,5,6];

const squred = customMap(num, function(n) {
    return n * n
});
console.log(squred);


const double = customMap(num, function(n) {
    return n * 2
});
console.log(double);


const fruits = ["mango", "apple", "grape"];
const capitalized = customMap(fruits, function(fruit) {
  return fruit[0].toUpperCase() + fruit.slice(1);
});
console.log(capitalized);