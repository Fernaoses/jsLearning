class Singleton {
    
    static instance; // Instancia que es undefined inicialmente
    
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    // Example method
    someMethod() {
        console.log("This is a method of the singleton instance.");
    }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.someMethod(); // This is a method of the singleton instance.
console.log(instance1 === instance2); // true