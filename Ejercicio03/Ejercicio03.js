const textoP = document.querySelector("p");
const boton = document.getElementsByClassName("boton")[0];

boton.addEventListener("click", () => {
    textoP.textContent = "Texto cambiado";
})