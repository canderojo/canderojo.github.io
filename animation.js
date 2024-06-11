// Definir las variables de posición y velocidad
let x = 0;
let y = 0;
let dx = 3.5; // Velocidad horizontal inicial
let dy = 3.5; // Velocidad vertical inicial
let imgWidth, imgHeight;

// Crear una nueva imagen
const img = new Image();
img.src = 'imagenes/logonuevo2.png';

// Ajustar el tamaño del canvas para que ocupe toda la pantalla
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    const formHeight = document.querySelector('.formulario').offsetHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Esperar a que la imagen se cargue antes de dibujarla
img.onload = function() {
    // Ajustar el tamaño de la imagen
    let maxWidth, maxHeight;
    if (window.innerWidth <= 699) {
        // Pantallas pequeñas (teléfonos móviles)
        maxWidth = canvas.width / 3;
        maxHeight = canvas.height / 3;
        marginBottom = 100;  // Margen para colisiones en el borde inferior
    } else if (window.innerWidth <= 1150) {
        // Pantallas medianas (tabletas)
        maxWidth = canvas.width / 4;
        maxHeight = canvas.height / 4;
        marginBottom = 100;
    } else if (window.innerWidth >= 1150) {
        // Pantallas grandes (escritorio)
        maxWidth = canvas.width / 6;
        maxHeight = canvas.height / 6;
        marginBottom = 350; 
    }
    const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
    imgWidth = img.width * ratio;
    imgHeight = img.height * ratio;

    if (x + imgWidth > canvas.width) x = canvas.width - imgWidth;
    if (y + imgHeight > canvas.height) y = canvas.height - imgHeight;

    // Función para dibujar la animación
    function draw() {
        // Borrar el lienzo
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar la imagen en la posición actual
        ctx.drawImage(img, x, y, imgWidth, imgHeight);

        // Actualizar la posición
        x += dx;
        y += dy;
       
        // Detectar colisiones con los bordes del canvas
        if (x + imgWidth > canvas.width || x < 0) {
            dx = -dx;
        }
        if (y + imgHeight > canvas.height - marginBottom || y < 0) {
            dy = -dy;
        }

        // Solicitar el siguiente cuadro de animación
        requestAnimationFrame(draw);
    }

    // Llamar a la función draw para iniciar la animación
    draw();
};
