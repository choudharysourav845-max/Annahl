

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE DROPDOWNS
    ===================================================== */

    const mobileDropdowns =
        document.querySelectorAll(".mobile-dropdown");


    mobileDropdowns.forEach(function (dropdown) {


        const button =
            dropdown.querySelector(
                ".mobile-dropdown-btn"
            );


        button.addEventListener(
            "click",
            function () {


                /*
                    Close other dropdowns
                */

                mobileDropdowns.forEach(
                    function (otherDropdown) {

                        if (otherDropdown !== dropdown) {

                            otherDropdown.classList.remove(
                                "open"
                            );

                        }

                    }
                );


                /*
                    Toggle current dropdown
                */

                dropdown.classList.toggle(
                    "open"
                );

            }
        );

    });



    /* =====================================================
       DESKTOP DROPDOWN CLICK
    ===================================================== */

    const navDropdownLinks =
        document.querySelectorAll(
            ".nav-dropdown-link"
        );


    navDropdownLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                }
            );

        }
    );



    /* =====================================================
       PROFILE BUTTON
    ===================================================== */

    const profileButton =
        document.querySelector(
            ".profile-button"
        );


    if (profileButton) {

        profileButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    }



    /* =====================================================
       CLOSE MOBILE SIDEBAR
       AFTER CLICKING LINK
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-nav a"
        );


    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {


                    const mobileSidebar =
                        document.getElementById(
                            "mobileSidebar"
                        );


                    const sidebar =
                        bootstrap.Offcanvas
                            .getInstance(
                                mobileSidebar
                            );


                    if (sidebar) {

                        sidebar.hide();

                    }

                }
            );

        }
    );

});





const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");


    // Clear errors
    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });


    // Name
    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Please enter your name.";
        valid = false;
    }


    // Lastname
    if (lastname.value.trim() === "") {
        lastname.nextElementSibling.textContent = "Please enter your lastname.";
        valid = false;
    }


    // Email
    if (email.value.trim() === "") {

        email.nextElementSibling.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!validateEmail(email.value.trim())) {

        email.nextElementSibling.textContent =
            "Please enter a valid email.";

        valid = false;
    }


    // Subject
    if (subject.value.trim() === "") {
        subject.nextElementSibling.textContent =
            "Please enter your subject.";

        valid = false;
    }


    // Message
    if (message.value.trim() === "") {
        message.nextElementSibling.textContent =
            "Please enter your message.";

        valid = false;
    }


    // Success
    if (valid) {

        successMessage.style.display = "block";

        contactForm.reset();

        setTimeout(function () {
            successMessage.style.display = "none";
        }, 4000);
    }

});


function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}


const emailBox = document.getElementById("emailBox");

// Main div
const box = document.createElement("div");
box.classList.add("email-box");

// Input
const input = document.createElement("input");

input.type = "email";
input.placeholder = "Email Address *";

// Icon
const icon = document.createElement("i");
icon.classList.add("bi", "bi-envelope");

// Elements add
box.appendChild(input);
box.appendChild(icon);

// Box add to page
emailBox.appendChild(box);
