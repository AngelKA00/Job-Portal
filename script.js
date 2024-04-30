// menu bar - media queries
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    
}

// dropdown - alljobs.html page

let dropdown_items = document.querySelectorAll('.job-filter form .dropdown-container .dropdown .lists .items');

dropdown_items.forEach(items => {
    items.onclick = () => {
        items_parent = items.parentElement.parentElement;
        let output = items_parent.querySelector('.output');
        output.value = items.innerText;
    }
})


















// JavaScript code for language translation
$(document).ready(function() {
    $('#language-toggle').click(function() {
        // Toggle between English and Japanese
        var currentLanguage = $(this).text();
        if (currentLanguage === '日本語') {
            // Change to English
            $(this).text('English');
            // Implement language change logic
            // This could involve replacing text on the page with translated versions
        } else {
            // Change to Japanese
            $(this).text('日本語');
            // Implement language change logic
            // This could involve replacing text on the page with translated versions
        }
    });
});

// Sample login credentials (for demonstration only)
const credentials = {
    username: 'user',
    password: 'password123'
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === credentials.username && password === credentials.password) {
        document.getElementById('loginMessage').textContent = 'Login successful';
        // Redirect to dashboard or perform other actions after successful login
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password';
    }
});