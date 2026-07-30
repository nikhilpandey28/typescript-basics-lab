function parse(input : unknown) : void {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }

    else if (typeof input === "number") {
        console.log(input.toFixed(2));
    }

    // console.log(input.toUpperCase());
}   


console.log(parse("hello")); // Output: "HELLO"
console.log(parse(3.14159)); // Output: "3.14"
console.log(parse(true));