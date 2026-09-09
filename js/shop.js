document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const products = document.querySelectorAll(".product-col");

    const searchInput =
        document.getElementById("searchInput");

    const priceFilters =
        document.querySelectorAll('input[name="price"]');

    const sizeFilters =
        document.querySelectorAll('input[name="size"]');

    const brandFilters =
        document.querySelectorAll('input[name="brand"]');

    const colorFilters =
        document.querySelectorAll(".color");

    const resultText =
        document.getElementById("resultText");

    const noProduct =
        document.getElementById("noProduct");

    const gridBtn =
        document.getElementById("gridBtn");

    const listBtn =
        document.getElementById("listBtn");

    const productGrid =
        document.getElementById("productGrid");


    /* =====================================================
       FILTER FUNCTION
    ===================================================== */

    function filterProducts() {


        /* ================= SEARCH ================= */

        const searchValue =
            searchInput.value
                .toLowerCase()
                .trim();


        /* ================= PRICE ================= */

        const selectedPrice =
            document.querySelector(
                'input[name="price"]:checked'
            ).value;


        /* ================= SIZE ================= */

        const selectedSize =
            document.querySelector(
                'input[name="size"]:checked'
            ).value;


        /* ================= BRAND ================= */

        const selectedBrand =
            document.querySelector(
                'input[name="brand"]:checked'
            ).value;


        /* ================= COLOR ================= */

        const activeColor =
            document.querySelector(
                ".color.active"
            );

        const selectedColor =
            activeColor
                ? activeColor.dataset.color
                : "all";


        let visibleCount = 0;


        /* =================================================
           LOOP PRODUCTS
        ================================================= */

        products.forEach(function (product) {


            const name =
                product.dataset.name.toLowerCase();


            const price =
                parseFloat(product.dataset.price);


            const size =
                product.dataset.size;


            const color =
                product.dataset.color;


            const brand =
                product.dataset.brand;


            /* ================= SEARCH MATCH ================= */

            const searchMatch =
                name.includes(searchValue);


            /* ================= PRICE MATCH ================= */

            let priceMatch = true;


            if (selectedPrice === "50-100") {

                priceMatch =
                    price >= 50 &&
                    price <= 100;

            }


            else if (selectedPrice === "100-200") {

                priceMatch =
                    price >= 100 &&
                    price <= 200;

            }


            else if (selectedPrice === "200-plus") {

                priceMatch =
                    price >= 200;

            }


            /* ================= SIZE MATCH ================= */

            const sizeMatch =
                selectedSize === "all" ||
                size === selectedSize;


            /* ================= COLOR MATCH ================= */

            const colorMatch =
                selectedColor === "all" ||
                color === selectedColor;


            /* ================= BRAND MATCH ================= */

            const brandMatch =
                selectedBrand === "all" ||
                brand === selectedBrand;


            /* =================================================
               FINAL MATCH
            ================================================= */

            const showProduct =
                searchMatch &&
                priceMatch &&
                sizeMatch &&
                colorMatch &&
                brandMatch;


            /* ================= SHOW ================= */

            if (showProduct) {

                product.style.display = "";

                visibleCount++;

            }


            /* ================= HIDE ================= */

            else {

                product.style.display = "none";

            }

        });


        /* =================================================
           RESULT TEXT
        ================================================= */

        if (visibleCount === 0) {

            resultText.textContent =
                "Showing Products 0 – 0 Of 0 Result";

            noProduct.style.display = "block";

        }

        else {

            resultText.textContent =
                `Showing Products 1 – ${visibleCount} Of ${visibleCount} Result`;

            noProduct.style.display = "none";

        }

    }


    /* =====================================================
       PRICE FILTER
    ===================================================== */

    priceFilters.forEach(function (filter) {

        filter.addEventListener(
            "change",
            filterProducts
        );

    });


    /* =====================================================
       SIZE FILTER
    ===================================================== */

    sizeFilters.forEach(function (filter) {

        filter.addEventListener(
            "change",
            filterProducts
        );

    });


    /* =====================================================
       BRAND FILTER
    ===================================================== */

    brandFilters.forEach(function (filter) {

        filter.addEventListener(
            "change",
            filterProducts
        );

    });


    /* =====================================================
       SEARCH
    ===================================================== */

    searchInput.addEventListener(
        "input",
        filterProducts
    );


    /* =====================================================
       COLOR FILTER
    ===================================================== */

    colorFilters.forEach(function (color) {

        color.addEventListener(
            "click",
            function () {


                colorFilters.forEach(function (item) {

                    item.classList.remove("active");

                });


                this.classList.add("active");


                filterProducts();

            }
        );

    });


    /* =====================================================
       GRID VIEW
    ===================================================== */

    gridBtn.addEventListener(
        "click",
        function () {


            gridBtn.classList.add("active");

            listBtn.classList.remove("active");


            productGrid.classList.remove(
                "list-view"
            );


            products.forEach(function (product) {

                product.classList.remove(
                    "list-product"
                );

            });

        }
    );


    /* =====================================================
       LIST VIEW
    ===================================================== */

    listBtn.addEventListener(
        "click",
        function () {


            listBtn.classList.add("active");

            gridBtn.classList.remove("active");


            productGrid.classList.add(
                "list-view"
            );


            products.forEach(function (product) {

                product.classList.add(
                    "list-product"
                );

            });

        }
    );


    /* =====================================================
       INITIAL FILTER
    ===================================================== */

    filterProducts();

});


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