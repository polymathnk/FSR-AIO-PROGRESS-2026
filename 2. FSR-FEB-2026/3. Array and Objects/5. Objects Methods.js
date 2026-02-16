let x;

//  Object constructor using new keyword
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.isCompleted = false;

x = todo;

// Nested object
const person = {
    address: {
      cords:{
        lat: '8432.79',
        lng: '8432.79'
      }
    }
}

// Accessing nested object props
x = person.address.cords.lat;

// Spreaing the objects (...)
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

// Handling array of abjects
const todos = [
    {id: 1, name: 'buy oranges'},
    {id: 2, name: 'do homework'},
    {id: 3, name: 'finish tasks'}
]

x = todos[2].name

// 
 x = Object.keys(todo);

// Getting length of an array of objects
x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('age')


console.log(x);