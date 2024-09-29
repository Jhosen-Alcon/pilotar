let score = 0;
let moves = 0;
let timeLeft = 30;
const scoreDisplay = document.getElementById('score');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
const cards = document.querySelectorAll('.memory-card');
const feedback = document.getElementById('feedback');
const dialogo = document.getElementById('dialogo');

let gameStarted = false; // Variable para controlar el inicio del juego

// Función para mostrar el nombre del jugador
function mostrarNombre() {
    const nombreElemento = document.getElementById('nombreJugadorDisplay');
    const nombreJugador = localStorage.getItem('nombreJugador');
    nombreElemento.textContent = `Jugador: ${nombreJugador}`;
}

// Función para mostrar los puntos acumulados
function mostrarPuntosAcumulados() {
    const puntosElemento = document.getElementById('puntosAcumuladosDisplay');
    puntosElemento.textContent = `Puntos Acumulados: ${localStorage.getItem('puntos') || 0}`;
}

// Función para mostrar el grado del jugador
function mostrarGrado() {
    const grados = ['Civil', 'Aprendiz', 'Novato', 'Intermedio', 'Avanzado', 'Experto', 'Maestro', 'Aviador', 'Capitán', 'Comandante', 'Piloto'];
    const gradoIndex = parseInt(localStorage.getItem('grado')) || 0;
    const gradoElemento = document.getElementById('gradoJugadorDisplay');
    gradoElemento.textContent = `Grado: ${grados[gradoIndex]}`;
}

// Iniciar el temporizador
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

// Comenzar el juego: mostrar las cartas brevemente y luego voltearlas
function startGame() {
    gameStarted = true; // Activar el estado de inicio del juego
    dialogo.style.display = 'none';
    setTimeout(() => {
        cards.forEach(card => card.classList.add('flipped'));
        setTimeout(() => {
            cards.forEach(card => card.classList.remove('flipped'));
            startTimer();
        }, 3000); // Mostrar las imágenes durante 3 segundos
    }, 500); // Esperar medio segundo antes de mostrar las imágenes
}

// Verificar la respuesta del jugador
function checkAnswer(card) {
    if (!gameStarted || card.classList.contains('flipped')) return; // Evitar interacción si el juego no ha empezado o la carta ya está volteada
    
    moves++;
    movesDisplay.textContent = moves;
    card.classList.add('flipped'); // Mostrar la carta seleccionada
    const cardName = card.getAttribute('data-name');
    
    if (cardName === 'correct') {
        feedback.textContent = '¡Correcto! Has encontrado la respuesta correcta.';
        feedback.style.color = 'green';
        score += 5;
        scoreDisplay.textContent = score;

        // Acumular los puntos en localStorage
        let puntosAcumulados = parseInt(localStorage.getItem('puntos')) || 0;
        puntosAcumulados += score;
        localStorage.setItem('puntos', puntosAcumulados);
        setTimeout(() => {
            advanceToNextLevel();
        }, 1000); // Reducido el tiempo de espera a 1 segundo antes de avanzar
    } else {
        feedback.textContent = 'Respuesta incorrecta. Se te resta un punto.';
        feedback.style.color = 'red';
        score = Math.max(0, score - 1); // Restar 1 punto, asegurando que no sea menor que 0
        scoreDisplay.textContent = score; // Actualizar la visualización del puntaje
        setTimeout(() => {
            card.classList.remove('flipped'); // Volver a voltear la carta incorrecta
        }, 1000);
    }
}

// Finalizar el juego si se acaba el tiempo
function endGame(message) {
    feedback.textContent = message;
    cards.forEach(card => card.removeEventListener('click', handleCardClick));
    setTimeout(() => {
        advanceToNextLevel(); // Pasar al siguiente nivel después de 2 segundos
    }, 2000);
}

// Manejar el clic en las cartas
function handleCardClick(event) {
    checkAnswer(event.currentTarget);
}

// Avanzar al siguiente nivel
function advanceToNextLevel() {
    // Incrementar el grado del jugador
    let gradoIndex = parseInt(localStorage.getItem('grado')) || 0;
    gradoIndex = Math.min(gradoIndex + 1, 10); // Máximo grado: "Piloto"
    localStorage.setItem('grado', gradoIndex);

    // Redirigir al siguiente nivel
    window.location.href = 'nivel52.html'; // Cambia esto por el archivo HTML del siguiente nivel
}

// Inicializar el juego al cargar el nivel
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
