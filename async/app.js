// // call stack
// const multiply = (x,y) => x * y;
// const square = (x) => multiply(x, x);
// const isRightTriangle = (a, b, c) => {
//     square(a) + square(b) === square(c);
// }
// console.log(isRightTriangle(3,4,5));

// callback hell
const delayColorChange = function(color, delay, doNext){
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext && doNext();
    }, delay)
}

delayColorChange('yellow', 1000, () => {
    delayColorChange('green', 1000, () =>{
        delayColorChange('pink', 1000)
    })
});


// making request using callbacks
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if(delay > 4000){
//             failure('connection timeout', url);
//         }else{
//             success(`here is your fake data ${url}`, url);
//         }
//     }, delay)
// }

// fakeRequestCallback('eko.com', 
//     function (respone,url){
//         console.log(respone);
//         console.log(url);
//         fakeRequestCallback('eko.com/page1',
//             function(respone,url){
//                 console.log(respone);
//                 console.log(url );
//                 fakeRequestCallback('eko.com/page2',
//                     function(respone,url){
//                         console.log(respone);
//                         console.log(url);
//                     },
//                     function(err){
//                         console.log(err);
//                     }
//                 )
//             },
//             function(err){
//                 console.log(err);
//             }
//         )
//     }, 
//     function (err) {
//         console.log(err);
//     }
// )

//making request using callbacks
// const fakeRequestCallback = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 2500) + 500;
//         setTimeout(() => {
//             if(delay > 2000){
//                 reject('connection timeout');
//             }else{
//                 resolve(`here is your url ${url}`);
//             }
//         }, delay)
//     })
// }

// making request using async function
// async function makeRequest(){
//     try{
//         console.log(await fakeRequestCallback('eko.com'));
//         console.log(await fakeRequestCallback('eko.com/page1'));
//         console.log(await fakeRequestCallback('eko.com/page2'));
//         console.log("endofrreq")
//     }catch(x){
//         console.log('Error Woy: ', x);
//     }
// }
// makeRequest();
// fakeRequestCallback('eko.com')
//     .then((x) => {
//         console.log('worked', x);
//         fakeRequestCallback('eko.com/page1')
//         .then((x) => {
//             console.log('worked', x);
//             fakeRequestCallback('eko.com/page2')
//             .then((x) => {
//                 console.log('worked', x);
//             })
//             .catch((x) => {
//                 console.log('error: ', x);
//             })
//         })
//         .catch((x) => {
//             console.log('error: ', x);
//         })
//     })
//     .catch((x) => {
//         console.log('error: ', x);
//     })

// fakeRequestCallback('eko.com')
//     .then((x) => {
//         console.log(x);
//         return fakeRequestCallback('eko.com/page1');
//     })
//     .then((x) => {
//         console.log(x);
//         return fakeRequestCallback('eko.com/page2');
//     })
//     .then((x) => {
//         console.log(x);
//     })
//     .catch((x) => {
//         console.log(`Error : ${x}`)
//     })


// async function makeRequest() {
//     console.log(await fakeRequestCallback('eko.com'));
//     console.log(await fakeRequestCallback('eko.com/page1'));
//     console.log(await fakeRequestCallback('eko.com/page2'));
//     console.log("END");
// }
// makeRequest();

// async keyword
// const login = async (username, password) => {
//     if(!username || !password) throw "Missing username or password";
//     if(password === "iloveu") return username;
//     throw 'invalid'
// }

// login('eko', 'iloveu')
//     .then(x => {
//         console.log('Welcome,',x);
//     })
//     .catch(x => {
//         console.log(x);
//     })