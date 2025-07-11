/**
 * Currying  ==> Very Imp.
 * 
 * Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.
 */

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3));
