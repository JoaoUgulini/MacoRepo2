const colores = ['red', 'blue', 'green', 'orange', 'purple'];

function mudaColors() {
    const elementos = document.querySelectorAll('.nome');

    elementos.forEach((element, index) => {
        let colorIndex = 0;
        setInterval(() => {
            element.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length; // Muda a cor para a próxima da lista
        }, 1000 * (index + 1)); // Cada elemento troca em um tempo diferente
    });
}

window.onload = mudaColors;