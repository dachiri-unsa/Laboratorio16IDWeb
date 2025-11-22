const productos = [
    { nombre: "Laptop", precio: 1500 },
    { nombre: "Mouse", precio: 30 },
    { nombre: "Teclado", precio: 80 }
];

const productosJSON = JSON.stringify(productos);
const productosObj = JSON.parse(productosJSON);
const lista = document.getElementById("lista");
productosObj.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    lista.appendChild(li);
});
