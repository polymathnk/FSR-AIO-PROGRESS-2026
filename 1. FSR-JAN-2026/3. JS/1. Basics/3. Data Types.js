//  ------------------------------------------PRIMITIVE TYPES---------------------------------------------------------
// Stores in stack memory

//  Strings
const firstName = 'Bhavya';

console.log (firstName, typeof firstName);

// Numbers
const age = 30.00;

console.log (age, typeof age);

// Boolean
const hasCar = false;

console.log(hasCar, typeof hasCar);

//  Null 
const houseNo = null;

console.log(houseNo, typeof houseNo);

//  Undefined

let score = undefined ;

console.log(score, typeof score);

//  BigInt

const bigInt = 1090909090920392032302302n;
console.log(bigInt, typeof bigInt)


//  ------------------------------------------REFERENCE TYPES---------------------------------------------------------
//  Stores in heap memory


//  Array
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(num, typeof num);

// Object
const obj = {
    name: 'Nitin',
    age: 20
}

console.log(obj, typeof obj);


//  Function 

const func = function (){
    const c = 10;
    return c;
}

console.log(func(), typeof func)