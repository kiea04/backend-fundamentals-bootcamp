// Topic Introduction to Arrays

// Creating an array, start with 0 versus 1 index 0-4/ 5
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];

// Accessing array elements 
console.log('Character 2:', characters[1]);
console.log('Character 5:', characters[4]);
console.log('The last character', characters[characters.length - 1]);

// Modifying array elements : use push to add to the current array/ remove out use pop 
characters.push('sasuke'); //add 
characters.pop(); //remove 
characters[0] = 'crybaby';  //change the index number element to something else 

console.log('Modified Array:', characters);

// Array Iteration
for(let i = 0; i < characters.length; i++){
    console.log('Character' , i+1, characters[i]);
} 

characters.forEach(function (character) {
    console.log(character)
})

//Array Methods 

//indexOf
console.log(characters.indexOf('layla'));

//includes
console.log('Includes a value:', characters.includes('sasuke'));

//join
console.log('Joined array:', characters.join('-'));

//slice creating new array based on the original 
let slicedArray = characters.slice(1, 4);
console.log('Sliced array:', slicedArray)

//splice method remove elements from an array, how many elements removed after initial element
let removedElements = characters.splice(0, 2)
console.log('Removed elements:', removedElements);
console.log('Updated Array:', characters);