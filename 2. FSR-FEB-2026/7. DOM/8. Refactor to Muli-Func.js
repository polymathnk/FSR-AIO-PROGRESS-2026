
// Clean and Performant
function createnewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = creatButton('remove-item btn-link text-red')
    const icon = creatIcon('fa-solid fa-xmark')
    
    button.appendChild(icon);
    li.appendChild(button);
    
    document.querySelector('.items').appendChild(li);
}



function creatButton (classes){
    const button = document.createElement('button');
    button.className = classes;
    return button;
}

function creatIcon (classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

createnewItem('Cheese');