

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



/* =====================================================
   ACCORDION
===================================================== */

const accordionHeaders =
    document.querySelectorAll(".accordion-header");


accordionHeaders.forEach(function (header) {

    header.addEventListener("click", function () {

        const targetId =
            this.getAttribute("data-target");

        const target =
            document.getElementById(targetId);

        const isOpen =
            target.classList.contains("show");


        /* Close all */

        document.querySelectorAll(".accordion-content")
            .forEach(function (content) {

                content.classList.remove("show");

            });


        document.querySelectorAll(".accordion-header")
            .forEach(function (item) {

                item.classList.remove("active");

                const icon =
                    item.querySelector("i");

                icon.className = "bi bi-plus";

            });


        /* Open clicked */

        if (!isOpen) {

            target.classList.add("show");

            this.classList.add("active");

            const icon =
                this.querySelector("i");

            icon.className = "bi bi-dash";

        }

    });

});



/* =====================================================
   COUPON
===================================================== */

const applyCoupon =
    document.getElementById("applyCoupon");


applyCoupon.addEventListener("click", function () {

    const code =
        document.getElementById("couponCode")
        .value
        .trim();


    const message =
        document.getElementById("couponMessage");


    if (code === "") {

        message.textContent =
            "Please enter coupon code.";

        message.style.color = "#d32f2f";

        return;
    }


    /* Demo coupon */

    if (code.toUpperCase() === "SAVE10") {

        message.textContent =
            "Coupon applied successfully!";

        message.style.color = "#23833c";

    } else {

        message.textContent =
            "Invalid coupon code.";

        message.style.color = "#d32f2f";

    }

});



/* =====================================================
   PAYMENT METHOD
===================================================== */

const paymentMethods =
    document.querySelectorAll(
        'input[name="payment"]'
    );


const cardForm =
    document.getElementById("cardForm");


const paymentLogos =
    document.getElementById("paymentLogos");


paymentMethods.forEach(function (method) {

    method.addEventListener("change", function () {

        if (this.value === "card") {

            cardForm.style.display = "block";

            paymentLogos.style.display = "grid";

        } else {

            cardForm.style.display = "none";

            paymentLogos.style.display = "none";

        }

    });

});



/* =====================================================
   FORM VALIDATION
===================================================== */

const proceedBtn =
    document.getElementById("proceedBtn");


proceedBtn.addEventListener("click", function () {


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    const success =
        document.getElementById("checkoutSuccess");


    /* Clear old errors */

    document.querySelectorAll(
        ".field small, .card-field small"
    ).forEach(function (error) {

        error.textContent = "";

    });


    let valid = true;


    /* =================================================
       BILLING
    ================================================= */


    const firstName =
        document.getElementById("firstName");


    const lastName =
        document.getElementById("lastName");


    const age =
        document.getElementById("age");


    const district =
        document.getElementById("district");


    const address =
        document.getElementById("address");


    const postCode =
        document.getElementById("postCode");


    const email =
        document.getElementById("email");


    const phone =
        document.getElementById("phone");


    /* First Name */

    if (firstName.value.trim() === "") {

        firstName.parentElement
            .querySelector("small")
            .textContent =
            "Please enter first name.";

        valid = false;

    }


    /* Last Name */

    if (lastName.value.trim() === "") {

        lastName.parentElement
            .querySelector("small")
            .textContent =
            "Please enter last name.";

        valid = false;

    }


    /* Age */

    if (age.value === "") {

        age.parentElement
            .querySelector("small")
            .textContent =
            "Please select age.";

        valid = false;

    }


    /* District */

    if (district.value.trim() === "") {

        district.parentElement
            .querySelector("small")
            .textContent =
            "Please enter district.";

        valid = false;

    }


    /* Address */

    if (address.value.trim() === "") {

        address.parentElement
            .querySelector("small")
            .textContent =
            "Please enter address.";

        valid = false;

    }


    /* Post Code */

    if (postCode.value.trim() === "") {

        postCode.parentElement
            .querySelector("small")
            .textContent =
            "Please enter post code.";

        valid = false;

    }


    /* Email */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email.value.trim() === "") {

        email.parentElement
            .querySelector("small")
            .textContent =
            "Please enter email.";

        valid = false;

    } else if (!emailPattern.test(email.value.trim())) {

        email.parentElement
            .querySelector("small")
            .textContent =
            "Please enter valid email.";

        valid = false;

    }


    /* Phone */

    if (phone.value.trim() === "") {

        phone.parentElement
            .querySelector("small")
            .textContent =
            "Please enter phone number.";

        valid = false;

    }



    /* =================================================
       CARD VALIDATION
    ================================================= */


    if (payment === "card") {


        const cardName =
            document.getElementById("cardName");


        const cardNumber =
            document.getElementById("cardNumber");


        const cvv =
            document.getElementById("cvv");


        const expiry =
            document.getElementById("expiry");


        /* Card Name */

        if (cardName.value.trim() === "") {

            cardName.parentElement
                .querySelector("small")
                .textContent =
                "Enter card holder name.";

            valid = false;

        }


        /* Card Number */

        const cleanCard =
            cardNumber.value.replace(/\s/g, "");


        if (cleanCard === "") {

            cardNumber.parentElement
                .querySelector("small")
                .textContent =
                "Enter card number.";

            valid = false;

        } else if (!/^\d{8,19}$/.test(cleanCard)) {

            cardNumber.parentElement
                .querySelector("small")
                .textContent =
                "Enter valid card number.";

            valid = false;

        }


        /* CVV */

        if (!/^\d{3,4}$/.test(cvv.value.trim())) {

            cvv.parentElement
                .querySelector("small")
                .textContent =
                "Enter valid CVV.";

            valid = false;

        }


        /* Expiry */

        if (expiry.value === "") {

            expiry.parentElement
                .querySelector("small")
                .textContent =
                "Select expiry date.";

            valid = false;

        }

    }



    /* =================================================
       SUCCESS
    ================================================= */


    if (valid) {

        success.textContent =
            "Order submitted successfully!";

        success.style.display = "block";


        setTimeout(function () {

            success.style.display = "none";

        }, 4000);

    }

});



/* =====================================================
   CART TOTAL
===================================================== */

/*
   Agar tumhare Cart page mein localStorage use ho raha hai
   to cart data yahan automatically aa sakta hai.

   Example format:

   localStorage.setItem("cart", JSON.stringify([
       {
           name: "Honey",
           price: 20,
           quantity: 2
       }
   ]));
*/


function loadCartTotal() {

    let cart = [];


    try {

        cart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];

    } catch (error) {

        cart = [];

    }


    let productCount = 0;

    let subtotal = 0;


    cart.forEach(function (product) {

        productCount +=
            Number(product.quantity) || 0;


        subtotal +=
            (Number(product.price) || 0) *
            (Number(product.quantity) || 0);

    });


    document.getElementById("totalProduct")
        .textContent = productCount;


    document.getElementById("subPrice")
        .textContent =
        "$" + subtotal.toFixed(2);


    document.getElementById("totalPrice")
        .textContent =
        "$" + subtotal.toFixed(2);

}


loadCartTotal();



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
