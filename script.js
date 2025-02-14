// Función para mostrar la ventana del discurso y reproducir la canción
function showCard() {
    const lyricsWindow = document.getElementById("lyrics-window");
    const audioPlayer = document.getElementById("audio-player");
    const cardButton = document.querySelector(".card-btn"); // Selecciona el botón

    // Muestra la ventana del discurso
    lyricsWindow.classList.remove("hidden");

    // Oculta el botón "Abrir Carta"
    cardButton.style.display = "none";

    // Reproduce la canción
    audioPlayer.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
    });
}

// Función para ocultar la ventana del discurso y pausar la canción
function hideCard() {
    const lyricsWindow = document.getElementById("lyrics-window");
    const audioPlayer = document.getElementById("audio-player");
    const cardButton = document.querySelector(".card-btn"); // Selecciona el botón

    // Oculta la ventana del discurso
    lyricsWindow.classList.add("hidden");

    // Muestra el botón "Abrir Carta" nuevamente
    cardButton.style.display = "block";

    // Pausa la canción
    audioPlayer.pause();
}

// Animación de las flores (sin cambios)
document.addEventListener("DOMContentLoaded", () => {
    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("falling-flower");

        const size = Math.random() * 20 + 10;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;

        for (let i = 0; i < 4; i++) {
            const petal = document.createElement("div");
            petal.classList.add("petal");
            petal.style.width = `${size / 1.5}px`;
            petal.style.height = `${size}px`;
            petal.style.backgroundColor = "#ff69b4";
            petal.style.position = "absolute";
            petal.style.borderRadius = "50%";
            petal.style.transform = `rotate(${i * 90}deg) translate(${size / 3}px, 0)`;
            flower.appendChild(petal);
        }

        const center = document.createElement("div");
        center.classList.add("center");
        center.style.width = `${size / 2}px`;
        center.style.height = `${size / 2}px`;
        center.style.backgroundColor = "yellow";
        center.style.borderRadius = "50%";
        center.style.position = "absolute";
        center.style.top = "50%";
        center.style.left = "50%";
        center.style.transform = "translate(-50%, -50%)";
        flower.appendChild(center);

        flower.style.position = "absolute";
        flower.style.left = `${Math.random() * window.innerWidth}px`;
        flower.style.top = "-50px";
        flower.style.opacity = Math.random() * 0.5 + 0.5;

        document.body.appendChild(flower);

        flower.animate([
            { transform: "translateY(0px)", opacity: 1, rotate: "0deg" },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: "linear",
            iterations: 1
        }).onfinish = () => flower.remove();
    }

    setInterval(createFlower, 300);
});