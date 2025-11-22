const jsonString = '{"nombre":"Daniel","edad":17,"ciudad":"Arequipa"}';
const persona = JSON.parse(jsonString);
document.getElementById("parrafo").textContent = persona.nombre;
