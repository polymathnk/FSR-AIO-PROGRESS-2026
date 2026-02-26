const div = document.createElement('div');
div.className = 'my-class';
div.id = 'my-id';
div.setAttribute('title', 'myelement')

const text = document.createTextNode('Hello World')

div.appendChild(text);

// document.body.appendChild(text);

document.querySelector('ul').appendChild(text)

console.log(div);