function MeasureTime(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {

        const start = performance.now();

        const result = originalMethod.apply(this, args);

        const end = performance.now();

        console.log(`${propertyKey} took ${end - start} ms`);

        return result;

    };

}

class Demo {

    @MeasureTime
    slowOperation(): void {

        for (let i = 0; i < 1_000_000; i++) {}

    }

}

new Demo().slowOperation();