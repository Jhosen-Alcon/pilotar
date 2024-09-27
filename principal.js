// Función para reiniciar el progreso del juego
function reiniciarProgreso() {
    localStorage.removeItem('nombreJugador');
    localStorage.removeItem('puntos');
    localStorage.removeItem('grado');
    localStorage.removeItem('nivelAlcanzado');
}

// Llamar esta función al cargar el nivel 1
function iniciarNuevoJuego() {
    reiniciarProgreso();
}

// Asignar eventos y lógica al cargar el primer nivel
window.onload = function() {
    if (window.location.pathname.includes('index3.html')) { // Cambia esto si tu archivo principal tiene otro nombre
        iniciarNuevoJuego();
    }
    // Aquí sigue el resto de la lógica general del juego
};

document.getElementById('start-game').addEventListener('click', function() {
    iniciarNuevoJuego(); // Reiniciar el progreso antes de iniciar el juego
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

// Función para mostrar el nombre del jugador
function mostrarNombre() {
    const nombreElemento = document.getElementById('nombreJugadorDisplay');
    const nombreJugador = localStorage.getItem('nombreJugador');
    if (nombreElemento && nombreJugador) {
        nombreElemento.textContent = `Jugador: ${nombreJugador}`;
    }
}

// Función para mostrar los puntos acumulados
function mostrarPuntosAcumulados() {
    const puntosElemento = document.getElementById('puntosAcumuladosDisplay');
    const puntos = localStorage.getItem('puntos') || 0;
    if (puntosElemento) {
        puntosElemento.textContent = `Puntos Acumulados: ${puntos}`;
    }
}

// Función para mostrar el grado del jugador
function mostrarGrado() {
    const grados = ['Civil', 'Aprendiz', 'Novato', 'Intermedio', 'Avanzado', 'Experto', 'Maestro', 'Aviador', 'Capitán', 'Comandante', 'Piloto'];
    const gradoIndex = parseInt(localStorage.getItem('grado')) || 0;
    const gradoElemento = document.getElementById('gradoJugadorDisplay');
    if (gradoElemento) {
        gradoElemento.textContent = `Grado: ${grados[gradoIndex]}`;
    }
}

// Mostrar información del jugador en la página final
function mostrarInformacionFinal() {
    const nombreJugador = localStorage.getItem('nombreJugador');
    const puntosAcumulados = localStorage.getItem('puntos') || 0;
    const grados = ['Civil', 'Aprendiz', 'Novato', 'Intermedio', 'Avanzado', 'Experto', 'Maestro', 'Aviador', 'Capitán', 'Comandante', 'Piloto'];
    const gradoIndex = parseInt(localStorage.getItem('grado')) || 0;

    document.getElementById('nombreJugadorDisplay').textContent = nombreJugador;
    document.getElementById('puntosAcumuladosDisplay').textContent = puntosAcumulados;
    document.getElementById('gradoJugadorDisplay').textContent = grados[gradoIndex];
}

document.getElementById('restart-game').addEventListener('click', function() {
    reiniciarProgreso(); // Reiniciar el progreso del juego
    window.location.href = 'index3.html'; // Redirigir al primer nivel o pantalla inicial
});

document.getElementById('start-again').addEventListener('click', function() {
    reiniciarProgreso(); // Reiniciar el progreso del juego
    window.location.href = 'index3.html'; // Redirigir al primer nivel o pantalla inicial
});

// Ejecutar mostrarInformacionFinal si estamos en la página final
if (window.location.pathname.includes('final.html')) {
    mostrarInformacionFinal();
}

// El resto del código para manejar el juego permanece igual
