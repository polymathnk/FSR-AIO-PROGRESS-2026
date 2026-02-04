//  These are primitive values and stored on the stack

const name = 'John';
const age = 20;

//  These are reference values and stored on the heap

const person = {
    name: "nk",
    age: 23
}

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Nitin Kumar'

console.log(name, newName);
console.log(person, newPerson);

