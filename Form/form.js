// 1. text box gulo theke data collect korar niyom 
let fname = document.getElementById('fname').value
let lname = document.getElementById('lname').value
let email = document.getElementById('email').value

console.log(`Name: ${fname} ${lname} Email: ${email}`)

// 2. select option theke selected value neyar niyom 
let country = document.getElementById('country').value
console.log(country)

// 3. radio button theke checked value neyar niyom 
let gender = document.querySelector('input[name="gender"]:checked').value
console.log(gender)

// 4. checkbox theke (checked) value neyar niyom
let hobbies = []
let checkboxes = document.getElementsByName('hobbies')
console.log(checkboxes)


// je shob checkbox checked ache tader ber korbo 
for(let i = 0;i<checkboxes.length;i++){
    if(checkboxes[i].checked){
        hobbies.push(checkboxes[i].value)
    }
}
console.log(hobbies)