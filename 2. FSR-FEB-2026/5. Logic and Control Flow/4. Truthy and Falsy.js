const email = 'test@gmail.com'

if(email){
    console.log('You passed an email')
}

console.log(Boolean(email));

//  Flasy Values:-
//  - false
//  - '' or "" (basically empty string)
//  - null
//  - undefined
//  - NaN

const x = 0;

if(x){
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

//  Truthy Values:-
// - Everything else that is not is gonna be a truthy
// - true
// - '0' (0 as a string not as a number)
// - ' ' or " " (space in a string)
// - 'false (false in a string)
// - [] (an empty array)
// - {} (an empty object)
// - function () {} (an empty function)

const y = ' ';

if(y){
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

//  Truthy and Falsy Caveats
const children = 0;

if(children !== undefined){
    console.log(`You have ${children} children`);
} else{
    console.log('Please enter a number of children');
}


// Checking for empty arrays
const posts = []

if(posts.length > 0){
    console.log('List Posts')
}else{
    console.log('No Posts')
}

//  Checking for empty objects

const user = {}

if (Object.keys(user).length > 0){
    console.log('List User')
}else {
    console.log('No User')
}

// Loose equality (use === for tight equality)

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
