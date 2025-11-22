const elementoUl = document.querySelector("ul");
const inputAgregarItem = document.getElementById("nuevoElemento");
const botonNuevoItem = document.getElementById("nuevoItem");
const botonEliminatItem = document.getElementById("eliminarItem");

botonNuevoItem.addEventListener("click", () => {
    const texto = inputAgregarItem.value.trim();
    if ( texto === "") {
        alert("Un nuevo item no puede estar vacio.");
        return;
    }
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = texto;
    elementoUl.appendChild(nuevoLi);
    inputAgregarItem.value = "";
});
botonEliminatItem.addEventListener("click", () => {
    if (elementoUl.lastElementChild === null) return;
    elementoUl.lastElementChild.remove()
});
