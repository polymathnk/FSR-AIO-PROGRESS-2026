let x;

const name = 'John';
const age = 30;

x = 'Hello my name is ' + name + 'and I am ' + age + ' years old';

//  Templete Literals or strings

x = `Hello my name is ${name} and  I am ${age} years old`;
// console.log(x);

//  Strings properties and methods
const s = 'Hello World';

x = s.__proto__;

x = s.length;

x = s.toUpperCase();

x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('l');

x = s.substring(0, 5);

x = s.substring(5);

x = s.slice(-11, -6);

x = s.trim();

x = s.replace('World', 'John')

x = s.includes('Hello')

x = s.valueOf();

x = s.split('')

console.log(x);
