document.getElementById("guardar").addEventListener("click", () => {
    const nombreUsuario = document.getElementById("nombre").value;
    const datos = {
        nombre: nombreUsuario
    };
    const jsonDatos = JSON.stringify(datos);
    console.log(jsonDatos);
});