class Rectangulo {
  
    #area = 0;
    
    constructor(base, altura) {
    this.base = base;
    this.altura = altura;

    this.area = this.base * this.altura;
    }

    // area() {
    //     return this.base * this.altura;
    // }

    // perimetro() {
    //     return 2 * (this.base + this.altura);
    // }

    #calcularArea() {
        console.log(this.area * 2);
    }
}

const rectangulo = new Rectangulo(10, 5);
Rectangulo.area = 10;
rectangulo.calcularArea(); // Llamada al método privado
console.log(`El area del rectangulo es: ${rectangulo.area}`); // Acceso al atributo privado