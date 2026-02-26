// getting attributes
// console.log(document.getElementById('app-title'));

// setting attributes
document.getElementById('app-title').id = 'new-id';

document.getElementById('new-id').setAttribute('class', 'title');



// Get Content
const title = document.getElementById('new-id')
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>'

// Change style with DOM
title.style.color = 'red';

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#new-id'));
console.log(document.querySelector('.title'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Pineapple Juice';
secondItem.style.color = 'blue';

// Using these methods on the other elements instead of document
const list = document.querySelector('ul');
list.style.color = 'Green';
const firstItem = list.querySelector('li');
firstItem.style.color = 'purple';


