const perfilGuardado = localStorage.getItem("perfil");
if (perfilGuardado) {
    const perfil = JSON.parse(perfilGuardado);
    document.getElementById("perfil").textContent =
        `Nombre: ${perfil.nombre}, Edad: ${perfil.edad}, País: ${perfil.pais}`;
}

document.getElementById("formPerfil").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const pais = document.getElementById("pais").value;

    const perfil = { nombre, edad, pais };

    localStorage.setItem("perfil", JSON.stringify(perfil));

    document.getElementById("perfil").textContent =
        `Nombre: ${perfil.nombre}, Edad: ${perfil.edad}, País: ${perfil.pais}`;
});
