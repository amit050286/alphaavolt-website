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

document.querySelectorAll(".filter-buttons button").forEach(button => {
    button.addEventListener("click", () => {
        document
            .querySelectorAll(".filter-buttons button")
            .forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter || "all";

        document.querySelectorAll(".gallery-item").forEach(item => {
            item.classList.toggle(
                "hidden",
                filter !== "all" &&
                item.dataset.category !== filter
            );
        });
    });
});