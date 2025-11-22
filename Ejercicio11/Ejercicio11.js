const elementoUl = document.querySelector(".listaPrincipal");
elementoUl.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});
