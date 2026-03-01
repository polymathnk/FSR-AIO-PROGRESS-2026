const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const palce = document.getElementById('location');
const profile = document.getElementById('img');
const button = document.getElementById('button');

function generateUser(){
fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
}).then((data)=>{

    name.innerText = (`${data.results[0].name.first} ${data.results[0].name.last}`);
    email.innerText = data.results[0].email;
    phone.innerText = data.results[0].phone;
    palce.innerText = data.results[0].location.city;
    profile.innerHTML = `<img src="${data.results[0].picture.large}">`
});
}

button.addEventListener('click', generateUser)