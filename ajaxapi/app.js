// const url = "https://swapi.dev/api/people/1/";
// const url2 = "https://swapi.dev/api/people/2/";

// const req = new XMLHttpRequest();

// req.onload = function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }
// req.onerror = function(err) {
//     console.log("error!!!");
//     console.log(err);
// }

// req.open("GET", url);
// req.send();

// making request using fetch
// fetch(url)
//     .then((x) => {
//         console.log(x);
//         return x.json();
//     })
//     .then((x) => {
//         console.log(x);
//         return fetch(url2);
//     })
//     .then((x) => {
//         console.log(x);
//         return x.json();
//     })
//     .then((x) => {
//         console.log(x);
//     })
//     .catch((x) => {
//         console.log('Error !!!',x);
//     })

// making request using fetch and async await functions
// let getSTpeople = async (x) => {
//     try{
//         const data = await (await fetch(x)).json();
//         console.log(data);
//     }catch(x){
//         console.log('Error !!:',x);
//     }
// }

// getSTpeople(url);
// getSTpeople(url2);

// making request using axios
// axios.get(url)
//     .then((x) => {
//         console.log(x.data);
//         return axios.get(url2);
//     })
//     .then((x) => {
//         console.log(x.data);
//     })
//     .catch((x) => {
//         console.log('Error : ', x.code);
//     })

// const getST = async (url) => {
//     try{
//         const data = await axios.get(url);
//         console.log(data.data);
//     }catch(x){
//         console.log('ERR : ', x)
//     }
// }

// getST(url);
// getST(url2);
const ulJokes = document.querySelector('#jokes');
const buttonAddJokes = document.querySelector('#addJokes');
const getDadJoke = async () => {
    try{
        const config = { headers: {Accept: 'application/json'}};
        const req = await axios.get("https://icanhazdadjoke.com/", config);
        return req.data.joke;
    }catch(x){
        return "NO JOKES AVAILABLE !!!";
    }
}

const getJokes = async () => {
    const newLi = document.createElement('li');
    const joke = await getDadJoke();
    newLi.innerText = joke;
    ulJokes.append(newLi);
}

buttonAddJokes.addEventListener('click', getJokes);

// searching TV shows
const url = "https://api.tvmaze.com/search/shows";
const inpQuery = document.querySelector('#query');
const myForm = document.querySelector('#myform');

inpQuery.addEventListener('change', () => {
    // document.images.remove();
    const imgs = document.querySelectorAll("img");
    for(let img of imgs){
        img.remove();
    }
})

myForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const query = myForm.elements.query.value;
    const config = {params: {q : query}};
    const imgData = await axios.get(url, config);
    makeImg(imgData.data);
    myForm.elements.query.value = "";
})

function makeImg(datas){
    for(let data of datas){
        // console.log(data.show.image);
        // console.log(data.show);
        if(data.show.image){
            const newImg = document.createElement('img');
            newImg.src = data.show.image.medium;
            document.body.append(newImg);
        }
    }
}