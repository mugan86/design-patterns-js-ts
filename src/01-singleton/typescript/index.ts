class SingletonTypescript {
    // Inaccesible desde fuera, en jasvacript no lo podemos hacer con private ya que no existe
    private static instance: SingletonTypescript;
    random: number;
    // No podemos iniciar el objeto con "new". Protegemos la instrucción
    private constructor() { // No podemos iniciar el objeto con "new". Protegemos la instrucción
        this.random = Math.random();
    }

    public static getInstance(): SingletonTypescript {
        if (!this.instance) {
            // Aquí si se puede utilizar por llamar desde dentro de la clase
            this.instance = new SingletonTypescript();
        }
        return this.instance;
    }
}

/**
* const singleton = new SingletonTypescript();
* ESTO DA ERROR PORQUE HEMOS ESPECIFICADO el constructor private
*/

const singleton = SingletonTypescript.getInstance();
// Con esto ya hacemos las construcciones sin el "new"

console.log(singleton.random);

const singletonTwo = SingletonTypescript.getInstance();

console.log(singletonTwo.random); // igual que el valor de la línea 24


console.log("=========Cambiando y asignando 37389393=======");
// Cambiando en cualquiera de ellos el valor de random
singletonTwo.random = 37389393;
console.log(singleton.random);         // 37389393
console.log(singletonTwo.random);      // 37389393
