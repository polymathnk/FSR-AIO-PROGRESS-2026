// Fetching a JSON  file
fetch('./0. Movies.json')
.then((response) => response.json())
// .then((data) => console.log(data));

// Fetching a text file
fetch('./0. Test.txt')
.then((response) => response.text())
// .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/nkthehustler')
.then((response) => response.json())
.then((data) => document.querySelector('h1').innerText = data.login);
