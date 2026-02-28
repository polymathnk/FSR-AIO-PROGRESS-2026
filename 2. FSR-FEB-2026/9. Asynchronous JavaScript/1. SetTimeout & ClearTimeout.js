// setTimeout(() => {
//     alert('Hello from callback');
// }, 2000);

// console.log('Hello from global scope')

// setTimeout(setText, 2000);

function setText (){
    document.querySelector('h1').innerText = 'Hello From Callback'
}

const timerID = setTimeout(setText, 3000);

document.getElementById('cancel').addEventListener('click', ()=>{
    console.log(timerID);
    clearTimeout(timerID);
    console.log('Timer Canceled');
})
