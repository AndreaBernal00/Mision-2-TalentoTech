document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const alertBox = document.getElementById('form-alert');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario si hay errores

        // Validar campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value.trim();
        const interests = document.getElementById('interests').value.trim();
        const favoriteHobby = document.getElementById('favorite-hobby').value;
        const activityPreference = document.querySelector('input[name="activity-preference"]:checked');

        if (!name || !email || !age || !interests || !favoriteHobby || !activityPreference) {
            alertBox.style.display = 'block';
            alertBox.innerText = 'Por favor, completa todos los campos obligatorios.';
        } else {
            alertBox.style.display = 'none';
            submitBtn.classList.add('success'); // Cambia el botón a color verde
            submitBtn.innerText = '¡Enviado!';

            // Puedes agregar aquí el código para enviar los datos a un servidor, si lo necesitas
            setTimeout(function() {
                form.submit(); // Simula el envío después de 1 segundo
            }, 1000);
        }
    });
});
