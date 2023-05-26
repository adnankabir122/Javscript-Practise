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