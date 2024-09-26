const texts = [
    {
        text: "¡Excelente trabajo hasta ahora, Piloto en Entrenamiento! El siguiente paso es aprender a tomar referencias para asegurarte de que tu avión sigue en la dirección correcta.",
    },
    {
        text: "Referencias Visuales en el Terreno: Si puedes ver el suelo desde el avión, busca puntos de referencia como montañas, ríos, o carreteras. Estos te ayudarán a saber que estás en el rumbo correcto. Es como tener un mapa en la mente mientras vuelas.",
        image: "referenciaa1.png",
    },
    {
        text: "Referencias en el Horizonte: Cuando vuelas a una altura donde el terreno no es visible, el horizonte se convierte en tu mejor amigo. Asegúrate de que el avión está alineado con el horizonte para mantener una trayectoria recta.",
        image: "referenciaa2.png"
    },
    {
        text: "Instrumentos de Vuelo: Cuando no puedes confiar en tus ojos, como en la oscuridad o entre nubes, los instrumentos de vuelo se vuelven cruciales. Usa la brújula, el altímetro y otros indicadores para tomar referencias sobre tu posición y dirección.",
        image: "referenciaa3.png"
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
        window.location.href = 'nivel50.html'; // Cambia 'tu_archivo.html' por el nombre del HTML al que quieras redirigir
    }
});

