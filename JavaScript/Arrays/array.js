// let arr = [97,96,94,98,92]
// console.log(arr.length)


// Looping over an Array
// for loop
// let arr = [1,2,3,4,5,6,7,8,9]
// for(let idx=0; idx<arr.length; idx++){
//     console.log(arr[idx])
// }

// for of loop
// let arr = ["Shivam", "Shreya", "Ojha", "Dheeraj", "Satya"]
// for(let naam of arr){
//     console.log(naam.toUpperCase())
// }

// Ques 1

// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0
// for(let val of marks){
//     sum += val
// }

// let avg = sum/marks.length
// console.log("The Average marks of the stuedents are",avg)


// Ques 2

// let price = [250, 645, 300, 900, 50]
// let i = 0
// for(let val of price){
//     let offer = val/10
//     price[i] = price[i]-offer
//     console.log("Value After Offer", price[i])
//     i++
// }
            // Or
 
// for( let i = 0; i<price.length; i++){
//     let offer = price[i]/10
//     price[i] -= offer
// }
// console.log("Value After Offer",price)


// Ques 3
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// companies.shift()
// companies.splice(2,0,"Ola")
// companies.push("Amazon")
// console.log(companies)

