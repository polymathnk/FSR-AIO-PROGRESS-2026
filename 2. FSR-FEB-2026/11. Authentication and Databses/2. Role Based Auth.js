let role = '';

function loginAs(userRole) {
    role = userRole;
    displayContent();
}

function logout() { 
    role = '';
    displayContent();
}

function displayContent() {
    const contentElement = document.getElementById('content');
    if (role === 'admin') {
        contentElement.textContent = 'Welcome Admin! You have full access.';
    } else if (role === 'user') {
        contentElement.textContent = 'Welcome User! You have limited access.';
    } else {
        contentElement.textContent = 'Please log in to see the content.';
    }
}

displayContent();
