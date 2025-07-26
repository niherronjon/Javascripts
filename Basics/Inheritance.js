class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        return "Makes sound";
    }
}

class Dog extends Animal {
    sound() {
        return this.name + " barks";
    }
}

let dog = new Dog("Tommy");
console.log(dog.sound()); // Tommy barks
