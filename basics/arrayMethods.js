let numbers = [4,8,9,2,7]
let sum = 0

// forEach -> akta akta kore value ke nibe tarpor jog kore sum return korbe
numbers.forEach(function(value,index,arr){
    sum = sum + value
})
console.log(sum)


//map -> ekti kore value niye value gulo modify kore notun akti array return korbe
let result2 = numbers.map(function(value,index,arr){
    return value * 2
})

console.log(result2)


//filter -> ekti kore value check kore notun array return kore

// example 1 : filter the given array where all numbers are even 
let all_numbers = [9,27,8,10,0,1,6,3]

let even_numbers = all_numbers.filter(function(value,index,arr){
    
    if(value % 2 === 0){
        return value;
    }
    
})
console.log(even_numbers)


//example 2:
// let team = [
//     {
//         name:"niloy",
//         position:"developer"
//     },
//     {
//         name:"riya",
//         position:"web designer"
//     },
//     {
//         name:"abir",
//         position:"developer"
//     },
//     {
//         name:"tonmoy",
//         position:"ui designer"
//     },
//     {
//         name:"adnan",
//         position:"developer"
//     },
//     {
//         name:"mridul",
//         position:"hr"
//     },
//     {
//         name:"fahim",
//         position:"manager"
//     }
// ]

// // find team members who are developer

// let developer = team.filter(function(value){
//     if(value.position === "developer"){
//         return value
//     }
// })
// console.log(developer)