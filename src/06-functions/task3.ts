type Predicate<T> = (item: T) => boolean;

function filter<T>(
    items: T[],
    predicate: Predicate<T>
): T[] {

    const result: T[] = [];

    for (const item of items) {

        if (predicate(item)) {
            result.push(item);
        }

    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = filter(
    numbers,
    (num) => num % 2 === 0
);

console.log(evenNumbers);