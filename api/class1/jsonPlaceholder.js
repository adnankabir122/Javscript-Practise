function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        //ekhane amar data gulo niye kaj korte hobe
        data.forEach(function(value,index) {
            console.log(`email ${index}: ${value.email}`)
            let li = document.createElement('li')
            li.innerText = value.email
            let container = document.getElementById('container')
            container.appendChild(li)
        });
    })
}



