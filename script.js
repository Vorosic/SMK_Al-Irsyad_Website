const header = document.querySelector("header");
const scrollToTopBtn = document.getElementById("myBtn");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);

    // Show/hide the "scroll to top" button based on the scroll position
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};

// Function to scroll to the top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
