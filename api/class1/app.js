// JSON -> string type
let person = {
    name: "Adnan",
    id: 011171154,
    age:25
}
console.log(person)

// convert this object to JSON 
let person2 = JSON.stringify(person)
console.log(person2)


let car = {
    name: "Xe Saloon",
    model: "toyota",
    price: 2000
}
let car1 = JSON.stringify(car)
console.log(`JSON : ${car1}`)

// convert JSON to normal Javascript Object
console.log(JSON.parse(car1))