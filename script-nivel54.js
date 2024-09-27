let score = 0;
let moves = 0;
let timeLeft = 30;
const scoreDisplay = document.getElementById('score');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
const cards = document.querySelectorAll('.memory-card');
const feedback = document.getElementById('feedback');
let correctCards = 0; // Para contar las respuestas correctas seleccionadas
let gameStarted = false; // Variable para controlar el inicio del juego
const currentLevel = 14; // Cambia este número al número del nivel actual

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

// Función para comprobar el nivel más alto alcanzado
function verificarNivelAlcanzado() {
    const nivelAlcanzado = parseInt(localStorage.getItem('nivelAlcanzado')) || 0;
    if (currentLevel < nivelAlcanzado) {
        // Redirigir al último nivel alcanzado
        window.location.href = `nivel${nivelAlcanzado}.html`;
    } else {
        // Actualizar el nivel más alto alcanzado
        localStorage.setItem('nivelAlcanzado', currentLevel);
    }
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
    cards.forEach(card => card.classList.add('flipped')); // Voltear todas las cartas
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped')); // Volver a voltear las cartas después de 2 segundos
        startTimer(); // Iniciar el temporizador después de mostrar las cartas
    }, 2000); // Mostrar las imágenes durante 2 segundos
}

// Verificar la respuesta del jugador
function checkAnswer(card) {
    if (!gameStarted || card.classList.contains('flipped')) return; // Evitar interacción si el juego no ha empezado o la carta ya está volteada
    
    moves++;
    movesDisplay.textContent = moves;
    card.classList.add('flipped'); // Voltear la carta seleccionada
    const cardName = card.getAttribute('data-name');
    
    if (cardName === 'correct') {
        correctCards++;
        feedback.textContent = `¡Correcto! Has encontrado ${correctCards} de 10 respuestas correctas.`;
        feedback.style.color = 'green';
        score += 5;  // Incremento de puntos en 5 por cada respuesta correcta
    } else {
        feedback.textContent = 'Intenta de nuevo.';
        feedback.style.color = 'red';
        score -= 1;  // Penalización de 1 punto por respuesta incorrecta
        score = Math.max(0, score); // Asegurarse de que el puntaje no sea negativo
        setTimeout(() => {
            card.classList.remove('flipped'); // Volver a voltear la carta incorrecta
        }, 1000);
    }
    
    scoreDisplay.textContent = score;

    if (correctCards === 10) { // Si se seleccionaron las diez respuestas correctas
        // Acumular los puntos en localStorage
        let puntosAcumulados = parseInt(localStorage.getItem('puntos')) || 0;
        puntosAcumulados += score;
        localStorage.setItem('puntos', puntosAcumulados);
        setTimeout(() => {
            advanceToNextLevel();
        }, 1000); // Reducido el tiempo de espera a 1 segundo antes de avanzar
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
    // Incrementar el grado del jugador
    let gradoIndex = parseInt(localStorage.getItem('grado')) || 0;
    gradoIndex = Math.min(gradoIndex + 1, 10); // Máximo grado: "Piloto"
    localStorage.setItem('grado', gradoIndex);

    // Redirigir al siguiente nivel
    window.location.href = `final.html`; // Cambia esto por el archivo HTML del siguiente nivel
}

// Inicializar el juego al cargar el nivel
window.onload = function() {
    verificarNivelAlcanzado(); // Verificar si el nivel actual es el más alto alcanzado
    mostrarNombre();
    mostrarPuntosAcumulados();
    mostrarGrado();
    cards.forEach(card => card.addEventListener('click', handleCardClick)); // Preparar las cartas para ser seleccionadas
    startGame(); // Iniciar el juego automáticamente y voltear las cartas al inicio
};
