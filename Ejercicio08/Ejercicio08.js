const form = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;
    if (inputNombre.value.trim() === "") {
        mostrarError(inputNombre, "El contenido de este apartado no puede estar vacío.");
        valido = false;
    }
    if (inputCorreo.value.trim() === "") {
        mostrarError(inputCorreo, "El contenido de este apartado no puede estar vacío.");
        valido = false;
    } 
    if (valido) {
        alert("Formulario enviado correctamente");
    }
});
function mostrarError(input, mensaje) {
    const span = document.createElement("span");
    span.textContent = mensaje;
    span.classList.add("error");
    input.after(span);
}
