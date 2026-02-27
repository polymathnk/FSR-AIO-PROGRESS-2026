const iteminput = document.getElementById('item-input');


const onkeyPress = (e)=>{
    //  console.log('Keypress');
}

const onkeyUp = (e)=>{
     console.log('KeyUp');
}

const onkeyDown = (e)=>{
    //  key
    if(e.key === 'Enter'){
        // alert('You Pressed Enter');
    }

    // keyCode
    if(e.keyCode ===13){
        alert('You Pressed Enter')
    }

    // Code
    if(e.code === 'Digit1'){
        console.log('you pressed 1')
    }

    // repeat
    if(e.repeat){
        console.log(`You are holding ${e.key}`);
    }
}

iteminput.addEventListener('keypress', onkeyPress);
iteminput.addEventListener('keyup', onkeyUp);
iteminput.addEventListener('keydown', onkeyDown);

