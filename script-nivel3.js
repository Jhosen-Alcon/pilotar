let score = 0;
let moves = 0;
let timeLeft = 30;
let correctChoices = 0; // Contador de respuestas correctas

const scoreDisplay = document.getElementById('score');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
const cards = document.querySelectorAll('.memory-card');
const feedback = document.getElementById('feedback');
const dialogo = document.getElementById('dialogo');

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
    moves++;
    movesDisplay.textContent = moves;
    card.classList.add('flipped'); // Mostrar la carta seleccionada
    const cardName = card.getAttribute('data-name');
    
    const correctAnswers = ['viento', 'timon', 'giro']; // Respuestas correctas

    if (correctAnswers.includes(cardName)) {
        correctChoices++;
        score += 5;
        scoreDisplay.textContent = score;
        feedback.textContent = `¡Correcto! ${cardName} puede causar un derrape.`;
        feedback.style.color = 'green';

        if (correctChoices === 3) { // Revisar si ha seleccionado las tres respuestas correctas
            setTimeout(() => {
                advanceToNextLevel();
            }, 2000);
        }

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
    window.location.href = 'nivel4.html'; // Redirigir al siguiente nivel
}

// Añadir event listeners a las cartas y al diálogo del Capitán Viento
cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

dialogo.addEventListener('click', startGame);
