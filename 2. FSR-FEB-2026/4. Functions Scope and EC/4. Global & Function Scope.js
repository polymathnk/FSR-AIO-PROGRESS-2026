// Global Scope
const x = 100;

console.log(x, 'in globaL');

function run(){
    console.log(window.innerHeight);
    console.log(x, 'in function')
}

run(); 

if (true){
    console.log(x, 'in block');
}

// Function Scope
function add(){
    const x = 1;
    const y = 50;
    console.log(x+y);
}

add();

