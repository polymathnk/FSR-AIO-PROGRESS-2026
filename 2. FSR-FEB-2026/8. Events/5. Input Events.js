const  itemInput = document.getElementById('item-input');
const  priorityInput = document.getElementById('priority-input');
const  checkboxInput = document.getElementById('checkbox');
const  heading = document.querySelector('.head');

const onInput = (e)=>{
    heading.innerText = e.target.value;
}

const onFocus = (e)=>{
    console.log('Input is Focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}

const onBlur = (e)=>{
    console.log('Input is Blurred');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkboxInput.addEventListener('input', onInput);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);



