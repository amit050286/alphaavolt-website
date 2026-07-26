const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        const open = navbar.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(open));

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.className = open
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars";
        }
    });
}

/* Back to top button */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 350 ? "flex" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

    updateBackToTop();
}

/* Gallery filters */

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");

            const isOpen = navbar.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isOpen);

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-xmark", isOpen);
            }
        });

        navbar.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }
});