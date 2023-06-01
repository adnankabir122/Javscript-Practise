let laptopObj = {
    size: "15 inch",
    price: 70000,
    color: "black",
    model: "Dell"
}
console.log(laptopObj)

// JSON String 

// convert object to json 
let laptopJson = JSON.stringify(laptopObj)
console.log(laptopJson)

//convert json to object
let newLaptopObj = JSON.parse(laptopJson)
console.log(newLaptopObj)

console.log(2);
