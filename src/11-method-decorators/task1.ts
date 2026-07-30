function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {

        console.log(`Calling ${propertyKey}`);

        return originalMethod.apply(this, args);

    };

}

class Calculator {

    @LogMethod
    add(a: number, b: number): number {

        return a + b;

    }

}

const calculator = new Calculator();

console.log(calculator.add(10, 20));