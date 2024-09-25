let score = 0;
let moves = 0;
let timeLeft = 30;
const scoreDisplay = document.getElementById('score');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
const cards = document.querySelectorAll('.memory-card');
const feedback = document.getElementById('feedback');
const dialogo = document.getElementById('dialogo');

let gameStarted = false; // Nuevo: Variable para controlar el inicio del juego

// Mostrar el nombre del jugador, puntos acumulados y grado
function mostrarNombre() {
    const nombreElemento = document.getElementById('nombreJugadorDisplay');
    const nombreJugador = localStorage.getItem('nombreJugador');
    nombreElemento.textContent = `Jugador: ${nombreJugador}`;
}

function mostrarPuntosAcumulados() {
    const puntosElemento = document.getElementById('puntosAcumuladosDisplay');
    puntosElemento.textContent = `Puntos Acumulados: ${localStorage.getItem('puntos') || 0}`;
}

function mostrarGrado() {
    const grados = ['Civil', 'Aprendiz', 'Novato', 'Intermedio', 'Avanzado', 'Experto', 'Maestro', 'Aviador', 'Capitán', 'Comandante', 'Piloto'];
    const gradoIndex = parseInt(localStorage.getItem('grado')) || 0;
    const gradoElemento = document.getElementById('gradoJugadorDisplay');
    gradoElemento.textContent = `Grado: ${grados[gradoIndex]}`;
}

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endGame('¡Se acabó el tiempo!');
        }
    }, 1000);
}

function startGame() {
    gameStarted = true; // Nuevo: Activar el estado de inicio del juego
    dialogo.style.display = 'none';
    setTimeout(() => {
        cards.forEach(card => card.classList.add('flipped'));
        setTimeout(() => {
            cards.forEach(card => card.classList.remove('flipped'));
            startTimer();
        }, 2000); // Mostrar las imágenes durante 2 segundos
    }, 500); // Esperar medio segundo antes de mostrar las imágenes
}

function checkAnswer(card) {
    if (!gameStarted) return; // Nuevo: Evitar interacción si el juego no ha empezado
    moves++;
    movesDisplay.textContent = moves;
    card.classList.add('flipped'); // Mostrar la carta seleccionada
    const cardName = card.getAttribute('data-name');
    if (cardName === 'estabilizador') {
        feedback.textContent = '¡Correcto! Has encontrado el estabilizador vertical.';
        feedback.style.color = 'green';
        score++;
        scoreDisplay.textContent = score;
        // Acumular los puntos en localStorage
        let puntosAcumulados = parseInt(localStorage.getItem('puntos')) || 0;
        puntosAcumulados += score;
        localStorage.setItem('puntos', puntosAcumulados);
        setTimeout(() => {
            advanceToNextLevel();
        }, 2000);
    } else {
        feedback.textContent = 'Intenta de nuevo.';
        feedback.style.color = 'red';
        setTimeout(() => {
            card.classList.remove('flipped'); // Volver a voltear la carta incorrecta
        }, 1000);
    }
}

function endGame(message) {
    feedback.textContent = message;
    cards.forEach(card => card.removeEventListener('click', handleCardClick));
}

function handleCardClick(event) {
    checkAnswer(event.currentTarget);
}

function advanceToNextLevel() {
    // Incrementar el grado del jugador
    let gradoIndex = parseInt(localStorage.getItem('grado')) || 0;
    gradoIndex = Math.min(gradoIndex + 1, 10); // Máximo grado: "Piloto"
    localStorage.setItem('grado', gradoIndex);

    // Redirigir al siguiente nivel
    window.location.href = 'nivel2.html'; // Ejemplo: redirigir al siguiente nivel
}

// Llamar funciones para mostrar nombre, puntos acumulados y grado al cargar el nivel
window.onload = function() {
    mostrarNombre();
    mostrarPuntosAcumulados();
    mostrarGrado();
};

// Añadir event listeners a las cartas y al diálogo del Capitán Viento
cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

dialogo.addEventListener('click', startGame);
