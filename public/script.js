
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const usernameError = document.getElementById("username-error-msg");
const passwordError = document.getElementById("password-error-msg");
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", handleLogin);

function handleLogin() {
    let isValid = true;

    usernameError.textContent = "";
    passwordError.textContent = "";

    if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username cannot be empty.";
        isValid = false;
    }

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        alert("Logged in successfully!");
        usernameInput.value = "";
        passwordInput.value = "";
    }
}