let password = prompt("Enter your password : ");

if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Valid password");
    }else {
        console.log("No spaces allowed");
    }
}else {
    console.log("Password too short !");
}