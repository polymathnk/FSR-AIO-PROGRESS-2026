const XHR = new XMLHttpRequest();

XHR.open('GET', 'https://api.github.com/users/nkthehustler/repos');

// ready state has 5 possible values 
// 0: Request not initialized.
// 1: Server connection established.
// 2: Headers received.
// 3: Loading response (body is being received).
// 4: Request completed.

XHR.onreadystatechange = function (){
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        data.forEach(repo =>{
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
            document.body.appendChild(li); // Append each list item to the body
        });
    } else if (this.readyState === 4) {
        console.error('Error loading JSON:', this.status);
    }
};

XHR.send();

