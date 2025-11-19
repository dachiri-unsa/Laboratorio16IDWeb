const textoP = document.querySelector("p");
const boton = document.getElementsByClassName("boton")[0];

boton.addEventListener("click", () => {
    if (textoP.textContent == "Texto cambiado") {
        textoP.textContent = "Texto original"
    }
    else {
        textoP.textContent = "Texto cambiado";
    }
})
