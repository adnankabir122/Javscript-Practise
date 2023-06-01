// create object using "new" keyword  
let football = new Object()

// add properties 
football.color = "black"
football.size = "5"
football.country = "Italy"

//add methods
football.printDetails = function(){
    console.log(`Color: ${this.color} Size:${this.size}`)
}

football.printDetails()

