const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((number) => number*2);

// same with forEach
let doubledNumbers = [];
numbers.forEach((number)=>{
    doubledNumbers.push(number*2);
})

console.log(doubledNumbers);