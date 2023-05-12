// Today's Topic 
// 1. Promise
// 2. Promise Chaining 

// 3 states :
// 1. pending
// 2. fulfiled - resolve
// 3. rejected - reject 

/* 
Promise mainly data fetch korte use kora hoy. Most of the time data fetch korar shomoy promise create kora thake.just bebohar korte hoy.
*/

// how to create a promise 
// let count = true;

// let myPromise = new Promise(function(resolve,reject){
//     if(count){
//         resolve('There is a count');//resolve a jekono kichu return kora jay 
//     }
//     else{
//         reject('There is no count');
//     }
// })
// console.log(myPromise);


// // kivabe promise bebohar korte hoy 

// // then() function call hobe jokhon promise resolve hobe 
// myPromise.then(res =>{
//     console.log(res)
// })
// // avabeo lekha jay 
// myPromise.then(function(res){
//     console.log(res)
// })

const msg = false;
console.log(`start`);

// promise define / create - fucntion ar moto
// akhane resolve o reject 2 ta function 
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(msg){
            resolve(`I got your message`) // jekono akta value deya jabe resolve function a
        }
        else{
            reject(`msg failed`)
        }
    },2000);
});

// promise call 
myPromise.then(function(value){
    console.log(value) //resolve je value ta  return koreche sheti value te catch hoye gese
})
.catch(function(err){
    console.log(err)
})





