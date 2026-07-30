class Employee {

    public name: string;

    private salary: number;

    public department: string;

    constructor(
        name: string,
        salary: number,
        department: string
    ) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    showDetails(): void {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }

}

const employee2 = new Employee(
    "Nikhil",
    80000,
    "Engineering"
);

console.log(employee2.name);

// 4 Intentional Errors
// console.log(employee2.salary);

console.log(employee2.department);