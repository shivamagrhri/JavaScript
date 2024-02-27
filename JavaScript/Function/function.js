// function myFunction(){
//     console.log("Shivam Agrahari")
//     console.log("Learning JS")
// }
// myFunction()

// function sum(a,b){
//     console.log(a+b)
// }
// sum(13,14)

// let a = 5;
// let b = 6;
// console.log(a==b);
// console.log(a!=b);

// Comparision operator
// let a = 5;
// let b = 3;

// console.log(a==b) // will return true becauae js implicitly converts string into number


// console.log(a===b) // returns true strictly equal to checks data type also
// console.log(a!==b) // false

// console.log(a>=b)

// let c = a>b;
// let d= b>a;

// console.log(c || d)

// let age = 22;

// if (age> 18){
//     console.log("you can vote")
// }

// let age = 18;
// let mode = "dark";

// let color;
// if(mode === "dark"){
//     color = "black"
// }

// if(mode === "light"){
//     color = "white"
// }

// console.log(color)


// let color;
// let mode = "white";
// if( mode === "dark-mode"){
//     color = "black";
// }else {
//     color = "white";
// }

// console.log(color)

// let num = 15;

// if(num % 2 === 0){
//     console.log(num , " is even ");

// }else{
//     console.log(num , " is odd ");
// }

// let age = 45;

// if (age<18){
//     console.log("junior")
// }
// else if(age>60){
//     console.log("senior")
// } else{
//     console.log("middle")
// }

// let mode = "blue"
// let color;
// if(mode==="dark"){
//     color="black"
// }else if(mode==="pink"){
//     color="pink"
// }else if(mode==="blue"){
//     color="blue"
// }else if(mode==="light"){
//     color = "bright"
// }else{
//     color = "Anything"
// }

// console.log(color)

// ternary operator
// let age = 13;
// let result = age>= 18 ? "adult" : "not adult";
// console.log(result)


// Arrow Functions

// const arrowSum = (a,b) => {
//     console.log(a+b)
// }
// arrowSum(4,5)

// const arrowMul = (a,b) => {
//     return a*b
// }
// console.log(arrowMul(5,9))

// Ques 1

// function countVowels(str) {
//     // ShivamAgrahari
//     let count = 0
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     console.log(count)
// }
// countVowels("eeeee")

// Ques 2
// const countVow = (str) => {
//     let count = 0
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     console.log(count)
// }
// countVow("aeiou")

// For Each loop in Array
// let arr = [1,2,3,4,5,6,7]
// arr.forEach(function printFunc(val){
//     console.log(val)
// })

// arr.forEach((val) => {
//     console.log(val)
// })

// arr.forEach((val, i, arr) => {
//     console.log(val, i, arr)
// })

// Ques 3
// let arr = [1,2,3,4,5,6]
// arr.forEach((num) => {
//     console.log(num**2)
// })

// Map method in array

// let arr = [1,2,3,4,5,6]
// let newArr = arr.map((val) =>{
//     return val**2
// })
// console.log(newArr)

// Filter in Array

// let arr = [15,16,19,20,26,54,55,79,88,100]
// let newArr = arr.filter((val) => {
//     return val%2==0
// })
// console.log(newArr)

// Reduce Method

// let arr = [1,2,3,60,5,6]
// let output = arr.reduce((prev, curr) => {
//     return prev + curr
// })
// console.log(output)


// let output = arr.reduce((prev, curr) => {
//     return prev>curr ? prev : curr
// })
// console.log(output)

// Ques 4
// let marks = [97,64,32,49,99,96,86]
// let output = marks.filter((val) => {
//     return val > 90
// })
// console.log(output)

// Ques 5
// let n = prompt("Enter a number : ")
// let arr = []
// for(let i=0; i<=n; i++){
//     arr[i-1]=i
// }
// console.log(arr)

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr
// })
// console.log(sum)

// let prod = arr.reduce((res, forw) => {
//     return res*forw
// })
// console.log(prod)
