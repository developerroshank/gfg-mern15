const promise = new Promise((resolve, reject) => {
    const x = 5;
    if (x === 6) {
        resolve("resolved!!!")
    } else reject("not resolved")
}).then(() => console.log("resolved")).catch(() => console.log("somthing wrong"))



// const promise = new Promise((resolve, reject) => {
//     const x = 5;
//     if(x===5) {
//         resolve("resolved and check!!!")
//     } else reject("not resolved and failed!!!")
// }).then((response) => console.log(response)).catch((response) => console.log(response))


/**
 * 
 * @param {*} statement 
 * @param {*} cb 
 * 
 * promise
 */
const bakeBread = (statement) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(statement)
            resolve()
        }, 1000);
    })
}

const stuffing = (statement) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(statement)
            resolve()
        }, 1000);
    })
    reject()
}

const grilled = (statement) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(statement)
            resolve()
        }, 1000);
    })
}

bakeBread ("bake is bread")
.then(() => stuffing("stuffing is done"))
.then(() => grilled("grilling is done"))
.then(() => console.log("ready to serve"))
.catch(() => console.log("Something went wrong!!"))