document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const toggleButton = nav.querySelector(".menu-toggle");

    // Toggle menú móvil
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // Función para cerrar todos los submenús
    function closeAllSubmenus() {
        nav.querySelectorAll("li.has-submenu").forEach(li => li.classList.remove("open"));
    }

    // Abrir/Cerrar submenús al hacer clic en el padre
    nav.querySelectorAll("li.has-submenu > a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // prevenir navegación para controlar menú

            const parentLi = this.parentElement;
            const isOpen = parentLi.classList.contains("open");

            // Cierra todos y abre solo el actual si no estaba abierto
            closeAllSubmenus();
            if (!isOpen) {
                parentLi.classList.add("open");
            } else {
                parentLi.classList.remove("open");
            }
        });
    });

    // Al hacer clic en cualquier link del submenu, cerrar menú y submenus
    nav.querySelectorAll("li.has-submenu ul li a, ul > li:not(.has-submenu) > a").forEach(link => {
        link.addEventListener("click", () => {
            // Para móvil, cierra menú
            if (window.innerWidth <= 768) {
                nav.classList.remove("open");
            }
            closeAllSubmenus();
            // Aquí no prevengo navegación para que la página se cargue normalmente
        });
    });
});
