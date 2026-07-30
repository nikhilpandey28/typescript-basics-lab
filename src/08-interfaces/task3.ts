interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    department: string;
}

function printEmployee(employee: Employee): void {

    console.log(employee.name);

    console.log(employee.age);

    console.log(employee.department);

}

const employee: Employee = {
    name: "Nikhil",
    age: 22,
    department: "Engineering"
};

printEmployee(employee);

const person: Person = {
    name: "Rahul",
    age: 30
};

// ❌ Intentional Error
// printEmployee(person);