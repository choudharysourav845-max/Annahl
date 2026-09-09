

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




/* =========================================
   CART DATA
========================================= */

let cart = [

    // Example product
    // Isko uncomment karke product test kar sakte ho.

    /*
    {
        id: 1,
        name: "Honey Jar",
        image: "images/product-1.jpg",
        price: 25,
        quantity: 2
    },

    {
        id: 2,
        name: "Natural Honey",
        image: "images/product-2.jpg",
        price: 35,
        quantity: 1
    }
    */

];


/* =========================================
   SETTINGS
========================================= */

const VAT_RATE = 0.05;

const ECO_TAX = 0;

const DELIVERY_CHARGE = 0;


/* =========================================
   ELEMENTS
========================================= */

const cartProducts = document.getElementById("cartProducts");

const totalProduct = document.getElementById("totalProduct");

const subPrice = document.getElementById("subPrice");

const vat = document.getElementById("vat");

const ecoTax = document.getElementById("ecoTax");

const deliveryCharge = document.getElementById("deliveryCharge");

const totalPrice = document.getElementById("totalPrice");

const updateCart = document.getElementById("updateCart");

const continueShopping =
    document.getElementById("continueShopping");

const checkoutBtn =
    document.getElementById("checkoutBtn");


/* =========================================
   DISPLAY CART
========================================= */

function displayCart() {

    cartProducts.innerHTML = "";


    /* Empty Cart */

    if (cart.length === 0) {

        cartProducts.innerHTML = `
            <div class="empty-cart">
                Your cart is currently empty.
            </div>
        `;

        updateSummary();

        return;
    }


    /* Products */

    cart.forEach(function (product) {

        const productTotal =
            product.price * product.quantity;


        const productHTML = document.createElement("div");

        productHTML.classList.add("cart-product");


        productHTML.innerHTML = `

            <div>
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                >
            </div>


            <div class="product-name">
                ${product.name}
            </div>


            <div class="quantity-box">

                <button
                    class="quantity-btn minus-btn"
                    data-id="${product.id}"
                >
                    −
                </button>

                <span class="quantity-number">
                    ${product.quantity}
                </span>

                <button
                    class="quantity-btn plus-btn"
                    data-id="${product.id}"
                >
                    +
                </button>

            </div>


            <div class="product-price">
                $${product.price.toFixed(2)}
            </div>


            <div class="product-total">
                $${productTotal.toFixed(2)}
            </div>


            <div>

                <button
                    class="remove-btn"
                    data-id="${product.id}"
                    title="Remove product"
                >
                    <i class="bi bi-trash3"></i>
                </button>

            </div>

        `;


        cartProducts.appendChild(productHTML);

    });


    addCartEvents();

    updateSummary();

}


/* =========================================
   QUANTITY + / -
========================================= */

function addCartEvents() {

    const plusButtons =
        document.querySelectorAll(".plus-btn");


    const minusButtons =
        document.querySelectorAll(".minus-btn");


    const removeButtons =
        document.querySelectorAll(".remove-btn");


    /* PLUS */

    plusButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const id =
                Number(this.getAttribute("data-id"));


            const product =
                cart.find(function (item) {

                    return item.id === id;

                });


            if (product) {

                product.quantity++;

                displayCart();

            }

        });

    });


    /* MINUS */

    minusButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const id =
                Number(this.getAttribute("data-id"));


            const product =
                cart.find(function (item) {

                    return item.id === id;

                });


            if (product && product.quantity > 1) {

                product.quantity--;

            }


            displayCart();

        });

    });


    /* REMOVE */

    removeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const id =
                Number(this.getAttribute("data-id"));


            cart = cart.filter(function (item) {

                return item.id !== id;

            });


            displayCart();

        });

    });

}


/* =========================================
   UPDATE SUMMARY
========================================= */

function updateSummary() {

    let quantity = 0;

    let subtotal = 0;


    cart.forEach(function (product) {

        quantity += product.quantity;

        subtotal +=
            product.price * product.quantity;

    });


    const vatAmount =
        subtotal * VAT_RATE;


    const total =
        subtotal +
        vatAmount +
        ECO_TAX +
        DELIVERY_CHARGE;


    totalProduct.textContent =
        `( ${quantity} )`;


    subPrice.textContent =
        `$${subtotal.toFixed(2)}`;


    vat.textContent =
        `$${vatAmount.toFixed(2)}`;


    ecoTax.textContent =
        `$${ECO_TAX.toFixed(2)}`;


    deliveryCharge.textContent =
        `$${DELIVERY_CHARGE.toFixed(2)}`;


    totalPrice.textContent =
        `$${total.toFixed(2)}`;

}


/* =========================================
   UPDATE CART BUTTON
========================================= */

updateCart.addEventListener("click", function () {

    displayCart();

    this.textContent = "Cart Updated!";

    setTimeout(function () {

        updateCart.textContent = "Update Cart";

    }, 1500);

});


/* =========================================
   CONTINUE SHOPPING
========================================= */

continueShopping.addEventListener(
    "click",
    function () {

        // Apne shop page ka naam yahan likho
        window.location.href = "shop.html";

    }
);


/* =========================================
   CHECKOUT
========================================= */

checkoutBtn.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;

        }


        window.location.href = "checkout.html";

    }
);


/* =========================================
   INITIAL LOAD
========================================= */

displayCart();




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

