// Funcion que tiene construsctor y no es una clase
function Persona( nombre, edad ) {
    console.log("Persona class created");

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const pedro = new Persona("Pedro", 30);
const juan = new Persona("Juan", 25);
console.log(pedro);
pedro.imprimir();
juan.imprimir();
