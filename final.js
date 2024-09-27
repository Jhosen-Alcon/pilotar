document.addEventListener('DOMContentLoaded', function() {
    mostrarInformacionFinal(); // Mostrar la información del jugador cuando la página final cargue

    document.getElementById('restart-game').addEventListener('click', function() {
        reiniciarProgreso(); // Reiniciar el progreso del juego
        window.location.href = 'index3.html'; // Redirigir al primer nivel o pantalla inicial
    });

    document.getElementById('start-again').addEventListener('click', function() {
        reiniciarProgreso(); // Reiniciar el progreso del juego
        window.location.href = 'index3.html'; // Redirigir al primer nivel o pantalla inicial
    });
});
