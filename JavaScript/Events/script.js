// let btn1 = document.querySelector("#btn1")
// btn1.onclick = () => {
//     console.log("You are on button")
//     let a = 25
//     a++
//     console.log(a)
// }
// btn1.onclick = (e) => {
//     console.log(e)
//     console.log(e.type)

// }

// let div = document.querySelector("div")
// div.onmouseover = () => {
//     console.log("You are on the div")
// }
// let btn1 = document.querySelector("#btn1")
// btn1.addEventListener("click", () =>{
//     console.log("button 1 was Clicked handler-1")
// })
// btn1.addEventListener("click", () =>{
//     console.log("button 1 was Clicked handler-2")
// })
// const handler3 = () =>{
//     console.log("button 1 was Clicked handler-3")
// }
// btn1.addEventListener("click", handler3)
// btn1.addEventListener("click", () =>{
//     console.log("button 1 was Clicked handler-4")
// })
// btn1.removeEventListener("click", handler3)


let mode = document.querySelector("#mode")
let body = document.querySelector("body")
let currMode = "light"

mode.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
        currMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currMode)
})