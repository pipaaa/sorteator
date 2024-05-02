function validarEvento() {
    const eventoInput = document.getElementById('eventoInput').value;
    if (eventoInput.trim() === '') {
        alert('Por favor, introduzca el nombre del evento.');
    } else {
        // Redirigir a la siguiente pantalla (modalidades)
        window.location.href = 'modalidades.html?evento=' + encodeURIComponent(eventoInput);
    }
}
