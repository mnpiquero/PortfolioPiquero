const toggleCheckbox = document.getElementById('toggle-dark-mode');
const modeText = document.getElementById('mode-text');

// Verifica si hay preferencia de modo oscuro guardada en localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleCheckbox.checked = true; // Marca el checkbox
    modeText.textContent = 'Modo Claro'; // Cambia el texto a "Modo Oscuro"
} else {
    modeText.textContent = 'Modo Oscuro'; // Cambia el texto a "Modo Claro" por defecto
}

// Agrega un evento al checkbox
toggleCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');

    // Cambia el texto según el modo actual
    if (document.body.classList.contains('dark-mode')) {
        modeText.textContent = 'Modo Oscuro'; // Texto en modo oscuro
        localStorage.setItem('dark-mode', 'enabled'); // Guarda la preferencia en localStorage
    } else {
        modeText.textContent = 'Modo Claro'; // Texto en modo claro
        localStorage.setItem('dark-mode', 'disabled'); // Guarda la preferencia en localStorage
    }
});