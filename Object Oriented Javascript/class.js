class person {
    // 1. constructor method 
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }

    // class a method add korar niyom
    // prototype a add hoye jay 
    // 2. normal method 
    sayHi() {
        console.log("hi")
    }

    // 3.static method 
    static hello() {
        console.log("hello")
    }

    // static property 
    static country = "bangladesh"

}

// object bananor shomoy constructor function call hoye jay automatic
let person1 = new person("Adnan", 25);

let person2 = new person();
console.log(person1)
person1.sayHi()

// static method call korar jnno object ar bodole class ar name dite hoy
// person1.hello() -> wrong
person.hello();
console.log(person.country);


// Inheritance 

// Parent 
class employee {
    constructor(n) {
        this.name = n
    }

    msg() {
        console.log("Hello Employee")
    }
}

// child 
class manager extends employee {
    constructor(n, d) {
        // jei class ke extend korse tar constructor ke call korlo 
        super(n);

        this.department = d
    }

    msg() {
        console.log("Hello Manager")
    }
    info() {
        // parent class ar method ke access korlo 
        super.msg();

        console.log(`${this.name} is manager of ${this.department}`)

        // same name ar msg jodi nijer class a thake
        this.msg();
    }
}

let manager1 = new manager("halim", "supply chain");
console.log(manager1);
manager1.info();

// multiple inheritance 
class admin extends manager {

} 
let admin1 = new admin("Shahin",54);
console.log(admin1) 

// 34 minute theke dekhbo 