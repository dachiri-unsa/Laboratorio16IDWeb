const jsonString = '{"nombre":"Luis","edad":20}';
const persona = JSON.parse(jsonString);
persona.edad = 25;
const jsonActualizado = JSON.stringify(persona);

console.log(jsonActualizado); 
