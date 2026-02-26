function replaceFirstItem (){
    const firstItem = document.querySelector('li');
    const li = document.createElement('li');
    li.innerText = 'Replaced First'
    firstItem.replaceWith(li);
} 


function replaceSecondItem (){
    const secondItem = document.querySelector('li:nth-child(2)'); 
    secondItem.outerHTML = '<li>Replaced Second</li>'
}


function replaceALLItems (){
    const allItems = document.querySelectorAll('li')
    allItems.forEach((item)=>{
        item.innerText = 'Replaced Item'
    })
}

function replaceHeading (){
    const heading = document.querySelector('header');
    const h1 = document.querySelector('header h1');
    console.log(h1)
    const h2 = document.createElement('h2');
    h2.innerText = 'App Title';
    h2.id = 'app-title'
    heading.replaceChild(h2, h1);
}


replaceFirstItem();
replaceSecondItem();
replaceALLItems();
replaceHeading();