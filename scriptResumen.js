// Función para mostrar el nombre del jugador
function mostrarNombre() {
    const nombreElemento = document.getElementById('nombreJugadorDisplay');
    const nombreJugador = localStorage.getItem('nombreJugador') || "Jugador Desconocido";
    nombreElemento.textContent = `Jugador: ${nombreJugador}`;
}

// Función para mostrar los puntos acumulados
function mostrarPuntosAcumulados() {
    const puntosElemento = document.getElementById('puntosAcumuladosDisplay');
    const puntosAcumulados = localStorage.getItem('puntos') || 0;
    puntosElemento.textContent = `Puntos Acumulados: ${puntosAcumulados}`;
}

// Función para mostrar el grado alcanzado
function mostrarGrado() {
    const grados = ['Civil', 'Aprendiz', 'Novato', 'Intermedio', 'Avanzado', 'Experto', 'Maestro', 'Aviador', 'Capitán', 'Comandante', 'Piloto'];
    const gradoIndex = parseInt(localStorage.getItem('grado')) || 0;
    const gradoElemento = document.getElementById('gradoJugadorDisplay');
    gradoElemento.textContent = `Grado: ${grados[gradoIndex]}`;
}

// Función para manejar el botón "Jugar de Nuevo"
function reiniciarJuego() {
    localStorage.clear(); // Limpia el localStorage para reiniciar el progreso
    window.location.href = 'index3.html'; // Redirige al primer nivel o pantalla inicial
}

// Función para manejar el botón "Siguiente"
function irAlSiguiente() {
    window.location.href = 'JUEGO/index.html'; // Redirige a la página que desees
}

// Inicializar la pantalla de resumen al cargar
window.onload = function() {
    mostrarNombre();
    mostrarPuntosAcumulados();
    mostrarGrado();

    // Asignar evento al botón "Jugar de Nuevo"
    document.getElementById('restart-game').addEventListener('click', reiniciarJuego);
    
    // Asignar evento al botón "Siguiente"
    document.getElementById('btnSiguiente').addEventListener('click', irAlSiguiente);
};
