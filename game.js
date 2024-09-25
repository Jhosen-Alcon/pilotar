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

function drawPlane() {
    ctx.save();
    ctx.translate(planeX, planeY);
    ctx.rotate(planeAngle);
    ctx.fillStyle = '#4682B4';
    ctx.fillRect(-25, -10, 50, 20); // Representación simple del avión
    ctx.restore();
}

function updatePlane() {
    // Ajustar el ángulo del avión según el timón de dirección
    planeAngle += rudderAngle * 0.05;

    // Mover el avión en la dirección actual
    planeX += Math.cos(planeAngle) * planeSpeed;
    planeY += Math.sin(planeAngle) * planeSpeed;

    // Mantener el avión dentro de los límites de la pantalla
    if (planeX < 0) planeX = canvas.width;
    if (planeX > canvas.width) planeX = 0;
    if (planeY < 0) planeY = canvas.height;
    if (planeY > canvas.height) planeY = 0;
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

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlane();
    drawPlane();
    requestAnimationFrame(animate);
}

// Iniciar animación
animate();
