// const request = (url, resolve, reject) => {
//     const delay = Math.floor(Math.random() * 256);
//     if(delay > 200){
//         reject('RTO', url);
//     }else{
//         resolve("Accepted", url);
//     }
// }

// request('eko.com',
//     (x,y) => {
//         console.log(x,y);
//     },
//     (x,y) => {
//         console.log(x,y);
//     }
// )

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.random();
//         if(delay > 0.7){
//             reject('Failed');
//         }else{
//             resolve('Accepted');
//         }
//     })
// }

// fakeRequest('eko.com')
//     .then((x) => {
//         console.log(x);
//     })
//     .catch((x) => {
//         console.log(x);
//     })

// changeBackground
const delayColorChange = (color, delay) => {
    return new Promise((res) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            res();
        }, delay)
    })
}

// delayColorChange('yellow', 1000)
//     .then(() => {
//         return delayColorChange('blue', 1000);
//     })
//     .then(() => {
//         return delayColorChange('orange', 1000);
//     })
//     .then(() => {
//         delayColorChange('purple', 1000);
//     })
    // .then(() => delayColorChange('pink', 1000))
    // .then(() => delayColorChange('magenta', 1000))
    // .then(() => delayColorChange('orange', 1000))
    // .then(() => delayColorChange('blue', 1000))
    // .then(() => delayColorChange('purple', 1000))

async function rainbow(){
    await delayColorChange('silver', 1000);
    await delayColorChange('blue', 1000);
    await delayColorChange('red', 1000);
    // await delayColorChange('purple', 1000);
    // await delayColorChange('orange', 1000);
    // await delayColorChange('magenta', 1000);
    // await delayColorChange('yellow', 1000);
    console.log('hii');
}

rainbow().then(() => console.log("done"));