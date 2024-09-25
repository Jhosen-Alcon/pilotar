document.getElementById('start-game').addEventListener('click', function() {
    guardarNombre(); // Llamar a la función para guardar el nombre del jugador y redirigir al primer nivel
});

document.getElementById('instructions').addEventListener('click', function() {
    alert('Aquí van las instrucciones del juego...'); // Aquí puedes mostrar las instrucciones o redirigir a una página con instrucciones
});

function guardarNombre() {
    const nombre = document.getElementById('nombreJugador').value;
    if (nombre) {
        localStorage.setItem('nombreJugador', nombre);
        window.location.href = 'index3.html'; // Redirige al primer nivel
    } else {
        alert('Por favor, ingresa tu nombre para empezar el juego.');
    }
}
