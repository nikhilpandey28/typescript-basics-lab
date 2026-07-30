interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Duck implements Flyable, Swimmable {

    fly(): void {
        console.log("Duck is flying");
    }

    swim(): void {
        console.log("Duck is swimming");
    }

}

const duck = new Duck();

duck.fly();

duck.swim();