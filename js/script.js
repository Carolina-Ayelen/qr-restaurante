//codigo animacion maquina de escribir
const div = document.querySelector(".texto-maquina h2"),
    texto = "Diseño y armado de Instalaciones Eléctricas";

function efectoTextTyping(elemento, texto, i = 0) {
    elemento.textContent = elemento.textContent + texto[i];

    if (i === texto.length - 1) return;

    setTimeout(() => efectoTextTyping(elemento, texto, i + 1), 100);
}

efectoTextTyping(div, texto)