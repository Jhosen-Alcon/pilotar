const texts = [
    {
        text: "¡Muy bien, Piloto en Entrenamiento! Ahora que ya sabes cómo mantener la altitud, es hora de asegurarte de que tu avión sigue la dirección correcta. Seguir la dirección de vuelo significa mantener el avión en el rumbo deseado, sin desviarte. Es como caminar en línea recta hacia un objetivo: necesitas mantenerte enfocado para no perder el rumbo.",
    },
    {
        text: "Referencias Visuales: Si estás volando en condiciones claras, usa el horizonte o puntos de referencia en la tierra para asegurarte de que sigues una línea recta. Esto es como seguir una carretera recta cuando conduces.",
        image: "vhorizonte.png",
    },
    {
        text: "Velocidades y Desviaciones: A diferentes velocidades, el avión puede comportarse de maneras distintas. A velocidad de crucero, será más fácil mantener el rumbo sin mucho esfuerzo. Pero a velocidades bajas o altas, puede ser necesario ajustar el timón más frecuentemente para mantener la dirección correcta.",
        image: "velocidadcrucero.png"
    }
];

let currentStep = 0;

document.getElementById('siguiente').addEventListener('click', () => {
    currentStep++;
    if (currentStep < texts.length) {
        document.getElementById('mensaje-capitan').innerHTML = texts[currentStep].text;
        document.getElementById('imagen-referencia').src = texts[currentStep].image;
    } else {
        // Redirigir al usuario a otro HTML
        window.location.href = 'nivel49.html'; // Cambia 'tu_archivo.html' por el nombre del HTML al que quieras redirigir
    }
});

