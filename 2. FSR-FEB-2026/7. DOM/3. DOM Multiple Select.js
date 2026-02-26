// document.querySelectorAll() it is used to select all the multiple items like all h1's, all p's all li's etc

const listItems = document.querySelectorAll('.item');


// console.log(listItems[1].innerText);
// listItems[0].style.color = 'red';

// listItems.forEach((item, index)=>{
//      item.style.color = 'red'
//      if(index === 1){
//         item.remove();
//      }

//      if(index === 0){
//         item.innerHTML = ` Pineapple
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`
//      }
// })
 
// selecting multiple elements by using classname or id
const listItems2 = document.getElementsByClassName('item')

// we have to covert an listtem2 in as an array casue it returns by default an HTML collection 
// we cant use forEach on it that's why
const listArray = Array.from(listItems2);

listArray.forEach((list, index)=>{
    list.style.color = 'red';
    if(index === 2){
        list.remove();
    }
})


console.log(listArray)