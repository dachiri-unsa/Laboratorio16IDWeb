const botonSuma = document.getElementById("botonSuma");
const botonResta = document.getElementById("botonResta");
const contadorSpan = document.querySelector("span");
let contador = 0;
botonSuma.addEventListener("click", () => {
    contador++;
    contadorSpan.textContent = contador;
});
botonResta.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        contadorSpan.textContent = contador;
    }
    else {
        alert("No puede restar mas que 0. ");
    }
});
