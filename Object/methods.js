let person = {
    name: "adnan kabir",
    age: 25,

    // method inside object - using annonymous function
    drive: function(){
        console.log("I can drive car")
    },

    // es6 
    walk(){
        console.log("walking");
    }
}
// create properties
// person.country = "Bangladesh"

// create method using annonymous function outside object
person.sayHello = function(){
    console.log("Hello I am Person")
}

person.sayHello()
person.drive()
person.walk()

console.log(person)