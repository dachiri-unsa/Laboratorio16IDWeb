const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 },
];
const boton = document.getElementById("generarTabla");
const generarTabla = (arregloObjetos) => {
    const nuevaTabla = document.createElement("table");
    const nuevaFila = document.createElement("tr");
    nuevaTabla.appendChild(nuevaFila);
    for (const t of Object.keys(productos[0])) {
        const nuevoTituloFila = document.createElement("th");
        nuevoTituloFila.textContent = t;
        nuevaFila.appendChild(nuevoTituloFila);
    }
    for (const o of productos) {
        const nuevaFilaElementos = document.createElement("tr");
        nuevaTabla.appendChild(nuevaFilaElementos);
        for (const k of Object.keys(o)) {
            const nuevoElementoFila = document.createElement("td");
            nuevoElementoFila.textContent = o[k];
            nuevaFilaElementos.appendChild(nuevoElementoFila);
        }
    }
    document.body.appendChild(nuevaTabla);
}
boton.addEventListener("click", () => generarTabla(productos));
