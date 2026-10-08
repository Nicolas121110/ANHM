//pega o video da pagina
const video = document.querySelector("video");

//identifica quando começa
video.addEventListener("play", function() {
    console.log("Vídeo iniciado!");
});