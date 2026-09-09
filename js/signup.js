// ======================================
// PASSWORD SHOW / HIDE
// ======================================

const password = document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");

const togglePassword =
    document.getElementById("togglePassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


// Password

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


// Confirm Password

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        this.innerHTML =
            '<i class="bi bi-eye-slash"></i>';

    } else {

        confirmPassword.type = "password";

        this.innerHTML =
            '<i class="bi bi-eye"></i>';
    }

});


// ======================================
// SIGNUP VALIDATION
// ======================================

const signupForm =
    document.getElementById("signupForm");


signupForm.addEventListener("submit", function (e) {

    e.preventDefault();


    // Get values

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const passwordValue =
        password.value;

    const confirmPasswordValue =
        confirmPassword.value;


    // Error elements

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");


    // Clear errors

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    document.getElementById("name")
        .classList.remove("input-error");

    document.getElementById("email")
        .classList.remove("input-error");

    password.classList.remove("input-error");

    confirmPassword.classList.remove("input-error");


    let valid = true;


    // ======================================
    // NAME VALIDATION
    // ======================================

    if (name === "") {

        nameError.innerHTML =
            "Please enter your name.";

        document.getElementById("name")
            .classList.add("input-error");

        valid = false;

    } else if (name.length < 3) {

        nameError.innerHTML =
            "Name must be at least 3 characters.";

        document.getElementById("name")
            .classList.add("input-error");

        valid = false;
    }


    // ======================================
    // EMAIL VALIDATION
    // ======================================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.innerHTML =
            "Please enter your email.";

        document.getElementById("email")
            .classList.add("input-error");

        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.innerHTML =
            "Please enter a valid email.";

        document.getElementById("email")
            .classList.add("input-error");

        valid = false;
    }


    // ======================================
    // PASSWORD VALIDATION
    // ======================================

    if (passwordValue === "") {

        passwordError.innerHTML =
            "Please enter your password.";

        password.classList.add("input-error");

        valid = false;

    } else if (passwordValue.length < 6) {

        passwordError.innerHTML =
            "Password must be at least 6 characters.";

        password.classList.add("input-error");

        valid = false;
    }


    // ======================================
    // CONFIRM PASSWORD
    // ======================================

    if (confirmPasswordValue === "") {

        confirmPasswordError.innerHTML =
            "Please confirm your password.";

        confirmPassword.classList.add("input-error");

        valid = false;

    } else if (passwordValue !== confirmPasswordValue) {

        confirmPasswordError.innerHTML =
            "Passwords do not match.";

        confirmPassword.classList.add("input-error");

        valid = false;
    }


    // ======================================
    // SUCCESS
    // ======================================

    if (valid) {

        alert("Signup successful!");

        // Backend connect karne ke baad
        // yahan redirect laga sakte ho.

        // window.location.href = "login.html";

    }

});