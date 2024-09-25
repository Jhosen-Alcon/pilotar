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
        }, 2000); // Mostrar las imágenes durante 2 segundos
    }, 500); // Esperar medio segundo antes de mostrar las imágenes
}

// Verificar la respuesta del jugador
function checkAnswer(card) {
    if (!gameStarted) return; // Evitar interacción si el juego no ha empezado
    moves++;
    movesDisplay.textContent = moves;
    card.classList.add('flipped'); // Mostrar la carta seleccionada
    const cardName = card.getAttribute('data-name');
    if (cardName === 'timon') {
        feedback.textContent = '¡Correcto! Has encontrado el timón de dirección.';
        feedback.style.color = 'green';
        score++;
        scoreDisplay.textContent = score;
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

// Finalizar el juego si se acaba el tiempo
function endGame(message) {
    feedback.textContent = message;
    cards.forEach(card => card.removeEventListener('click', handleCardClick));
}

// Manejar el clic en las cartas
function handleCardClick(event) {
    checkAnswer(event.currentTarget);
}

// Avanzar al siguiente nivel
function advanceToNextLevel() {
    // Aquí iría la lógica para avanzar al siguiente nivel
    window.location.href = 'nivel3.html'; // Ejemplo: redirigir al siguiente nivel
}

// Añadir event listeners a las cartas y al diálogo del Capitán Viento
cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

dialogo.addEventListener('click', startGame);
