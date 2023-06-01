/* 
Topics: 
1. Create Object with some properties
2. access the properties
3. modify or change value of properties
4. add new properties
5. check if a property exists or not 
6. iterate properties one by one using for..in loop 
7. delete a property 
*/ 

// 1. create an object
let person = {
    name: "adnan kabir",
    age: 25
}
console.log(person)

// 2. access an object properties/methods 
// dot notation 
console.log(person.name)
console.log(person.age)

//bracket notation 
console.log(person['name'])
console.log(person['age'])

// 3. modify properties 
person.name = "Niloy Rahman"
person.age = 30

console.log(person)

// 4. create new properties 
person.country = "Bangladesh"
console.log(person)

// 5. object ar moddhe property ache naki check korar jonno 
console.log('height' in person) // output : false

// 6. object ar shokol property ekti ekti kore dekha - iterate kora bole eke 

// for..in loop
for(let key in person){
    console.log(`${key} : ${person[key]}`)
    // dot notation ekhane(loop a) kaj kore na,bracket notation use korte hoy 
}

// 7. delete a property 
delete person.age;