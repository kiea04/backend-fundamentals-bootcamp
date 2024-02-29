// Use Camel casing when using Javascript 
//Used in carts 

function higherOrderFunction (callback) {
    console.log('This is the higher order function speaking.');
    callback();
}

function passedFunction(){
    console.log('This is the past function being called.');
}

higherOrderFunction(passedFunction)

//  