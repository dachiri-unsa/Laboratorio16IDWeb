const jsonTareas = `
[
    { "titulo": "Estudiar JavaScript", "completada": true },
    { "titulo": "Hacer ejercicio", "completada": false },
    { "titulo": "Leer un libro", "completada": true }
]
`;
const tareas = JSON.parse(jsonTareas);
const lista = document.getElementById("listaTareas");
tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;
    li.style.color = tarea.completada ? "green" : "red";
    lista.appendChild(li);
});
