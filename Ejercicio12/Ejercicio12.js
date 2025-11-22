const botonMover = document.getElementById("btnMover");
const botonReiniciar = document.getElementById("btnReiniciar");
const cuadrado = document.getElementById("cuadrado");
botonMover.addEventListener("click", () => {
    cuadrado.classList.add("mover");
});
botonReiniciar.addEventListener("click", () => {
    cuadrado.classList.remove("mover");
});
