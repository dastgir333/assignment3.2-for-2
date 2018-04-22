// TypeScript
class Car {  
    engine: string;
         stop: () => string;
    constructor (engine: string) {
        this.engine = engine;
        this.stop = () => "Stopped " + this.engine;
    }

    start() {
        return "Started " + this.engine;
    }
}