const texts = [
    {
        text: "¡Hola! Soy el Capitán Viento. Cuando volamos un avión, necesitamos asegurarnos de que la bola en el indicador de giro esté en el centro. Si la bola se mueve, significa que el avión está derrapando, como cuando un auto resbala en una curva. Veamos algunas causas que provocan el derrape",
    },
    {
        text: "Vientos Fuertes: Si el viento empuja el avión de lado, puede hacer que el avión derrape. Es como cuando caminas y un viento fuerte te empuja, haciéndote perder el equilibrio.",
        image: "vientolateral.jpg",
    },
    {
        text: "Mal uso del Timón: Si no usamos el timón correctamente, el avión puede comenzar a girar demasiado o muy poco, causando un derrape. Es como girar el volante del auto de golpe en una dirección.",
        image: "holaaaaaaaa.gif"
    },
    {
        text: "Inclinación Incorrecta: Si el avión está inclinado de manera incorrecta, también puede empezar a derrapar. Es como si estuvieras en una bicicleta y te inclinas mucho hacia un lado; podrías perder el control.",
        image: "bruscogiro.png"
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
        window.location.href = 'nivel44.html'; // Cambia 'tu_archivo.html' por el nombre del HTML al que quieras redirigir
    }
});

