function greet(
    name : string,
    greeting?:string
) : string{

    return `${greeting ?? "Hello"}, ${name}!`;

}

console.log(greet("Nikhil"));

console.log(greet("Nikhil", "Good Morning"));