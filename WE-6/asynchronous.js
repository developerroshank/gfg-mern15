console.log(1)
console.log(2)
console.log(3)
setTimeout(() => console.log(4), 0)
console.log(5)
setTimeout(() => console.log(6), 0)

/**
 * 
 * @param {*} statement 
 * @param {*} cb 
 * 
 * callback hell (pyramid of doom)
 */
const bakeBread = (statement, cb) => {
    setTimeout(() => {
        console.log(statement)
        cb()
    }, 1000);
}

const stuffing = (statement, cb) => {
    setTimeout(() => {
        console.log(statement)
        cb()
    }, 1000);
}

const grilled = (statement, cb) => {
    setTimeout(() => {
        console.log(statement)
        cb()
    }, 1000);
}

bakeBread ("bake is bread", () =>{
    stuffing("stuffing has been done!!", () => {
        grilled("sandwich has been grlled", ()=> {
            setTimeout(() => {
                console.log("Ready to Serve!!!");
            }, 1000);
        })
    })
})