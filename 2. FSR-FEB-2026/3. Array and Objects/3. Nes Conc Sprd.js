let x;

const fruits = ['apples', 'bananans', 'grapes'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

//  creating a nested array
// fruits.push(berries);

//  Accessing a nested array
// x = fruits[3][1];

// Nesting in nested array
const allFruits = [fruits, berries];

// Concating the arrays
x = fruits.concat(berries);

// Spreading the arrays (...)
x = [...fruits, ...berries];

// Flaten arrays
const nested = [1, 2, [3, 4], 5, 6, [7, 8]];

//  to flat above nested array 
x = nested.flat();

//  Static methods on Array Object
x = Array.isArray(fruits);
x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);