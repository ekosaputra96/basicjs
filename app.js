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

console.log("MENU");
const menu = parseInt(prompt("Enter Menu : 1. Lihat 2. Pesan 3. Bayar"));
switch(menu){
    case 1:
        console.log("Lihat Menu");
        break;
    case 2:
        console.log("Pesan Menu");
        break;
    case 3:
        console.log("Bayar Pesanan");
        break;
    default:
        console.log("INVALID!");
}