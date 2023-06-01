// same property ar multiple object bananor jonno constructor function use kora hoy 

/* 
let student1 = {
    fname: "fahim",
    age: 25
}
let student2 = {
    fname: "ridoy",
    age: 22
}
*/


// upore 2 ti object ai same property..so amra avabe korbo na 

// Constructor function 
function Student(firstName,lastName,age){
    this.f_name = firstName,
    this.l_name = lastName,
    this.r_age = age
    // akhane f_name,l_name,r_age agulo holo properties 
    // right side ar gulo value 
}

// now create object using this function
let student1 = new Student("Fahim","Adnan",25);
let student2 = new Student("Niloy","Rahman",31);

console.log(student1)
console.log(student2)

// add new property
student1.nationality = "Indian"

console.log(student1)