# TypeScript Basics Lab

A comprehensive hands-on repository covering the fundamentals of TypeScript through practical exercises, examples, and mini-labs.

This project was created as part of the LearnPath TypeScript Basics module and covers core TypeScript concepts including types, functions, classes, interfaces, access modifiers, and decorators.

---

# 📚 Topics Covered

## Section 1 — Why TypeScript

* JavaScript vs TypeScript
* Compile-time type checking
* Runtime errors vs compile-time errors
* Benefits of static typing
* TypeScript adoption in modern frameworks

### Key Concepts

* Type safety
* Better developer experience
* Improved maintainability
* Enhanced IDE support

---

## Section 2 — Setting Up TypeScript

* Installing TypeScript
* Local vs Global installation
* TypeScript compiler (`tsc`)
* Creating TypeScript projects
* VS Code TypeScript integration

### Commands

```bash
npm init -y

npm install --save-dev typescript

npx tsc --init
```

---

## Section 3 — Understanding tsconfig.json

* TypeScript compiler configuration
* `target`
* `module`
* `strict`
* `noImplicitAny`
* `rootDir`
* `outDir`
* `include`
* `exclude`

### Example

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

---

## Section 4 — Basic Types

### Primitive Types

```ts
let username: string = "Nikhil";
let age: number = 22;
let isActive: boolean = true;
```

### Arrays

```ts
let skills: string[] = ["JS", "TS"];
```

### Tuples

```ts
let employee: [string, number] = ["Nikhil", 101];
```

### Union Types

```ts
type ID = string | number;
```

### Unknown

```ts
function parse(input: unknown) {}
```

### Type Guards

```ts
if (typeof input === "string") {
  input.toUpperCase();
}
```

---

## Section 5 — Variables

### Type Inference

```ts
let score = 100;
```

TypeScript infers:

```ts
let score: number = 100;
```

### Readonly Arrays

```ts
const tags: readonly string[] = ["ts", "js"];
```

### Type Narrowing

```ts
if (value !== null) {
  value.toUpperCase();
}
```

### Concepts Learned

* Inference
* Readonly
* Null checks
* Control-flow analysis

---

## Section 6 — Functions

### Typed Parameters

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Optional Parameters

```ts
function greet(name: string, greeting?: string) {}
```

### Nullish Coalescing

```ts
greeting ?? "Hello";
```

### Function Type Alias

```ts
type Predicate<T> = (item: T) => boolean;
```

### Generic Functions

```ts
function filter<T>(
  items: T[],
  predicate: Predicate<T>
): T[] {}
```

---

## Section 7 — Classes

### Private Members

```ts
private balance: number;
```

### Readonly Properties

```ts
readonly accountId: string;
```

### Constructor Parameter Shorthand

```ts
constructor(
  public name: string,
  private age: number
) {}
```

### Abstract Classes

```ts
abstract class Shape {
  abstract area(): number;
}
```

### Concepts Learned

* Encapsulation
* Inheritance
* Abstraction
* Constructor shorthand

---

## Section 8 — Interfaces

### Object Contracts

```ts
interface User {
  id: number;
  name: string;
}
```

### Optional Properties

```ts
discount?: number;
```

### Interface Inheritance

```ts
interface Employee extends Person {
  department: string;
}
```

### Multiple Interface Implementation

```ts
class Duck implements Flyable, Swimmable {}
```

---

## Section 9 — Types vs Interfaces

### Interface

```ts
interface User {
  id: number;
}
```

### Type Alias

```ts
type User = {
  id: number;
};
```

### Declaration Merging

```ts
interface Employee {
  id: number;
}

interface Employee {
  name: string;
}
```

### Intersection Types

```ts
type UserProfile = Contact & Address;
```

### Concepts Learned

* Declaration merging
* Intersections
* Choosing between type and interface

---

## Section 10 — Public, Private & Protected

### Public

```ts
public name: string;
```

### Private

```ts
private salary: number;
```

### Protected

```ts
protected department: string;
```

### JavaScript Private Fields

```ts
#balance = 5000;
```

### Concepts Learned

* Access control
* Encapsulation
* Protected inheritance
* Runtime vs compile-time privacy

---

## Section 11 — Method Decorators

### Enable Decorators

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

### Example Decorator

```ts
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {}
```

### Logging Decorator

```ts
@LogMethod
add() {}
```

### Performance Decorator

```ts
@MeasureTime
slowOperation() {}
```

### Concepts Learned

* Method decorators
* Property descriptors
* Decorator execution order
* Real-world framework usage

---

# 📂 Project Structure

```text
typescript-basics-lab/
│
├── src/
│   ├── 01-why-typescript/
│   ├── 02-setting-up-typescript/
│   ├── 03-tsconfig/
│   ├── 04-basic-types/
│   ├── 05-variables/
│   ├── 06-functions/
│   ├── 07-classes/
│   ├── 08-interfaces/
│   ├── 09-types-vs-interfaces/
│   ├── 10-access-modifiers/
│   └── 11-method-decorators/
│
├── dist/
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project:

```bash
cd typescript-basics-lab
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Running the Project

Compile TypeScript:

```bash
npx tsc
```

Run generated JavaScript:

```bash
node dist/path-to-file.js
```

Example:

```bash
node dist/06-functions/task2.js
```

---

# 🎯 Key TypeScript Concepts Mastered

### Types

* string
* number
* boolean
* tuple
* union
* unknown

### Variables

* inference
* readonly
* narrowing

### Functions

* parameter typing
* return types
* optional parameters
* generics

### OOP

* classes
* abstract classes
* inheritance
* encapsulation

### Interfaces

* contracts
* inheritance
* implementation

### Advanced Fundamentals

* declaration merging
* intersection types
* decorators

---

# 🔥 Most Important Interview Questions

### What is TypeScript?

TypeScript is a statically typed superset of JavaScript that adds compile-time type checking and additional language features.

### What is Type Inference?

TypeScript automatically determines a variable's type from its initial value.

### Difference between any and unknown?

* `any` disables type checking.
* `unknown` requires type narrowing before usage.

### Difference between type and interface?

* Both describe shapes.
* Interfaces support declaration merging.
* Types support unions and intersections.

### Difference between private and protected?

| Modifier  | Same Class | Child Class | Outside |
| --------- | ---------- | ----------- | ------- |
| public    | ✅          | ✅           | ✅       |
| protected | ✅          | ✅           | ❌       |
| private   | ✅          | ❌           | ❌       |

### What is an Abstract Class?

A class that cannot be instantiated directly and may contain abstract members that subclasses must implement.

### What are Decorators?

Functions that can observe or modify classes and class members by adding behavior without changing the original implementation.

---

# 📝 Revision Notes

### Remember

* TypeScript checks types at compile time.
* Interfaces disappear after compilation.
* Classes exist at runtime.
* `unknown` is safer than `any`.
* `readonly` prevents modification.
* `protected` allows subclass access.
* Interfaces can merge.
* Type aliases cannot merge.
* Decorators wrap behavior.
* Generics make code reusable and type-safe.

---

# 🏆 Learning Outcomes

After completing this repository, you can:

* Configure TypeScript projects
* Use TypeScript types effectively
* Write type-safe functions
* Build classes and interfaces
* Apply object-oriented programming concepts
* Understand access modifiers
* Create and use decorators
* Read and maintain TypeScript codebases confidently

---

# 👨‍💻 Author

**Nikhil Pandey**

LearnPath – TypeScript Basics Module

Built for hands-on TypeScript learning and interview preparation.
