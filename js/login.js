const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

// Usuario y contraseña de prueba
const validUser = "admin";
const validPassword = "1234";

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === validUser && password === validPassword) {
        window.location.href = "pages/home.html";
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos.";
    }
});
