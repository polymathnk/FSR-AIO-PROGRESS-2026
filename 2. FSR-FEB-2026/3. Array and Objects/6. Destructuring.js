const firstName = 'Nitin';
const lastName = 'Kumar';
const age = 20;

const person = {
    firstName,
    lastName,
    age
}

// Destructuring Objects

const todo = {
    id: 1,
    title: 'take out the trash',
    user:{
        name: 'Nitin kumar',
        age: 24
    }
}

const {
    id: todoId,
    title, 
    user: {name}
} = todo;

console.log(todoId);


// Destructuring Arrays

const numbers = [20, 30, 50, 80, 90, 100];

const [first, second, third, ...rest] = numbers;

console.log(first, second, third, rest)
