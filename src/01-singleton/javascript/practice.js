class WeekDays {
    daysEs = [
        "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
    ];

    daysEn = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

    daysEus = [
        "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata", "Igandea"
    ];

    getInstance() {
        if (!WeekDays.instance) {
            throw new Error('Object instance not exist in this moment and not take instance');
        }
        return WeekDays.instance;
    }

    constructor(lang) {
        this.lang = lang;
        console.log("Enter to constructor");
        if (WeekDays.instance) {
            console.log("Already exist");
            // return exist instance that before object create info
            return WeekDays.instance;
        }
        console.log("No exist - Create a new instance")
        WeekDays.instance = this; // Asign because is the first object
    }

    get() {
        return this.lang === 'es' ? this.daysEs : (
            this.lang === 'en' ? this.daysEn : this.daysEus
        );
    }

}

const weekDays = new WeekDays('eu');
// Se carga con Euskera

// Aunque creemos más objetos, siempre estará en Euskera

console.log(weekDays.get());