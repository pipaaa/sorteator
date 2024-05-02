function validarEvento() {
    const eventoInput = document.getElementById('eventoInput').value;
    if (eventoInput.trim() === '') {
        alert('Por favor, introduzca el nombre del evento.');
    } else {
        // Redirigir a la siguiente pantalla (modalidades)
        window.location.href = 'modalidades.html?evento=' + encodeURIComponent(eventoInput);
    }
}
function seleccionarModalidad(modalidad) {
    // Redirigir a la siguiente pantalla (selección de equipos)
    window.location.href = 'seleccion-equipos.html?modalidad=' + encodeURIComponent(modalidad);
}
function seleccionarModalidad(modalidad) {
    // Redirigir a la siguiente pantalla (selección de equipos)
    window.location.href = 'seleccion-equipos.html?modalidad=' + encodeURIComponent(modalidad);
}
