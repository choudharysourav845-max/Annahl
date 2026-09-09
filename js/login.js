// ===============================
// PASSWORD SHOW / HIDE
// ===============================

const togglePassword =
    document.getElementById("togglePassword");

const password =
    document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        this.innerHTML =
            '<i class="bi bi-eye-slash"></i>';

    } else {

        password.type = "password";

        this.innerHTML =
            '<i class="bi bi-eye"></i>';
    }

});


// ===============================
// LOGIN VALIDATION
// ===============================

const loginForm =
    document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email =
        document.getElementById("email");

    const password =
        document.getElementById("password");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    let valid = true;


    // Clear previous errors

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    email.classList.remove("input-error");
    password.classList.remove("input-error");


    // ===============================
    // EMAIL
    // ===============================

    if (email.value.trim() === "") {

        emailError.innerHTML =
            "Please enter your email.";

        email.classList.add("input-error");

        valid = false;

    } else {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {

            emailError.innerHTML =
                "Please enter a valid email.";

            email.classList.add("input-error");

            valid = false;
        }
    }


    // ===============================
    // PASSWORD
    // ===============================

    if (password.value.trim() === "") {

        passwordError.innerHTML =
            "Please enter your password.";

        password.classList.add("input-error");

        valid = false;

    } else if (password.value.length < 6) {

        passwordError.innerHTML =
            "Password must be at least 6 characters.";

        password.classList.add("input-error");

        valid = false;
    }


    // ===============================
    // SUCCESS
    // ===============================

    if (valid) {

        alert("Login successful!");

        // Example redirect:
        // window.location.href = "dashboard.html";

    }

});