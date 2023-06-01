// add elements dynamically to webpage 
// 1. create a new element 
let div = document.createElement('div')

// add class to the div 
div.classList.add('important-updates')

// // 2. create a textNode 
// let textNode = document.createTextNode('New Text Added')

// create h1 element 
let h1 = document.createElement('h1')
h1.textContent = "Important Updates"

// 3. add this h1 into the div create above 
div.appendChild(h1)

// create p element 
let p = `<p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ipsa harum esse nostrum rem ab, eum
            quam veniam error iusto?
        </p>` ;

// add p inside div 
div.insertAdjacentHTML('beforeend',p)

/* 
<div>
    <p>paragraph 1</p>
    <p>parahraph 2</p>
    <p>paragraph 3</p>

    // appendChild will add that textNode after these 3 paragraph
</div> 
*/

// 4. add this div element inside the container div and before section topics
let container = document.querySelector('.container')
let sectionTopics = document.querySelector('.section-topics')


// 1st -> kake add korbo 2nd-> kar age add korbo 
container.insertBefore(div,sectionTopics)
