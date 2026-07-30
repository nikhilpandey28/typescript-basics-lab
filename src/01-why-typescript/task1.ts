function getLength(value : string) : number{
    return value.length;
}

console.log(getLength("Hello, TypeScript!")); // Output: 18
// console.log(getLength(100)); Error: Argument of type 'number' is not assignable to parameter of type 'string'.