// define a function
// function singSong(){
//     console.log('Do');
//     console.log('Re');
//     console.log('Mi');
// }

// run the function
// singSong();
// function repeat(str, numTimes){
//     let result = "";
//     for(let i = 0; i < numTimes; i++){
//         result += str;
//     }
//     console.log(result);
// }

// repeat("siti ", 5);

// to check is SnakeEyes
function isSnakeEyes(x,y){
    if(x === 1 && y === 1){
        console.log("Snake Eyes!");
    }else{
        console.log("Not Snake Eyes!");
    }
}

// getting rolled dice
function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

let dice1 = rollDice();
let dice2 = rollDice();
isSnakeEyes(dice1, dice2);
console.log(`Dice1 : ${dice1}, Dice2 : ${dice2}`);

function lastElement(array){
    if(array.length !== 0){
        return array[array.length - 1];
    }else{
        return null;
    }
}

console.log(lastElement([]));

function capitalize(str){
    let cap = str.slice(0,1).toUpperCase();
    str = str.slice(1);
    return cap + str;  
}
console.log(capitalize("normal"));

// DEFINE YOUR FUNCTION BELOW:
function sumArray(nums){
    let total = 0;
    for(let num of nums){
        total += num;
    }
    return total;
}
console.log(sumArray([1,3,3]));
// DEFINE YOUR FUNCTION BELOW:
// DEFINE YOUR FUNCTION BELOW:
function returnDay(day){
    const days = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
    }
    if(day >= 1 && day <= 7){
        return days[day];
    }else{
        return null;
    }
}
console.log(returnDay(4));

let student = "eko";
function absen(){
    student = "cintami";
    console.log(student);
}
absen();
console.log(student);

// const square = function(x){
//     return Math.pow(x,2);
// }
// console.log(square(3));
// square(3);

function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

const myMath = {
    "PI": 3.14,
    add: function(a,b){
        return a + b;
    },
    mul: function(a,b){
        return a * b;
    },
    sub: function(a,b){
        return a - b;
    },
    div: function(a,b){
        return a/b;
    }
}

const square = {
    area: function(x){
        return x * x;
    },
    perimeter: function(x){
        return x * 4;
    }
}
square.area(10);
square.perimeter(10);

const cat = {
    name: 'Cintami',
    color: 'White',
    meow(){
        console.log(`${this.name} says Meowww`);
    }
}

const mw1= cat.meow;

// egg laying
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount ++;
        return "EEG";
    }
}

try{
    console.log(hello.toUpperCase());
}catch(e){
    console.log(e);
    console.log("Error !");
}