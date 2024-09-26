const texts = [
    {
        text: "¡Hola! Soy el Capitán Viento. Sabías que para mantener el avión en la dirección correcta o conocido como recto y nivelado se mantiene una altitud constante, para mantener la altitud del avión, la clave está en el control de la potencia. Déjame explicarte cómo funciona esto en diferentes situaciones:",
    },
    {
        text: "Baja Velocidad: Si estás volando despacio, el avión tiende a perder altura. Aquí, necesitas darle un poco más de potencia para mantenerte en el mismo nivel y evitar que el avión baje, eso quiere decir que A bajas velocidades, el avión puede ser un poco inestable, como si estuviera luchando contra el viento. Aquí, necesitas hacer ajustes pequeños y frecuentes para mantener la dirección.",
        image: "bajavelocidad.png",
    },
    {
        text: "Velocidad de Crucero: En velocidad de crucero, el avión tiende a ser más estable. Es como ir en una autopista sin curvas: solo necesitas pequeñas correcciones de vez en cuando.",
        image: "velocidadcrucero.png"
    },
    {
        text: "Alta Velocidad: A alta velocidad, cualquier pequeño movimiento puede causar un gran desvío. Así que, mantén un control firme y asegúrate de que el avión siga recto.",
        image: "altavelocidad.png"
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
        window.location.href = 'nivel46.html'; // Cambia 'tu_archivo.html' por el nombre del HTML al que quieras redirigir
    }
});

