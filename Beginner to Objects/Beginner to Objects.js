# Complete JavaScript Tutorial: Beginner to Objects

## Table of Contents
1. [JavaScript Basics](#javascript-basics)
2. [Variables and Data Types](#variables-and-data-types)
3. [Operators](#operators)
4. [Control Structures](#control-structures)
5. [Functions](#functions)
6. [Arrays](#arrays)
7. [Objects](#objects)
8. [Practice Problems](#practice-problems)

---

## JavaScript Basics

### What is JavaScript?
JavaScript is a dynamic, interpreted programming language primarily used for web development. It runs in browsers and can also run on servers (Node.js).

### Basic Syntax Rules
- Statements end with semicolons (`;`) - optional but recommended
- Case-sensitive language
- Comments: `//` for single line, `/* */` for multi-line
- Code blocks use curly braces `{}`

```javascript
// This is a single-line comment
console.log("Hello World!"); // Outputs to console

/* This is a 
   multi-line comment */
```

---

## Variables and Data Types

### Variable Declaration
```javascript
// ES6+ (Modern way)
let name = "John";        // Can be reassigned
const age = 25;           // Cannot be reassigned
var city = "New York";    // Old way (function-scoped)

// Variable naming rules
let firstName = "Alice";  // camelCase (preferred)
let _private = "secret";  // Can start with underscore
let $element = "jQuery";  // Can start with dollar sign
```

### Data Types

#### Primitive Types
```javascript
// String
let message = "Hello World";
let template = `My name is ${name}`; // Template literal

// Number
let integer = 42;
let decimal = 3.14;
let negative = -10;

// Boolean
let isActive = true;
let isComplete = false;

// Undefined
let undefinedVar; // undefined by default
console.log(undefinedVar); // undefined

// Null
let emptyValue = null;

// Symbol (ES6+)
let sym = Symbol('id');
```

#### Type Checking
  
```javascript
console.log(typeof "Hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (this is a known quirk)
```

---

## Operators

### Arithmetic Operators
  
```javascript
let a = 10, b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000

// Increment/Decrement
let counter = 5;
counter++;    // Post-increment: counter = 6
++counter;    // Pre-increment: counter = 7
counter--;    // Post-decrement: counter = 6
--counter;    // Pre-decrement: counter = 5
```


### Comparison Operators

  ```javascript
let x = 5, y = "5";

console.log(x == y);   // true (loose equality)
console.log(x === y);  // false (strict equality)
console.log(x != y);   // false (loose inequality)
console.log(x !== y);  // true (strict inequality)
console.log(x > 3);    // true
console.log(x <= 5);   // true
```


### Logical Operators
  
```javascript
let p = true, q = false;

console.log(p && q);  // AND: false
console.log(p || q);  // OR: true
console.log(!p);      // NOT: false

// Short-circuit evaluation
let result = p && "This will execute";  // "This will execute"
let result2 = q || "Default value";     // "Default value"
```

---
  

## Control Structures

### Conditional Statements

#### if-else Statement
  
```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary operator (shorthand)
let grade = score >= 60 ? "Pass" : "Fail";
```


#### switch Statement
  
```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}
```


### Loops

#### for Loop
  
```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
}

// for...in loop (for object properties)
let person = {name: "Alice", age: 30};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for...of loop (for arrays/iterables)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
```

#### while Loop
```javascript
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// do...while loop
let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 3);
```

---

## Functions

### Function Declaration
```javascript
// Function declaration (hoisted)
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
```

### Function Expression
```javascript
// Function expression (not hoisted)
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // 8
```

### Arrow Functions (ES6+)
```javascript
// Arrow function syntax
const multiply = (a, b) => a * b;
const square = x => x * x;        // Single parameter
const sayHello = () => "Hello!";  // No parameters

console.log(multiply(4, 5)); // 20
console.log(square(6));      // 36
console.log(sayHello());     // "Hello!"
```

### Function Parameters
```javascript
// Default parameters
function createUser(name, age = 18) {
    return `User: ${name}, Age: ${age}`;
}

console.log(createUser("Bob"));      // "User: Bob, Age: 18"
console.log(createUser("Alice", 25)); // "User: Alice, Age: 25"

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### Scope and Closures
```javascript
let globalVar = "I'm global";

function outerFunction(x) {
    let outerVar = "I'm outer";
    
    function innerFunction(y) {
        let innerVar = "I'm inner";
        console.log(globalVar, outerVar, innerVar, x, y);
    }
    
    return innerFunction;
}

let closure = outerFunction("outer param");
closure("inner param");
// Outputs: I'm global I'm outer I'm inner outer param inner param
```

---

## Arrays

### Array Creation and Basic Operations
```javascript
// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = new Array(1, 2, 3, 4, 5);
let mixed = ["text", 42, true, null];

// Accessing elements
console.log(fruits[0]);     // "apple"
console.log(fruits.length); // 3

// Modifying arrays
fruits[1] = "grape";        // Change element
fruits.push("mango");       // Add to end
fruits.unshift("kiwi");     // Add to beginning
let lastFruit = fruits.pop();     // Remove from end
let firstFruit = fruits.shift();  // Remove from beginning
```


### Array Methods

  
```javascript
let numbers = [1, 2, 3, 4, 5];

// Iteration methods
numbers.forEach(num => console.log(num * 2));

// Transformation methods
let doubled = numbers.map(num => num * 2);        // [2, 4, 6, 8, 10]
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]
let sum = numbers.reduce((total, num) => total + num, 0); // 15

// Search methods
let found = numbers.find(num => num > 3);         // 4
let index = numbers.findIndex(num => num > 3);    // 3
let includes = numbers.includes(3);               // true

// Other useful methods
let sliced = numbers.slice(1, 4);                 // [2, 3, 4]
let joined = numbers.join("-");                   // "1-2-3-4-5"
```

---
  

## Objects


### Object Creation
  
```javascript
// Object literal (most common)
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    isStudent: false
};

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hi, I'm ${this.name}`;
    };
}
let person2 = new Person("Bob", 25);

// Object.create()
let personPrototype = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};
let person3 = Object.create(personPrototype);
person3.name = "Charlie";
```

### Accessing Object Properties
```javascript
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    "fuel-type": "gasoline" // Property with special characters
};

// Dot notation
console.log(car.brand);  // "Toyota"
car.color = "blue";      // Add new property

// Bracket notation
console.log(car["model"]);     // "Camry"
console.log(car["fuel-type"]); // "gasoline"

// Dynamic property access
let prop = "year";
console.log(car[prop]); // 2020
```

### Object Methods
```javascript
let calculator = {
    x: 0,
    y: 0,
    
    setValues: function(a, b) {
        this.x = a;
        this.y = b;
    },
    
    add() {  // ES6 shorthand method syntax
        return this.x + this.y;
    },
    
    multiply: () => {
        // Arrow functions don't have their own 'this'
        // This would not work as expected
        return this.x * this.y;
    }
};

calculator.setValues(5, 3);
console.log(calculator.add()); // 8
```

### Object Destructuring (ES6+)
```javascript
let user = {
    username: "johndoe",
    email: "john@example.com",
    age: 28,
    address: {
        street: "123 Main St",
        city: "Boston"
    }
};

// Basic destructuring
let {username, email} = user;
console.log(username); // "johndoe"

// Renaming variables
let {username: userName, age: userAge} = user;

// Default values
let {phone = "N/A"} = user;

// Nested destructuring
let {address: {city}} = user;
console.log(city); // "Boston"
```

### Object Manipulation
```javascript
let student = {
    name: "Alice",
    grade: "A"
};

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(student));    // ["name", "grade"]
console.log(Object.values(student));  // ["Alice", "A"]
console.log(Object.entries(student)); // [["name", "Alice"], ["grade", "A"]]

// Object.assign() - copying/merging objects
let contact = {email: "alice@example.com", phone: "123-456-7890"};
let fullProfile = Object.assign({}, student, contact);

// Spread operator (ES6+)
let profile = {...student, ...contact, id: 1};

// Checking properties
console.log("name" in student);              // true
console.log(student.hasOwnProperty("name")); // true

// Deleting properties
delete student.grade;
console.log(student); // {name: "Alice"}
```

### Advanced Object Concepts

#### Getters and Setters
```javascript
let rectangle = {
    width: 10,
    height: 5,
    
    get area() {
        return this.width * this.height;
    },
    
    set dimensions(value) {
        [this.width, this.height] = value;
    }
};

console.log(rectangle.area);      // 50 (getter)
rectangle.dimensions = [8, 6];    // setter
console.log(rectangle.area);      // 48
```

#### Object.defineProperty()
```javascript
let product = {};

Object.defineProperty(product, "price", {
    value: 99.99,
    writable: true,
    enumerable: true,
    configurable: true
});

// More complex example
Object.defineProperty(product, "discountPrice", {
    get() {
        return this.price * 0.9;
    },
    enumerable: true
});

console.log(product.discountPrice); // 89.991
```

---

## Practice Problems

### Problem 1: Basic Variables and Functions
Create a function that calculates the area of different shapes.

```javascript
function calculateArea(shape, ...dimensions) {
    switch(shape.toLowerCase()) {
        case "rectangle":
            return dimensions[0] * dimensions[1];
        case "circle":
            return Math.PI * dimensions[0] ** 2;
        case "triangle":
            return 0.5 * dimensions[0] * dimensions[1];
        default:
            return "Unknown shape";
    }
}

// Test cases
console.log(calculateArea("rectangle", 5, 10)); // 50
console.log(calculateArea("circle", 3));        // ~28.27
console.log(calculateArea("triangle", 4, 6));   // 12
```

### Problem 2: Array Manipulation
Create a function that processes an array of numbers.

```javascript
function processNumbers(numbers) {
    return {
        sum: numbers.reduce((a, b) => a + b, 0),
        average: numbers.reduce((a, b) => a + b, 0) / numbers.length,
        max: Math.max(...numbers),
        min: Math.min(...numbers),
        evens: numbers.filter(n => n % 2 === 0),
        odds: numbers.filter(n => n % 2 !== 0)
    };
}

// Test
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(processNumbers(nums));
```

### Problem 3: Object Operations
Create a student management system.

```javascript
class StudentManager {
    constructor() {
        this.students = [];
    }
    
    addStudent(name, age, grades = []) {
        let student = {
            id: this.students.length + 1,
            name,
            age,
            grades,
            getAverage() {
                if (this.grades.length === 0) return 0;
                return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
            }
        };
        this.students.push(student);
        return student;
    }
    
    findStudent(name) {
        return this.students.find(student => 
            student.name.toLowerCase() === name.toLowerCase()
        );
    }
    
    addGrade(studentName, grade) {
        let student = this.findStudent(studentName);
        if (student) {
            student.grades.push(grade);
            return true;
        }
        return false;
    }
    
    getTopStudents(count = 3) {
        return this.students
            .map(student => ({
                name: student.name,
                average: student.getAverage()
            }))
            .sort((a, b) => b.average - a.average)
            .slice(0, count);
    }
}

// Usage example
let manager = new StudentManager();
manager.addStudent("Alice", 20, [85, 90, 88]);
manager.addStudent("Bob", 19, [92, 87, 91]);
manager.addStudent("Charlie", 21, [78, 82, 80]);

console.log(manager.getTopStudents());
```

### Problem 4: Complex Object Manipulation
Create a shopping cart system.

```javascript
function ShoppingCart() {
    let items = [];
    
    return {
        addItem(product, quantity = 1) {
            let existingItem = items.find(item => item.product.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ product, quantity });
            }
        },
        
        removeItem(productId) {
            items = items.filter(item => item.product.id !== productId);
        },
        
        updateQuantity(productId, newQuantity) {
            let item = items.find(item => item.product.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        },
        
        getTotal() {
            return items.reduce((total, item) => 
                total + (item.product.price * item.quantity), 0
            );
        },
        
        getItems() {
            return [...items]; // Return a copy
        },
        
        clear() {
            items = [];
        }
    };
}

// Usage
let cart = ShoppingCart();
let product1 = { id: 1, name: "Laptop", price: 999.99 };
let product2 = { id: 2, name: "Mouse", price: 29.99 };

cart.addItem(product1, 1);
cart.addItem(product2, 2);
console.log(cart.getTotal()); // 1059.97
```

---

## Exam Tips

### Key Concepts to Remember

1. **Variable Declarations**: Use `const` for constants, `let` for variables that change
2. **Equality**: Use `===` for strict equality, avoid `==`
3. **Functions**: Understand the difference between declarations, expressions, and arrow functions
4. **Array Methods**: Know `map()`, `filter()`, `reduce()`, `forEach()`
5. **Object Access**: Both dot notation and bracket notation
6. **Destructuring**: Efficient way to extract values from objects and arrays
7. **Scope**: Understand global, function, and block scope
8. **this Keyword**: Context-dependent, different in arrow functions

### Common Mistakes to Avoid

1. Forgetting to use `let`/`const` (creates global variables)
2. Confusing `=` (assignment) with `==`/`===` (comparison)
3. Not understanding array methods return new arrays (immutability)
4. Mixing up object property access methods
5. Arrow functions and `this` context issues

### Practice Strategy

1. Write code by hand first, then test on computer
2. Understand each concept with examples
3. Practice debugging common errors
4. Create your own variations of the problems
5. Focus on understanding rather than memorization

Good luck with your exam! Practice these concepts and you'll do great!
