document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuButton && navbar) {
        menuButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const isOpen = navbar.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            const icon = menuButton.querySelector("i");

            if (icon) {
                icon.className = isOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";
            }
        });

        navbar.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");

                const icon = menuButton.querySelector("i");

                if (icon) {
                    icon.className = "fa-solid fa-bars";
                }
            });
        });
    }

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        function updateBackToTop() {
            backToTop.style.display =
                window.scrollY > 350 ? "flex" : "none";
        }

        window.addEventListener("scroll", updateBackToTop);
        updateBackToTop();

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});