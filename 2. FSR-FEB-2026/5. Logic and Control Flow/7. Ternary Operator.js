const age = 13;

// Using an if statement
// if(age >= 18){
//     console.log("you can vote!")
// }else{
//     console.log('you can not vote');
// }

// Using a ternary operator
age >= 18 ? console.log('You can Vote!') : console.log('You can not Vote!');

// Assigning a conditional value to a variable

const canVote = age >= 18 ? true: false;
const canVote2 = age >= 18 ? 'Can Vote!': 'Can not vote!';

console.log(canVote);
console.log(canVote2);

//  Multiple statements

const auth = true;

// const redirct = auth ? (alert('You have logged in'), '/logged in'): (alert('You are logged out'), '/access deined');
// console.log(redirct);

// Shorthand

// auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');

 