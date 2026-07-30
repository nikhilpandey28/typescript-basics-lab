function First(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {

    console.log("First decorator applied");

}

function Second(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {

    console.log("Second decorator applied");

}

class Example {

    @First
    @Second
    test(): void {

        console.log("Method executed");

    }

}

const example = new Example();

example.test();