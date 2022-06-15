// multidimentional array
// const seatingChart = [
//     ['Eko', 'Cintami', 'Kiki'],
//     ['Saputra', 'Lestaria', 'Noviana', 'Nadiya'],
//     ['Putri', 'Wiwin', 'Irot', 'Ridwan']
// ];
// for(let row of seatingChart){
//     for(let student of row){
//         console.log(student);
//     }
// }

// define testscores
// const testScores = {
//     eko: 75,
//     nadia: 78,
//     cintami: 89,
//     kiki: 87
// }

// // define total
// let total = 0;

// // convert object to array
// let scores = Object.values(testScores);

// // looping through the array
// for(let score of scores){
//     total += score;
// }

// // print total
// console.log(`The Average is : ${total / scores.length}`);

// asking a user
let menu = prompt("what would you like to do ?");

// todo list array
const todo = [];

// looping until enter quit
while(menu !== 'quit' && menu !== 'q'){
    if(menu === "new"){
        // add new todo
        let add = prompt("What would you do ?");
        todo.push(add);
        console.log(`${add} added to list`);
    }else if(menu === "delete"){
        // delete a list
        let del = parseInt(prompt("Which index number would you like to delete ?"));
        if(!Number.isNaN(del)){
            let deleted = todo.splice(del, 1);
            if(deleted.length !== 0){
                console.log(`${deleted} has been deleted`);
            }else{
                console.log("Wrong Index !");
            }
        }else{
            console.log("UNKNOWN NUMBER !");
        }
    }else if(menu === "list"){
        // show all lists
        let index = 0;
        console.log("********************");
        for(let list of todo){
            console.log(`${index} : ${list}`);
            index++;
        }
        console.log("********************");
    }
    // getting a user input
    menu = prompt("what would you like to do ?");
}
// notif that the app closed
console.log("App Turned Off !");