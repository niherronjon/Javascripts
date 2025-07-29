class Student {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }

    display()
    {
        return `Name: ${this.name}, Roll: ${this.roll}`;
    }
}

let stu1 = new Student("Niher", 101);
console.log(stu1.display());
