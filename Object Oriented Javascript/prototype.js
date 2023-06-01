// javascript prottek object ar sathe akta [prototype object] attach/connect kore dey

// let person2 = {
//     name: "Raju"
// }

/* 
    1. hasOwnProperty('') check kore object ar moddhe name property ache naki 
    2. ai dhoroner built-in method gulo thake Prototype Object ar moddhe   
*/


// console.log(person2.hasOwnProperty('name')) // output: true

// constructor function
// constructor function nijer jonno akti prototype baniye fele 
function Person(fname,lname,age){
    this.firstName = fname
    this.lastName = lname
    this.age = age

}
// Person prototype a method add korar jnno
// properties o rakha jay but not recommended 
// Person.prototype.getfullName = function(){
//     console.log(`${this.firstName} ${this.lastName}`)
// }

// let person1 = new Person("Adnan","Kabir",20)
// let person2 = new Person("Rafsan","Jany",22)

// console.log(person1)
// console.log(person2)
// // Prototype ar use hoy inheritance a 
// person1.getfullName()
// person2.getfullName()

// Topics: Inheritance 
// Person, Creature ke inherit korbe 

function Creature(lifetime){
    this.lifetime = lifetime
}

Creature.prototype.breath = function(){
    console.log("breathing!!")
}


function Person(fname,lname,age){
    this.firstName = fname
    this.lastName = lname
    this.age = age

}

Person.prototype.getfullName = function(){
    console.log(`${this.firstName} ${this.lastName}`)
}
// Person, Creature ke inherit korbe 
Person.prototype.__proto__ = Object.create(Creature.prototype)

// akahne Person prototype ke Creature prototype ar sathe connect kora holo
// Object.create() connection ar kaj kore

let creature1 = new Creature(100)
console.log(creature1)

let person1 = new Person("Adnan","Kabir",20)
console.log(person1)
person1.breath()
person1.getfullName()