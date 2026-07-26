/* ===========================
   Mobile Navigation
=========================== */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navbar.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.className = isOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";
            }
        });

        navbar.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navbar.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.className = "fa-solid fa-bars";
                }
            });
        });
    }

    /* ===========================
       Back To Top
    =========================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        const updateBackToTop = () => {
            backToTop.style.display =
                window.scrollY > 350 ? "flex" : "none";
        };

        window.addEventListener("scroll", updateBackToTop);

        updateBackToTop();

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});