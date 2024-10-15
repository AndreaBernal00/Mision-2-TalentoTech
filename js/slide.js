let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Muestra la diapositiva actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Oculta todas las imágenes
        if (i === index) {
            slide.classList.add('active'); // Muestra la imagen activa
        }
    });
}

// Cambia a la siguiente diapositiva
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Cambia al siguiente índice
    showSlide(currentSlide); // Muestra la imagen correspondiente
}

// Cambia a la diapositiva anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Cambia al índice anterior
    showSlide(currentSlide); // Muestra la imagen correspondiente
}

// Cambia la imagen cada 3 segundos (3000 milisegundos)
const slideInterval = setInterval(nextSlide, 5000);

// Muestra la primera imagen al cargar
showSlide(currentSlide);

// Eventos para los botones
document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval); // Detener el intervalo al hacer clic en el botón
});

document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    clearInterval(slideInterval); // Detener el intervalo al hacer clic en el botón
});
