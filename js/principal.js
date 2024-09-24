const colores = ['red', 'blue', 'green', 'orange', 'purple'];

function mudaColores() {
    const elementos = document.querySelectorAll('.nome');

    elementos.forEach((element, index) => {
        let colorIndex = 0;
        setInterval(() => {
            element.style.color = colores[colorIndex];
            colorIndex = (colorIndex + 1) % colores.length;
        }, 1000 * (index + 1));
})
}

window.onload = mudaColores;