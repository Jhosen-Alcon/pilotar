const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables para el avión y la coordinación
let planeX = canvas.width / 2;
let planeY = canvas.height / 2;
let planeAngle = 0;
let planeSpeed = 2; // Velocidad constante para empezar
let rudderAngle = 0; // Ángulo del timón

// Dimensiones del área de juego
const gameArea = { x: 100, y: 100, width: 600, height: 400 };

// Cargar la imagen del avión
const planeImage = new Image();
planeImage.src = 'avion.png'; // Asegúrate de que la imagen esté en la ruta correcta

// Cargar la imagen del Capitán Viento
const capitanVientoImage = new Image();
capitanVientoImage.src = 'capitan_viento.png'; // Asegúrate de que la imagen esté en la ruta correcta

capitanVientoImage.onload = function() {
    console.log('La imagen del Capitán Viento se ha cargado correctamente.');
};

capitanVientoImage.onerror = function() {
    console.log('Error al cargar la imagen del Capitán Viento.');
};

// Dibujar el área de juego
function drawGameArea() {
    ctx.strokeStyle = '#FFD700'; // Color del borde
    ctx.lineWidth = 5;
    ctx.strokeRect(gameArea.x, gameArea.y, gameArea.width, gameArea.height); // Marco del área de juego
}

// Dibujar el avión dentro del área de juego
function drawPlane() {
    ctx.save();
    ctx.translate(planeX, planeY);
    ctx.rotate(planeAngle);
    ctx.drawImage(planeImage, -25, -15, 50, 30); // Dibujar la imagen del avión
    ctx.restore();
}

// Dibujar al Capitán Viento en la parte superior derecha
function drawCapitanViento() {
    ctx.drawImage(capitanVientoImage, canvas.width - 200, 20, 150, 150); // Ajustar la posición y tamaño del Capitán Viento
}

// Mostrar instrucciones
function showInstructions() {
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText('¡Hola, soy el Capitán Viento!', 120, 50);
    ctx.fillText('Usa las flechas izquierda y derecha o toca la pantalla para girar.', 120, 80);
    ctx.fillText('Tu objetivo es volar a través de los anillos.', 120, 110);
    drawCapitanViento(); // Mostrar la imagen del Capitán Viento junto con las instrucciones
}

// Anillos flotantes dentro del área de juego
const rings = [
    { x: gameArea.x + 150, y: gameArea.y + 150 },
    { x: gameArea.x + 450, y: gameArea.y + 100 },
    { x: gameArea.x + 300, y: gameArea.y + 300 }
];

function drawRings() {
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 5;
    rings.forEach(ring => {
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, 30, 0, Math.PI * 2);
        ctx.stroke();
    });
}

function checkCollision() {
    rings.forEach((ring, index) => {
        const dist = Math.hypot(planeX - ring.x, planeY - ring.y);
        if (dist < 30) {
            rings.splice(index, 1); // Eliminar anillo cuando el avión pasa a través
        }
    });
}

// Evento de teclado para controlar el timón
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        rudderAngle = -1; // Girar a la izquierda
    } else if (event.key === 'ArrowRight') {
        rudderAngle = 1; // Girar a la derecha
    }
});

document.addEventListener('keyup', () => {
    rudderAngle = 0; // Volver a neutral
});

// Eventos táctiles para dispositivos móviles
canvas.addEventListener('touchstart', (event) => {
    const touchX = event.touches[0].clientX;

    if (touchX < canvas.width / 2) {
        rudderAngle = -1; // Girar a la izquierda si tocan el lado izquierdo de la pantalla
    } else {
        rudderAngle = 1; // Girar a la derecha si tocan el lado derecho de la pantalla
    }
});

canvas.addEventListener('touchend', () => {
    rudderAngle = 0; // Volver a neutral cuando se suelta la pantalla
});

// Función principal de animación
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGameArea(); // Dibujar el área de juego
    updatePlane();
    drawPlane();
    drawRings();
    checkCollision();
    drawCapitanViento(); // Dibujar al Capitán Viento como guía
    requestAnimationFrame(animate);
}

// Iniciar el juego después de mostrar las instrucciones
function startGame() {
    animate();
}

// Mostrar las instrucciones antes de comenzar el juego
planeImage.onload = function() {
    showInstructions();
    setTimeout(startGame, 3000); // Mostrar las instrucciones durante 3 segundos antes de comenzar el juego
};
