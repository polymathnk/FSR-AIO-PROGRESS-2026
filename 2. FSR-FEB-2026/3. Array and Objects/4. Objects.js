let x;

const person = {
  name: "Nitin Kumar",
  age: 24,
  isAdmin: true,
  address: {
    street: "123, Main st",
    city: "New Delhi",
    state: "Delhi",
  },
  hobbies: ["music", "designing", "photography", "writing"],
};

x = person.name;
x = person.address.street;
x = person.hobbies[0];

x = person.name = "Nitin";
x = person.isAdmin = false;
x = person["isAdmin"] = false;

// Removing a propeprty from an object
delete person.age;

// Adding a propeprty to an object
person.hasChildren = false;

person.greet = () =>{
    console.log(`hello my name is ${person.name}`);
}
person.greet();

console.log(person);
