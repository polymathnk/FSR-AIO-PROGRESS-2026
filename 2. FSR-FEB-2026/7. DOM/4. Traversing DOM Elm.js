let output;

//  Getting child elements from parent
const parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Third";

//  Getting child elements from child
const child = document.querySelector(".child");
output = child.parentElement;
child.parentElement.style.border = "0.5px solid #ccc";
child.parentElement.style.padding = "10px";
child.parentElement.style.borderRadius = "10px";

//  Getting sibling elements from child
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange'
console.log(output);
