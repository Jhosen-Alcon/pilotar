let score = 0;
let moves = 0;
let timeLeft = 30;
let correctPairs = 0;

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

// Comenzar el juego
function startGame() {
    dialogo.style.display = 'none';
    setTimeout(() => {
        cards.forEach(card => card.classList.add('flipped'));
        setTimeout(() => {
            cards.forEach(card => card.classList.remove('flipped'));
            startTimer();
        }, 2000);
    }, 500);
}

let firstCard, secondCard;
let hasFlippedCard = false;

// Verificar la respuesta del jugador
function checkAnswer() {
    const firstCardName = firstCard.getAttribute('data-name');
    const secondCardName = secondCard.getAttribute('data-name');

    if ((firstCardName === 'bola-centrada' && secondCardName === 'accion-centrada') ||
        (firstCardName === 'bola-izquierda' && secondCardName === 'accion-izquierda') ||
        (firstCardName === 'bola-derecha' && secondCardName === 'accion-derecha')) {
        
        correctPairs++;
        feedback.textContent = `¡Correcto! Has emparejado ${firstCardName} con la acción adecuada.`;
        feedback.style.color = 'green';

        if (correctPairs === 3) {
            setTimeout(() => {
                advanceToNextLevel();
            }, 2000);
        }
    } else {
        feedback.textContent = 'Intenta de nuevo.';
        feedback.style.color = 'red';
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
        }, 1000);
    }
    resetBoard();
}

function resetBoard() {
    [hasFlippedCard, firstCard, secondCard] = [false, null, null];
}

// Manejar el clic en las cartas
function handleCardClick(event) {
    const clickedCard = event.currentTarget;
    if (!hasFlippedCard) {
        firstCard = clickedCard;
        firstCard.classList.add('flipped');
        hasFlippedCard = true;
    } else {
        secondCard = clickedCard;
        secondCard.classList.add('flipped');
        moves++;
        movesDisplay.textContent = moves;
        checkAnswer();
    }
}

// Finalizar el juego si se acaba el tiempo
function endGame(message) {
    feedback.textContent = message;
    cards.forEach(card => card.removeEventListener('click', handleCardClick));
}

// Avanzar al siguiente nivel
function advanceToNextLevel() {
    window.location.href = 'nivel7.html';
}

// Añadir event listeners a las cartas y al diálogo del Capitán Viento
cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

dialogo.addEventListener('click', startGame);
