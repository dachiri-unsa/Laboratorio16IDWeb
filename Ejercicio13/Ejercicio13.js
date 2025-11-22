const form = document.getElementById("formulario");
const nombres = document.querySelector("#nombres");
const edad = document.querySelector("#edad");
const tabla = document.getElementById("tablaPrincipal");

const agregarDatos = (nombre, edad) => {
    const nuevaFila = document.createElement("tr");
    const elementoNombre = document.createElement("td");
    elementoNombre.textContent = nombre;
    nuevaFila.appendChild(elementoNombre);
    const elementoEdad = document.createElement("td");
    elementoEdad.textContent = edad;
    nuevaFila.appendChild(elementoEdad);
    
    const elementoAcciones = document.createElement("td");
    const botonModificar = document.createElement("button");
    const botonEliminar = document.createElement("button");
    botonModificar.textContent = "Modificar";
    botonEliminar.textContent = "Eliminar";
    botonModificar.dataset.action = "modificar";
    botonEliminar.dataset.action = "eliminar";
    elementoAcciones.appendChild(botonModificar);
    elementoAcciones.appendChild(botonEliminar);

    nuevaFila.appendChild(elementoAcciones);
    tabla.appendChild(nuevaFila);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos(nombres.value , edad.value);
    nombres.value = "";
    edad.value = "";
});
tabla.addEventListener("click", (e) => {
    const fila = e.target.parentElement.parentElement;
    if (e.target.dataset.action === "modificar") {
        nuevoNombre = prompt("Ingresar nuevo nombre: ");
        nuevaEdad = prompt("Ingresar nueva edad: ");
        fila.children[0].textContent = nuevoNombre;
        fila.children[1].textContent = nuevaEdad;
    }
    if (e.target.dataset.action === "eliminar") {
        fila.remove();
    }
});
