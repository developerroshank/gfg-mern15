var a = 10;
let b = 'Hello';
const c = true;
function abc() {
    var d = 100;
    let e = 'Hii';
    const f = false;
    function xyz() {
        console.log('Hello world')
    }
    xyz();
    console.log(d)
    console.log(e)
    console.log(f)
}
function qrt() {
    console.log('Hii this is awesome');
}


abc();
console.log(a);
console.log(b);
qrt();
console.log(c);