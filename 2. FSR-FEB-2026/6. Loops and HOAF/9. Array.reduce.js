const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// longway 
const sum = numbers.reduce((accumlator, currentValue)=>{
    return accumlator + currentValue;
}, 0);

// shortway
const sum2 = numbers.reduce((acc, cur)=> acc+cur, 0);

console.log(sum2);


const cart = [
    {id: 1, name: 'product 1', price: 200},
    {id: 2, name: 'product 2', price: 470},
    {id: 3, name: 'product 3', price: 340},
];

const total = cart.reduce((acc, product)=>{
    return acc + product.price;
}, 0);

console.log(total);

