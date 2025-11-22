const usuario = { 
    nombre: "Daniel", 
    correo: "dachiri@unsa.edu.pe", 
    rol: "Estudiante" 
};

localStorage.setItem("usuario", JSON.stringify(usuario));

const datos = JSON.parse(localStorage.getItem("usuario"));

document.getElementById("informacion").textContent = 
    `Nombre: ${datos.nombre}, Correo: ${datos.correo}, Rol: ${datos.rol}`;
