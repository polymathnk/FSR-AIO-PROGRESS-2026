// Loop over arrays
const items = ['books', 'tables', 'pens', 'staples', 'magazines', 'notebooks'];
const users = [
    {name: 'nitin', age: 24},
    {name: 'bhavya', age: 18},
    {name: 'navisha', age: 3}
];

// with for of loop we can iterate like this

// for( const item of items){
//     console.log(item);
// }


// with for of loop we can iterate over array of  objects in the same manner
// for (const user of users){
//     console.log(user.name);
// }

// Loop over strings
const str = 'Hello World';

for(const letter of str){
    console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('name', 'John')
map.set('age', 30)

for(const [key, value] of map){
    console.log(key, value);
}