document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".container"),
          pwShowHide = document.querySelectorAll(".showHidePw"),
          pwFields = document.querySelectorAll(".password"),
          signUp = document.querySelector(".signup-link"),
          login = document.querySelector(".login-link"),
          loginBtn = document.getElementById("loginBtn"),
          signupBtn = document.getElementById("signupBtn");

    // Toggle Password Visibility
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            pwFields.forEach(pwField => {
                if (pwField.type === "password") {
                    pwField.type = "text";
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    });
                } else {
                    pwField.type = "password";
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    });
                }
            });
        });
    });

    // Switch to Signup Form
    signUp.addEventListener("click", () => {
        container.classList.add("active");
    });

    // Switch to Login Form
    login.addEventListener("click", () => {
        container.classList.remove("active");
    });

    // Check if user is already logged in
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        alert('Welcome back, ${loggedInUser.name}!');
    }

    // Signup Button Click Event
    signupBtn.addEventListener("click", () => {
        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value.trim();
        const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
        const termCon = document.getElementById('termCon').checked;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!termCon) {
            alert("You must accept the terms and conditions.");
            return;
        }

        const user = {
            name,
            email,
            password
        };

        localStorage.setItem(email, JSON.stringify(user));
        alert("Signup successful! Please login.");
        container.classList.remove("active");
    });

    // Login Button Click Event
    loginBtn.addEventListener("click", () => {
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        const user = JSON.parse(localStorage.getItem(email));

        if (user && user.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'home.html';
        } else {
            alert("Invalid email or password.");
        }
    });
});