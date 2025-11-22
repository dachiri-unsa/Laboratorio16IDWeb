const jsonLibros = `
[
    { "titulo": "El secreto de las 7 semillas", "autor": "David Fisher" },
    { "titulo": "El Principito", "autor": "Antoine de Saint-Exupery" },
    { "titulo": "1984", "autor": "George Orwell" }
]
`;
const libros = JSON.parse(jsonLibros);
const tabla = document.getElementById("tablaLibros");

libros.forEach(libro => {
    const fila = document.createElement("tr");
    const celdaTitulo = document.createElement("td");
    celdaTitulo.textContent = libro.titulo;
    const celdaAutor = document.createElement("td");
    celdaAutor.textContent = libro.autor;
    fila.appendChild(celdaTitulo);
    fila.appendChild(celdaAutor);
    tabla.appendChild(fila);
});
