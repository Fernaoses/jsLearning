class Persona{
    
    // Atributos estaticos de la clase
    static _contador = 0; 
    static get contador() {
        return Persona._contador + ' instancias creadas';
    }

    static mensaje() {
        console.log(this.edad);
        console.log('Mensaje estatico de la clase Persona');
    }

    // Atributos de la clase Persona
    nombre  = "";
    edad    = "";
    sexo    = "";

    // Se ejecuta siempre que se crea un objeto de la clase Persona
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

class Ciudad extends Persona {

    ciudad = '';

    constructor(nombre, edad, sexo){
        // Llamada al constructor de la clase padre (Persona)
        super(nombre, edad, sexo);
        // Inicializando el atributo ciudad
        this.ciudad = 'Panama';
    }

    quienSoy() {
        // Llamada al metodo quienSoy() de la clase padre (Persona)
        console.log(`Vivo en la ciudad de ${this.ciudad}.`);
        super.quienSoy();
    }
}

const pedro = new Persona;
const pedroS = new Ciudad(nombre="Pedro", edad=30, sexo="masculino");

console.log(pedro);
console.log(pedroS);
pedroS.quienSoy();