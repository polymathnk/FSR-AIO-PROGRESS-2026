let output;

// Child Node
const parent = document.querySelector('.parent');
output = parent.childNodes;
output = parent.childNodes[3].innerText;
output = parent.childNodes[1].style.color = 'red'
output = parent.firstChild;
output = parent.lastChild;
output = parent.lastChild.innerText = 'Hello'

// Parent Node
const child = document.querySelector('.child');
output = child.parentNode
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

//  siblings
const seconditem = document.querySelector('.child:nth-child(2)');
output = seconditem.nextSibling;
output = seconditem.previousSibling;

console.log(output)