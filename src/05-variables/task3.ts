function maybeGetValue(): string | null {
    return Math.random() > 0.5
        ? "TypeScript"
        : null;
}

let value: string | null = maybeGetValue();

if (value !== null) {

    console.log(value.toUpperCase());

}

// ❌ Intentional Error
// console.log(value.toUpperCase());