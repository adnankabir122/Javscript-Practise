// Constructor function 
function Student(firstName,lastName,age){
    this.f_name = firstName,
    this.l_name = lastName,
    this.r_age = age

 
    Student.prototype.country = "Bangladesh"
    // method add korar jonno 
    Student.prototype.printFirstName = function(){
        return this.f_name
    }

}

let student1 = new Student("Fahim","Adnan",25);
let student2 = new Student("rafi","hannan",22);

/* avabe property add kora jay
but eti shudhu student1 obj ai add hobe
onno kono obj a noy  */

// student1.country = "India"

// constructor func a new property avabe add kora jabe na  
// Student.country = "Bangladesh"

// tar jnno prototype use korte hobe -> constructor function ar moddhe


// direct dekha jabe na, prototype object ar moddhe thakbe 

console.log(student1)

console.log(student1.country)
console.log(student2.country)

console.log(student1.printFirstName())
console.log(student2.printFirstName())



