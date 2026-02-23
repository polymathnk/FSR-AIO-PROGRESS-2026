//  Normal Functioon Syntax
// function add(a, b){
//     return a + b;
// }

// Arrow function Syntax

const add = (a, b) => {
  return a + b;
};

// Impllicit retun in arrow function
const subtract = (a, b) => a - b;

// Can leave off () for passing a single param
const multiply = a => a*10;

// Returning an object
const creatObj = () =>(
    {
        name: 'Nitin'
    }
)

// Returning an array
const nums = [1, 2, 3, 4, 5];

nums.forEach(function(n){
    console.log(n);
});

// Rewriting above function as an arrow function
nums.forEach((n)=> console.log(n));

console.log(add(1, 2));
console.log(subtract(2, 2));
console.log(multiply(10));
console.log(creatObj());
