document.getElementById('jwtForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate JWT generation and verification (simplified)
    const fakeToken = btoa(`${username}:${password}`);
    localStorage.setItem('token', fakeToken);
    document.getElementById('message').textContent = 'Login successful! Token: ' + fakeToken;
});

function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = atob(token).split(':');
        const username = decodedToken[0];
        document.getElementById('message').textContent = 'Welcome back, ' + username;
    } else {
        document.getElementById('message').textContent = 'Please log in.';
    }
}

checkToken();
