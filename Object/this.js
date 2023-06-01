let person = {
    name: "adnan kabir",
    age: 25,

    sayHello(){
        console.log(`Hello! I have a ${car.brand} car`)
    },

    // same object ar property access korar jnno "this" use korbo
    printDetails(){
        console.log(`Name: ${this.name} Age: ${this.age}`)
    }
}

let car = {
    brand: "Tata",
    model: "Safari"
}

person.sayHello();
person.printDetails();
