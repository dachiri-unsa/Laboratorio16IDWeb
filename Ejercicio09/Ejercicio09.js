const imagenPrincipal = document.getElementById("imagenPrincipal");
const listaImagenes = document.getElementsByClassName("imagen");
for (const imagen of listaImagenes) {
    imagen.addEventListener("click", () => {
        imagenPrincipal.setAttribute("src",imagen.firstElementChild.getAttribute("src"));
    });
}