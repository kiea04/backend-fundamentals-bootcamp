//variables 
// var = variable  Global Scope
var name= 'Regel';
console.log(name);

if (true) {
    console.log(name)
}

// var variable
if (true) {
    var MyName = "Regel";
    MyName = "Ron";
}

console.log(MyName);

// let variable, for best practices use the let variable versus var. Var could cause more errors.
//block scope variable 
let age = 18;
console.log(age)

let animal = "Cat";

if(true){
    let animal = "Cat";
    animal = "elephant";
    console.log(animal);
}

// const variable (constant variable) use when something is not expected to change like a birthdate fixed 

const birthdate = "10-16-1985";
console.log(birthdate);
// fixed variable not able to change,  birthdate = "00-00-0000";
