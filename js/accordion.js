document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;

            // Alternar la clase .expanded para mostrar/ocultar el contenido
            content.classList.toggle("expanded");
            toggle.textContent = '+';
        });
    });
});
