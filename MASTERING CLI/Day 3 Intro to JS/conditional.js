//Conditional

//Contionals: if statement 
let age = 17;

if (age >= 18) {
    console.log("You are elibigle to vote!")
    console.log("You are elibigle to vote!")
} else {
    console.log("You are not elibigle to vote!")
}

//if else if-else statement 
let temperature = -1;
if (temperature <0){
    console.log("It is freezing!");
} else if (temperature >=0 && temperature <20){
    console.log("It's cold outside!")
} else {
    console.log("It's a warm day!")
}

//Conditional: Switch Statement 
let day = 'Monday';

switch(day) {
    case 'Monday':
        console.log("It is the start of the week.");
    break;
    case 'Friday':
        console.log("This is the end of the week.");
    break;
    default:
        console.log("This is an ordinary day.");
        break
}