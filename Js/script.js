// Scroll suave (solo si usas anclas)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Mensaje simple al hacer clic en botón
const boton = document.querySelector('.btn');

if (boton) {
    boton.addEventListener('click', () => {
        alert('Explorando más sobre el proyecto? ');
    });
}