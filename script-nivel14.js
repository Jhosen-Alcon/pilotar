const texts = [
    {
        text: "¡Hola de nuevo, Piloto en Entrenamiento! Ahora que has aprendido los aspectos clave del vuelo recto y nivelado, hablemos de algunas generalidades que te ayudarán a perfeccionar tus habilidades en el aire.",
    },
    {
        text: "Control Constante: Siempre debes estar al tanto de cómo se comporta el avión. Esto significa monitorear constantemente los instrumentos y hacer pequeños ajustes en la potencia, el timón, y los controles de vuelo para asegurarte de que todo se mantiene estable.",
        image: "suavidad3.png",
    },
    {
        text: "Anticipación: Los buenos pilotos no solo reaccionan a lo que sucede, sino que anticipan lo que puede pasar. Por ejemplo, si ves que te acercas a una zona con viento, prepárate para ajustar los controles y mantener el vuelo recto.",
        image: "suavidad2.png"
    },
    {
        text: "Confianza en los Instrumentos: En situaciones donde la visibilidad es baja o durante vuelos nocturnos, confía en tus instrumentos. Estos son tus ojos cuando no puedes ver el horizonte o el terreno, y te ayudarán a mantener el control del avión.",
        image: "suavidad1.png"
    },
    {
        text: "Suavidad en los Controles: Recuerda, volar un avión no es cuestión de movimientos bruscos. Todos los ajustes deben ser suaves y graduales. Esto no solo mantiene el vuelo estable, sino que también hace que volar sea más cómodo para ti y para cualquier pasajero que pueda estar a bordo.",
        image: "suavidad.png"
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
        window.location.href = 'nivel54.html'; // Cambia 'tu_archivo.html' por el nombre del HTML al que quieras redirigir
    }
});

