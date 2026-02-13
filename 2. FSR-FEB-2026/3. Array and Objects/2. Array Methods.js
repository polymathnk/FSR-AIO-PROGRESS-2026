//  Array methods
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//  Adding an element in the last of an array
array.push(10);

// Removing an element from the last of an array
array.pop();

//  Adding an element in the begining of an array
array.unshift(0);

// Removing an element from the begining of an array
array.shift();

// Reversing of an array
// array.reverse();

x = array.includes(5);
x = array.indexOf(5);
x = array.slice(1, 5);
// x = array.splice(1, 5);

// Chain of methods on an array
x = array.splice(1, 4).reverse().toString().charAt(4);

console.log(x)