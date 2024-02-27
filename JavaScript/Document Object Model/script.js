// Dom manipulation

// document.getElementById("myid")
// document.getElementsByClassName("classname")
// let paras = document.getElementsByTagName("p")
// console.dir(paras)

// Query selector

// document.querySelector("myid/myclass/tag") - first class/tag/id
// document.querySelectorAll("myid/myclass/tag") - for all
// let div = document.querySelector("div")
// console.dir(div)

// let h2 = document.querySelector("h2")
// console.dir(h2)
// h2.innerText = h2.innerText + " from Apna College"

// let divs = document.querySelectorAll("div")
// divs[0].innerText = "Pankaj Ojha"
// divs[1].innerText = "Dheeraj Gupta"
// divs[2].innerText = "Satyarth Shukla"
// let idx = 0
// for(div of divs){
//     div.innerText = `Unique Value is ${idx}`
//     idx++
// }

// let div = document.querySelector("div")
// console.dir(div)
// let id = div.getAttribute("id")
// console.log(id)

// let name = div.getAttribute("name")
// console.log(name)

// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "ojhaclass"))

// let newBtn = document.createElement("button")
// newBtn.innerText = "Shreya Mishra"
// console.log(newBtn)

// let div = document.querySelector("div")
// // div.style.backgroundColor = "yellow"
// div.after(newBtn)
// newBtn.remove()


let newBtn = document.createElement("button")
newBtn.innerText = "Click Me"
newBtn.style.color = "white"
newBtn.style.backgroundColor = "red"
document.querySelector("body").prepend(newBtn)

let para = document.querySelector("p")
// para.setAttribute("class", "newClass")
para.classList.add("newClass")