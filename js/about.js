    /* =====================================================
TEAM SLIDER
===================================================== */

            document.addEventListener("DOMContentLoaded", function () {

                const slider = document.querySelector(".team-slider");
                const viewport = document.querySelector(".team-viewport");
                const track = document.querySelector(".team-track");

                const prevBtn = document.querySelector(".team-prev");
                const nextBtn = document.querySelector(".team-next");

                if (!slider || !viewport || !track || !prevBtn || !nextBtn) {
                    return;
                }

                let items = Array.from(track.querySelectorAll(".team-item"));

                let isDragging = false;
                let startX = 0;
                let currentX = 0;
                let moved = false;

                /* =========================================
                   GET GAP
                ========================================= */

                function getGap() {

                    const style = window.getComputedStyle(track);

                    return parseFloat(style.columnGap || style.gap) || 0;
                }


                /* =========================================
                   GET ITEM WIDTH
                ========================================= */

                function getItemWidth() {

                    if (!items.length) return 0;

                    return items[0].getBoundingClientRect().width;
                }


                /* =========================================
                   MOVE NEXT
                ========================================= */

                function nextSlide() {

                    if (isDragging) return;

                    const itemWidth = getItemWidth();
                    const gap = getGap();
                    const moveAmount = itemWidth + gap;

                    /* animate left */

                    track.style.transition = "transform 0.45s ease";

                    track.style.transform =
                        `translateX(-${moveAmount}px)`;


                    /* after animation */

                    setTimeout(function () {

                        /* first item ko last mein bhejo */

                        const firstItem = track.firstElementChild;

                        track.appendChild(firstItem);

                        /* position reset */

                        track.style.transition = "none";
                        track.style.transform = "translateX(0)";

                    }, 450);
                }


                /* =========================================
                   MOVE PREVIOUS
                ========================================= */

                function previousSlide() {

                    if (isDragging) return;

                    const itemWidth = getItemWidth();
                    const gap = getGap();
                    const moveAmount = itemWidth + gap;

                    /* last item ko first mein lao */

                    const lastItem = track.lastElementChild;

                    track.insertBefore(lastItem, track.firstElementChild);

                    /* starting position left */

                    track.style.transition = "none";

                    track.style.transform =
                        `translateX(-${moveAmount}px)`;


                    /* animate to original position */

                    requestAnimationFrame(function () {

                        requestAnimationFrame(function () {

                            track.style.transition =
                                "transform 0.45s ease";

                            track.style.transform =
                                "translateX(0)";

                        });

                    });
                }


                /* =========================================
                   ARROW CLICK
                ========================================= */

                nextBtn.addEventListener("click", function (e) {

                    e.preventDefault();

                    nextSlide();

                });


                prevBtn.addEventListener("click", function (e) {

                    e.preventDefault();

                    previousSlide();

                });


                /* =========================================
                   MOUSE DRAG
                ========================================= */

                viewport.addEventListener("mousedown", function (e) {

                    isDragging = true;
                    moved = false;

                    startX = e.clientX;

                    track.style.transition = "none";

                    viewport.style.cursor = "grabbing";

                });


                viewport.addEventListener("mousemove", function (e) {

                    if (!isDragging) return;

                    currentX = e.clientX;

                    const distance = currentX - startX;

                    if (Math.abs(distance) > 5) {
                        moved = true;
                    }

                });


                viewport.addEventListener("mouseup", function () {

                    if (!isDragging) return;

                    isDragging = false;

                    viewport.style.cursor = "grab";

                    const distance = currentX - startX;

                    const swipeLimit = 50;

                    if (distance < -swipeLimit) {

                        nextSlide();

                    } else if (distance > swipeLimit) {

                        previousSlide();

                    }

                });


                viewport.addEventListener("mouseleave", function () {

                    if (!isDragging) return;

                    isDragging = false;

                    viewport.style.cursor = "grab";

                });


                /* =========================================
                   TOUCH SWIPE
                ========================================= */

                viewport.addEventListener("touchstart", function (e) {

                    isDragging = true;

                    startX = e.touches[0].clientX;

                }, {passive: true});


                viewport.addEventListener("touchmove", function (e) {

                    if (!isDragging) return;

                    currentX = e.touches[0].clientX;

                }, {passive: true});


                viewport.addEventListener("touchend", function () {

                    if (!isDragging) return;

                    isDragging = false;

                    const distance = currentX - startX;

                    const swipeLimit = 50;

                    if (distance < -swipeLimit) {

                        nextSlide();

                    } else if (distance > swipeLimit) {

                        previousSlide();

                    }

                });


                /* =========================================
                   INITIAL
                ========================================= */

                track.style.transform = "translateX(0)";
                track.style.transition = "none";

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