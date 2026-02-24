// - ||= - aiggins the right side value if  the left is a falsy value
let a = false;

// if(!a){
//     a = 10;
// }

// a = a || 10;

a ||= 10;
console.log(a);

// - &&= - aiggins the right side value if  the left is a falsy value
let b = 20;

// if(b){
//     b = 20;
// }

// b = b && 20;
b &&= 20;

console.log(b)


// - ??= - aiggins the right side value if  the left is a falsy value
let c = null;

// if (c === null || c === undefined) {
//     c = 20;
// }

// c = c ?? 20;

c ??= 20;

console.log(c);


