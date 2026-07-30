abstract class Shape {

    abstract area(): number;

}

class Circle extends Shape {

    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

}

class Rectangle extends Shape {

    constructor(
        private width: number,
        private height: number
    ) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }

}

const circle = new Circle(5);

const rectangle = new Rectangle(10, 20);

console.log(circle.area());

console.log(rectangle.area());

// ❌ Intentional Error
// const shape = new Shape();