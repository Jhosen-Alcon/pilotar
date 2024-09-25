const texts = [
    {
        text: "¡Hola! Soy el Capitán Viento. Para mantener un vuelo coordinado, la bola en el indicador de giro debe estar centrada. te explicaré algunas cosas antes de empezar caundo la vola del indicador se moviera"
    },
    {
        text: "El derrape ocurre cuando el avión no está alineado con la dirección del vuelo. Ahi se debe ajustar el timón para evitarlo.",
        image: "prueba2.png"
    },
    {
        text: "El resbale se produce cuando hay demasiado timón sin suficiente inclinación. Ahí se debe ajustar la inclinación para corregirlo.",
        image: "prueba3.png"
    },
    {
        text: "Vuelo recto y nivelado es cuando el avión vuela sin desviarse ni inclinarse, manteniendo la bola centrada en el indicador.",
        image: "prueba4.png"
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
        window.location.href = 'nivel41.html'; // Cambia 'tu_archivo.html' por el nombre del HTML al que quieras redirigir
    }
});

