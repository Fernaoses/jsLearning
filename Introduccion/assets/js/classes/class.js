class Persona{

    static _contador = 0; // Atributo estatico de la clase
    nombre  = "";
    edad    = "";
    sexo    = "";

    constructor(nombre = 'sin nombre', edad = 'sin edad', sexo = 'sin sexo') {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        console.log(`Persona creada: ${this.nombre}, ${this.edad}, ${this.sexo}`);
    
        Persona._contador++; // Incrementa el contador de personas creadas
    }

    // Setter - se recomienda un parametro para cada setter
    set setComidaFavorita( comida) {
        this.comida = comida;
    }

    get getComidaFavorita() {
        console.log(`La comida favorita de ${this.nombre} es ${this.comida}`);
    }

    // Metodo para imprimir los datos de la persona
    quienSoy() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy de sexo ${this.sexo}.`);
    }

    // Metodo para imprimir los datos de la persona 2
    quienNoSoy() {
        // Llamada al metodo quienSoy() de la misma clase
        // this.quienSoy();
        
        quienSoy();
        console.log(`No soy ${this.nombre}, tengo ${this.edad} años y soy de sexo ${this.sexo}.`);
    
        function quienSoy(){
            console.log('Soy una funcion dentro de quienNoSoy');
        }
    }

}


const pedro = new Persona("Pedro", 30, "masculino");
const juan = new Persona("Juan", 25, "masculino");

console.log(pedro);
console.log(juan);

pedro.quienSoy();
pedro.quienNoSoy();

[pedro, juan].forEach(persona => persona.quienSoy());

pedro.setComidaFavorita = "Pizza";
console.log(`La comida favorita de ${pedro.nombre} es ${pedro.comida}.`);
pedro.setComidaFavorita = "Tacos";
console.log(`La comida favorita de ${pedro.nombre} es ${pedro.comida}.`);

console.log(juan);
juan.getComidaFavorita;

console.log(`El contador de personas creadas es: ${Persona._contador}`);