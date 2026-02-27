// Always avoid inline event listeners because they create HTML more messy and less efficeint you should
//  avoid mixing your html with inline JS is also creates some securiity issues.

//  Getting the clear button using DOM
const clearBtn = document.querySelector('#clear');

function onClear(){
   const itemList = document.querySelector('ul');
   const items = itemList.querySelectorAll('li');
// Removing all list items th easiest way 
//    itemList.innerHTML = '';

//    Another way to do that
    items.forEach((item)=> item.remove());
}

// Old JavaScript Event Listener way
// clearBtn.onclick = function (){
//     alert('Clear Items');
// }

// Modern JavaScript Event Listener way with addEventListener() method
// clearBtn.addEventListener('click', ()=> alert('Clear Items'));
// clearBtn.addEventListener('click', ()=> console.log('Cleared Items'));

clearBtn.addEventListener('click', onClear); 
// Clearing an eventlistener
// setTimeout(()=> clearBtn.removeEventListener('click', 
// onClear), 5000);
