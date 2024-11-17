
const buttonSection = document.getElementById('button-section');
const registerSection = document.getElementById('register-section');
const loginSection = document.getElementById('login-section');
const secureSection = document.getElementById('secure-section');

const showRegisterButton = document.getElementById('show-register');
const showLoginButton = document.getElementById('show-login');
const backButtons = document.querySelectorAll('.back-button');
const logoutButton = document.getElementById('logout-button');

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');


showRegisterButton.addEventListener('click', () => {
    buttonSection.style.display = 'none';
    registerSection.style.display = 'block';
});


showLoginButton.addEventListener('click', () => {
    buttonSection.style.display = 'none';
    loginSection.style.display = 'block';
});


backButtons.forEach((button) => {
    button.addEventListener('click', () => {
        registerSection.style.display = 'none';
        loginSection.style.display = 'none';
        buttonSection.style.display = 'block';
    });
});


registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (localStorage.getItem(username)) {
        alert('User already exists. Please login.');
    } else {
        localStorage.setItem(username, password);
        alert('Registration successful! You can now log in.');
        registerForm.reset();
        registerSection.style.display = 'none';
        buttonSection.style.display = 'block';
    }
});


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert('Login successful!');
        loginSection.style.display = 'none';
        secureSection.style.display = 'block';
    } else {
        alert('Invalid username or password.');
    }
});

logoutButton.addEventListener('click', () => {
    secureSection.style.display = 'none';
    buttonSection.style.display = 'block';
    alert('You have logged out.');
});
