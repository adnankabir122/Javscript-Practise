let fruitsTitle = document.getElementById('fruits-title')

// getAttribute -> element ar jekono akti attribute pawar jonno
let fruit_id = fruitsTitle.getAttribute("id")
console.log(fruit_id)

let fruit_class = fruitsTitle.getAttribute("class")
console.log(fruit_class)

// setAttribute() -> element a notun kono attribute add korar jnno
// 2 ta parameter dite hoy -> kon attribute, value ki 
fruitsTitle.setAttribute('name','myFruitsTitle')
console.log(fruitsTitle)


//classList -> ek er beshi kono element a class thakle shegulo array akare dekhay
let productCard = document.querySelector(".product-card")
console.log(productCard)

console.log(productCard.classList)

//classList.add()-> kono class add korte hole 
productCard.classList.add('blue-bg')
console.log(productCard.classList)

//classList.remove()-> kono class remove korte chaile
productCard.classList.remove('no-gap')
console.log(productCard.classList)
