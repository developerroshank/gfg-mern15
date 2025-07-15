// const myButton = () => console.log('hello')

// const a = prompt("enter the number")
// const b = prompt("enter the number")

// const sum = () => console.log(Number(a) + Number(b))

// const btn = document.getElementById("btn")

// btn.addEventListener('click' , () => console.log("clicked"))
// btn.addEventListener('mouseover' , () => console.log("mouseover"))

// console.log(document) // browser history
// console.log(window) // 


// const numsClass = document.getElementsByClassName("nums")
// console.log(numsClass)
// const numsID = document.getElementById("nums")
// console.log(numsID)


/**
 * Event Bubbling
 */

const grandParent = document.getElementById('grandParent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// grandParent.addEventListener('click', (event) => console.log("grandParent"))
// parent.addEventListener('click', (event) => console.log("parent"))
// child.addEventListener('click', (event) => console.log("child"))

// solved

grandParent.addEventListener('click', (t) => {
    t.stopPropagation()
    console.log("grandParent")
})
parent.addEventListener('click', (t) => {
    t.stopPropagation()
    console.log("parent")
})
child.addEventListener('click', (t) => {
    t.stopPropagation()
    console.log("child")
})

/**
 * Capturing
 */

// grandParent.addEventListener('click', (event) => {
//     console.log("grandParent")
// }, true)

// parent.addEventListener('click', (event) => {
//     console.log("parent")
// }, true)

// child.addEventListener('click', (event) => {
//     console.log("child")
// }, true)



// const a = prompt('enter any number')
// const b = prompt('enter any number')

// const myFun = () => console.log(Number(a) + Number(b));