document.addEventListener('DOMContentLoaded', () => {
    const userNameElement = document.getElementById('userName');
    const logoutBtn = document.getElementById('logoutBtn');

    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (user) {
        userNameElement.textContent = user.name;
    } else {
        window.location.href = 'index.html'; // Redirect to login if not logged in
    }

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser'); // Clear the logged-in user data
        window.location.href = 'index.html'; // Redirect to login page
    });
});