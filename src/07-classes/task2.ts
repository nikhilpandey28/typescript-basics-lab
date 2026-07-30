class User {

    constructor(
        public name: string,
        private age: number
    ) {}

    introduce(): void {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const user = new User("Nikhil", 22);

user.introduce();

console.log(user.name);

// ❌ Intentional Error
// console.log(user.age);