const texts = [
    {
        text: "¡Hola de nuevo, Piloto en Entrenamiento! Ahora que dominas el vuelo recto y nivelado, y ver puntos de referencia es hora de aprender cómo cambiar de velocidad sin perder el control del avión. Cambiar de velocidad en el aire es un poco como cambiar de marcha en un coche: debes hacerlo suavemente para mantener el control y asegurarte de que el avión sigue volando de manera estable.",
    },
    {
        text: "Reduciendo la Velocidad: Si necesitas volar más despacio, como cuando te acercas a un aeropuerto para aterrizar, deberás reducir la potencia del motor. Hazlo poco a poco y mantén el avión nivelado para evitar que descienda demasiado rápido. Recuerda, al reducir la velocidad, el avión se vuelve más sensible a las ráfagas de viento, así que mantente alerta.",
        image: "cambiovelocidad2.png",
    },
    {
        text: "Aumentando la Velocidad: Cuando necesites acelerar, aumenta la potencia del motor gradualmente. Asegúrate de que el avión no suba demasiado rápido al ganar velocidad. Controla los instrumentos para asegurarte de que la altitud y la dirección se mantienen estables mientras aceleras.",
        image: "cambiovelocidad1.png"
    },
    {
        text: "Estabilidad al Cambiar de Velocidad: Cada vez que cambias de velocidad, el avión puede reaccionar de manera diferente. Por eso es importante hacer los cambios de manera suave y controlada, y estar listo para ajustar la altitud o la dirección si es necesario.",
        image: "cambiovelocidad3.png"
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
        window.location.href = 'nivel53.html'; // Cambia 'tu_archivo.html' por el nombre del HTML al que quieras redirigir
    }
});

