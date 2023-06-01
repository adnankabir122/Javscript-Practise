let person = {
    name: "adnan kabir",
    age: 25,

    // getName:function(){
    //     return this.name.toUpperCase()
    // }

    //using getter method
    // original data ke change/modify kore tarpor object ar baire pathanor jonno 
    get getName(){
        return this.name.toUpperCase()
    },

    //setter method bairer kono changes ke object ar vitore set kore dey
    set setName(n){
        return this.name = n.toUpperCase() 
    } 
 
}


console.log(person.name.toUpperCase())
console.log(person.getName)

person.setName = "hamid"

console.log(person)