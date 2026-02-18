// Default params
function registerUser(user = 'Bot'){
    return user + ' is registered';
}

// Blank Args
console.log(registerUser());  

//  Rest Params
function sum(...numbers){
    return numbers;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

// Passing objects as params
function loginUser(user){
    return `${user.name} with the id of ${user.id} is logged in `;
}

const user = {
    id: 22323,
    name: 'Nitin'
}

console.log(loginUser(user));


// Passing arrays as params
function getRandom(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const item = arr[randomIndex];
    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])