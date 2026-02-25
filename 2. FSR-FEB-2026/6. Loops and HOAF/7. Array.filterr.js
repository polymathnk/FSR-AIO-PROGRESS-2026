const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Longway
// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });

// Shortway
// const evenNumbers = numbers.filter(number => number % 2 === 0);

//  with forEach

const evenNumbers = [];

numbers.forEach((number)=>{
    if(number % 2 ===0){
        evenNumbers.push(number);
    }
});

console.log(evenNumbers);