class Animal {

    protected species: string;

    constructor(species: string) {
        this.species = species;
    }

}

class Dog extends Animal {

    constructor() {
        super("Dog");
    }

    printSpecies(): void {
        console.log(this.species);
    }

}

const dog = new Dog();

dog.printSpecies();

//  Intentional Error
// console.log(dog.species);