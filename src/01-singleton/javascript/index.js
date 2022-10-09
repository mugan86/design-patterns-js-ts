
class Singleton {

    static getInstance() {
        if (!Singleton.instance) {
            throw new Error('Object instance not exist in this moment and not take instance');
        }
        return Singleton.instance;
    }
    constructor() {
        this.random = Math.random();
        console.log("Enter to constructor");
        if (Singleton.instance) {
            console.log("Already exist");
            // return exist instance that before object create info
            return Singleton.instance;
        }
        console.log("No exist - Create a new instance")
        Singleton.instance = this; // Asign because is the first object
    }
}

// Force error when take instance from static function
// const singleton = Singleton.getInstance();

const singleton = new Singleton();
const singletonTwo = new Singleton();
console.log('Apply singleton that compare two objects. Equal objects');
console.log(singleton === singletonTwo);
// Para comprobar que usan la misma información, al ser el mismo objeto por tener
// solo una instancia
console.log(`Singleton\t\t${singleton.random}`);
console.log(`Singleton Two\t${singletonTwo.random}`);

const singletonThree = Singleton.getInstance(); // <===============
console.log(`Singleton Three\t${singletonThree.random}`);

// All elements equal object

console.log(`All elements equal object ${singleton === singletonTwo && singleton === singletonThree}`);

