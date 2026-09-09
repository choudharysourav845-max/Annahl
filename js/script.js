
const targetDate = new Date("September 30, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);


const tabs = document.querySelectorAll(".project-tabs .nav-link");
const projects = document.querySelectorAll(".project-item");

tabs.forEach(tab => {

    tab.addEventListener("click", function () {

        // Active tab
        tabs.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        // Selected category
        const filter = this.getAttribute("data-filter");

        projects.forEach(project => {

            const categories = project
                .getAttribute("data-category")
                .split(" ");

            // ALL PROJECT
            if (filter === "all") {

                project.style.display = "block";

            }

            // Other tabs
            else if (categories.includes(filter)) {

                project.style.display = "block";

            }

            else {

                project.style.display = "none";

            }

        });

    });

});
/* =====================================================
   TESTIMONIAL DATA
===================================================== */

const testimonials = [

    {
        image: "images/1 (2).png",

        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry has
                    been the industrys standard dummy text ever since the 1500s unknown printer
                    took a galley of type and scrambled it to make a type specimen book has
                    survived not has been the industrys standard consectetur adipisicing elit only five
                    centuries the industrys standard consectetur.`,

        name: "Jenefer Marvella",

        designation: "CEO, TBR"
    },


    {
        image: "images/2 (2).png",

        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry has
                    been the industrys standard dummy text ever since the 1500s unknown printer
                    took a galley of type and scrambled it to make a type specimen book has
                    survived not has been the industrys standard consectetur adipisicing elit only five
                    centuries the industrys standard consectetur.`,

        name: "John William",

        designation: "Manager, ABC"
    },


    {
        image: "images/3 (2).png",

        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry has
                    been the industrys standard dummy text ever since the 1500s unknown printer
                    took a galley of type and scrambled it to make a type specimen book has
                    survived not has been the industrys standard consectetur adipisicing elit only five
                    centuries the industrys standard consectetur.`,

        name: "David Martin",

        designation: "Director, XYZ"
    }

];


/* =====================================================
   SELECT ELEMENTS
===================================================== */

const testimonialImage =
    document.querySelector(".testimonial-image");

const testimonialText =
    document.querySelector(".testimonial-text");

const clientName =
    document.querySelector(".client-name");

const clientDesignation =
    document.querySelector(".client-designation");

const testimonialContent =
    document.querySelector(".testimonial-content");

const testimonialImageWrap =
    document.querySelector(".testimonial-image-wrap");

const prevBtn =
    document.querySelector("#prevBtn");

const nextBtn =
    document.querySelector("#nextBtn");


/* =====================================================
   CURRENT SLIDE
===================================================== */

let currentSlide = 0;


/* =====================================================
   SHOW TESTIMONIAL
===================================================== */

function showTestimonial(index) {

    const testimonial = testimonials[index];


    /* Remove animation class */

    testimonialContent.classList.remove("change");
    testimonialImageWrap.classList.remove("change");


    /* Force browser reflow */

    void testimonialContent.offsetWidth;
    void testimonialImageWrap.offsetWidth;


    /* Update content */

    testimonialImage.src = testimonial.image;

    testimonialText.textContent = testimonial.text;

    clientName.textContent = testimonial.name;

    clientDesignation.textContent =
        testimonial.designation;


    /* Add animation */

    testimonialContent.classList.add("change");
    testimonialImageWrap.classList.add("change");
}


/* =====================================================
   NEXT BUTTON
===================================================== */

nextBtn.addEventListener("click", function () {

    currentSlide++;

    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    }

    showTestimonial(currentSlide);

});


/* =====================================================
   PREVIOUS BUTTON
===================================================== */

prevBtn.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = testimonials.length - 1;
    }

    showTestimonial(currentSlide);

});



const slider = document.getElementById("brandSlider");
const track = document.getElementById("brandTrack");

let isDragging = false;
let startX = 0;
let startScroll = 0;

let autoScroll = true;

let speed = 1;

let originalWidth = track.scrollWidth / 2;


/* =====================================================
   AUTO INFINITE SCROLL
===================================================== */

function autoMove() {

    if (autoScroll && !isDragging) {

        slider.scrollLeft += speed;

        /*
         * Original images ki width complete hone ke baad
         * starting position par silently aa jayega.
         */

        if (slider.scrollLeft >= originalWidth) {

            slider.scrollLeft -= originalWidth;

        }

    }

    requestAnimationFrame(autoMove);
}

autoMove();


/* =====================================================
   MOUSE DRAG
===================================================== */

slider.addEventListener("mousedown", function (e) {

    isDragging = true;

    slider.classList.add("active");

    startX = e.pageX;

    startScroll = slider.scrollLeft;

});


slider.addEventListener("mousemove", function (e) {

    if (!isDragging) return;

    e.preventDefault();

    const movement = e.pageX - startX;

    slider.scrollLeft = startScroll - movement;

});


slider.addEventListener("mouseup", function () {

    isDragging = false;

    slider.classList.remove("active");

});


slider.addEventListener("mouseleave", function () {

    isDragging = false;

    slider.classList.remove("active");

});


/* =====================================================
   TOUCH / MOBILE
===================================================== */

slider.addEventListener("touchstart", function (e) {

    isDragging = true;

    startX = e.touches[0].pageX;

    startScroll = slider.scrollLeft;

});


slider.addEventListener("touchmove", function (e) {

    if (!isDragging) return;

    const movement = e.touches[0].pageX - startX;

    slider.scrollLeft = startScroll - movement;

});


slider.addEventListener("touchend", function () {

    isDragging = false;

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






