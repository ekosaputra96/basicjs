// const btn = document.querySelector('#btn');
// btn.onclick = () => {
//     console.log('hello world');
// }

// btn.addEventListener('mouseenter', () => {
//     console.log("come here!");
//     const text = document.createElement('p');
//     text.innerText = 'some texts';
//     document.querySelector('body').append(text);
// })

// document.querySelector('#hello').addEventListener('click', () => console.log('hello'));

// document.querySelector('#goodbye').addEventListener('click', () => console.log('goodbye'));

// const judul = document.querySelector('.judul');
// const color = document.querySelector('#color');

// function makeColor(){
//     const r = Math.floor(Math.random() * 256) + 1;
//     const g = Math.floor(Math.random() * 256) + 1;
//     const b = Math.floor(Math.random() * 256) + 1;

//     return `rgb(${r},${g},${b})`;
// }

// addEventListener('click', () => {
//     const newColor = makeColor();
//     document.body.style.backgroundColor = newColor;
//     judul.innerHTML = newColor;
// })

// make buttons
// const n = 30;
// for(let i = 1; i <= n; i++){
//     const btn = document.createElement('button');
//     btn.innerText = "Click";
//     btn.classList.add('btn');
//     document.body.append(btn);
// }

// for(let i = 1; i <= n; i++){
//     const h2s = document.createElement('h2');
//     h2s.innerText = "Hello";
//     document.body.append(h2s);
// }

// function colorize() {
//     console.log(this)
//     this.style.backgroundColor = makeColor();
//     this.style.color = makeColor()
// }

// const buttons = document.querySelectorAll('button');
// for(let button of buttons){
//     button.addEventListener('click', colorize)
// }
// const h2s = document.querySelectorAll('h2');
// for(let h2 of h2s){
//     h2.addEventListener('click', colorize)
// }

// const btn = document.querySelector('button');
// window.addEventListener('keydown', function (evt){
//     switch(evt.code){
//         case 'ArrowUp':
//         case 'KeyW':
//             console.log('Up');
//             break;
//         case 'ArrowRight':
//         case 'KeyD':
//             console.log('Right');
//             break;
//         case 'ArrowDown':
//         case 'KeyS':
//             console.log('Down');
//             break;
//         case 'ArrowLeft':
//         case 'KeyA':
//             console.log('Left');
//             break;
//         default:
//             console.log('Ignored');
//     }
// })

// keyup
// window.addEventListener('keyup', function(e){
//     console.log('Up');
// })

// const myForm = document.querySelector('#myForm');
// const input = document.querySelector("#name");
// const cats = document.querySelector("#cats");
// myForm.addEventListener('submit', function(evt){
//     evt.preventDefault();
//     const li = document.createElement('LI');
//     li.innerText = input.value
//     cats.append(li);
//     input.value = "";
// })

// tweets
const myForm = document.querySelector('#myForm');
const tweets = document.querySelector("#tweets");

myForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    const userInput = myForm.elements.username;
    const tweetInput = myForm.elements.tweet;
    addTweet(userInput.value, tweetInput.value);
    userInput.value = '';
    tweetInput.value = '';
})

function addTweet(username, tweet){
    const newLi = document.createElement('li');
    const newB = document.createElement('b');
    newB.innerText = username;
    newLi.append(newB);
    newLi.append(` - ${tweet}`);
    newLi.addEventListener('click', () => {
        newLi.remove();
    })
    tweets.append(newLi);
}
// tweets.addEventListener('click', function(evt){
//     console.log(evt);
// })
// const form = document.querySelector('form');
// const lists = document.querySelector('#list');

// form.addEventListener('submit', function(evt){
//     evt.preventDefault();
//     const product = form.elements.product;
//     const qty = form.elements.qty;
//     addProduct(product.value, qty.value);
//     product.value = '';
//     qty.value = '';
// })

// function addProduct(product, qty){
//     const li = document.createElement('li');
//     const productNode = document.createTextNode(product);
//     const qtyNode = document.createTextNode(qty);
//     li.appendChild(productNode);
//     li.appendChild(document.createTextNode(' '));
//     li.appendChild(qtyNode);
//     lists.appendChild(li);
// }

// username
// const h1 = document.querySelector('h1');
// const input = document.querySelector('#username');

// input.addEventListener('input', function(evt){
//     if(input.value !== ''){
//         const user = document.createTextNode(input.value);
//         h1.innerText = 'Welcome, ';
//         h1.appendChild(user);
//     }else{
//         h1.innerText = "Enter Your Username";
//     }
// })

// bubbling event
// const div = document.querySelector('#hide');
// const btn = document.querySelector('#btn');
// const p = document.querySelector('p');

// function makeRand(){
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r},${g},${b})`;
// }

// btn.addEventListener('click', function(evt){
//     div.style.backgroundColor = makeRand();
//     evt.stopPropagation();
// })

// p.addEventListener('click', () => {
//     p.classList.add('hide');
// })