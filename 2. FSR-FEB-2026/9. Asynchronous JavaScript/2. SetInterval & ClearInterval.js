// const itervalID = setInterval(mycallback, 1000, 'Hello');

// function mycallback(a){
//     console.log(a, Date.now());
// }


let intervalID;

function startChange (){
    if(!intervalID){
        intervalID = setInterval(changeColor, 1000);
    }
}

// function changeColor(){
//     if(document.body.style.backgroundColor !== 'black'){
//         document.body.style.backgroundColor = 'black';  
//         document.body.style.color = 'white';  
//         console.log('Black and White');
//     }

//     else{
//         if(document.body.style.backgroundColor !== 'white'){
//             document.body.style.backgroundColor = 'white';  
//             document.body.style.color = 'black'; 
//             console.log('White and Black');
//         }
//     }
// }

function changeColor(){
    const radnomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${radnomColor}`;

}

function stopChange (){
    clearInterval(intervalID);
    console.log('SetInterval has been stopped')
}


document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);