
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const usernameError = document.getElementById("username-error-msg");
const passwordError = document.getElementById("password-error-msg");
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", handleLogin);

async function handleLogin() {
    let isValid = true;

    clearFormErrors();

    let usernameIsEmpty = usernameInput.value.trim() === "";
    let passwordIsEmpty = passwordInput.value.trim() === "";

    if (usernameIsEmpty) {
        usernameError.textContent = "Username cannot be empty.";
        isValid = false;
    }

    if (passwordIsEmpty) {
        passwordError.textContent = "Password cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        const credentials = {username: usernameInput.value, password: passwordInput.value};

        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials)});
        
        const data = await res.json();
        console.log(data);

        clearFormInputs();

        if (data.isLogin === true) { 
            sessionStorage.setItem("id", data.user.id);
            sessionStorage.setItem("username", data.user.username);
            window.location = "./about.html"
        } else {
            alert("wrong....");
        }
    }
}   

function clearFormInputs() {
    usernameInput.value = "";
    passwordInput.value = "";
}

function clearFormErrors() {
    usernameError.textContent = "";
    passwordError.textContent = "";
}
