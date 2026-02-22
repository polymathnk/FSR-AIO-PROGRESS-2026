// Function Declaration
function add$sign(value){
    return '$' + value;
}

console.log(add$sign(100));

// Function Expression
const addplusSign = function(value){
    return '+' + value;
};

console.log(addplusSign(200));
