const text = document.querySelector('p');
const itemsList = document.querySelector('.item-list');
const list = document.querySelector('li');

function run(){
    // text.className = 'card dark'
    // text.classList.add('dark');
    // text.classList.remove('card');
    // text.classList.toggle('dark');
    text.classList.replace('card', 'dark')

    //  change style
    itemsList.style.lineHeight = '4rem'
}





document.querySelector('button').onclick = run;


