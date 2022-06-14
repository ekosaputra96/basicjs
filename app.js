// password
// let password = prompt("Enter your password : ");

// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log("Valid password");
//     }else {
//         console.log("No spaces allowed");
//     }
// }else {
//     console.log("Password too short !");
// }

// price
// 0 - 5 free
// 6 - 10 $10
// 11 - 65 $20
// 65+ free

// let age = 80;
// if((age >= 0 && age <=5) || age >= 65){
//     console.log("Free");
// }else if(age >= 6 && age <= 10){
//     console.log("$10");
// }else if(age >= 11 && age <= 65){
//     console.log("$20");
// }else{
//     console.log("INVALID AGE !");
// }

// console.log("MENU");
// const menu = parseInt(prompt("Enter Menu : 1. Lihat 2. Pesan 3. Bayar"));
// switch(menu){
//     case 1:
//         console.log("Lihat Menu");
//         break;
//     case 2:
//         console.log("Pesan Menu");
//         break;
//     case 3:
//         console.log("Bayar Pesanan");
//         break;
//     default:
//         console.log("INVALID!");
// }

// multidimentional array
// const seatingChart = [
//     ['Eko', 'Cintami', 'Kiki'],
//     ['Saputra', 'Lestaria', 'Noviana', 'Nadiya'],
//     ['Putri', 'Wiwin', 'Irot', 'Ridwan']
// ]

// guessing game
// let string = prompt("Say Something ?");
// while(true){
//     string = prompt(string);
//     if(string === 'q') break;
// }
// console.log("you Win");

// getting a maximum number from user
let max = parseInt(prompt("Enter Maximum Number : "));

// check if it is a valid number
while(!max){
    max =parseInt(prompt("Enter a Valid Number !"));
}

// generating a random number
const targetNumber = Math.floor(Math.random() * max) + 1 ;

// getting a guessing number from a user
let guess = parseInt(prompt("Enter your first guess ! "));

// counting attempts
let attempts = 1;

//checking guess number and target number
while(parseInt(guess) !== targetNumber){
    // to quit from game
    if(guess === 'q') break;
    // counting attempt
    attempts++;
    // to check wheater too high or to low
    if(guess > targetNumber){
        guess = prompt(`Too High, Enter a new guess (last guess :  ${guess})`);
    }else{
        guess = prompt(`Too Low, Enter a new guess (last guess :  ${guess})`);
    }
}
// notification
if(guess === 'q'){
    console.log("You Quit the game !");
}else{
    console.log("You Win the Game");
    console.log(`It took you ${attempts} guesses`);
}