import { log } from "console";

// Declaration
class FPT {
    public namestudent: string;

    private arrstudent: string[] = [];
    constructor(namestudent: string) {
        this.namestudent = namestudent;
    }
    mota() {
        console.log(this.namestudent);
    }
    add(qqqqq: string) {
        this.arrstudent.push(qqqqq);
    }
    render() {
        this.arrstudent.forEach((item) => {
            console.log(item);
        });
    }
}
class IT extends FPT {
    age: number;
    static id: string;
    constructor(namefpt: string, age: number, id: string) {
        super(namefpt);
        this.age = age;
        IT.id = id;
    }

    greet() {
        return console.log("Hello, " + this.age);
    }
    static mota() {}
}
// ví dụ
// Interface
interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

// Abstract class
abstract class TwoDimensionalShape implements Shape {
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}

// Rectangle class implementing Shape interface
class Rectangle extends TwoDimensionalShape {
    constructor(
        private width: number,
        private height: number,
    ) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Circle class implementing Shape interface
class Circle extends TwoDimensionalShape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Usage
const rectangle = new Rectangle(5, 10);
console.log("Rectangle Area:", rectangle.calculateArea());
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());

const circle = new Circle(7);
console.log("Circle Area:", circle.calculateArea());
console.log("Circle Perimeter:", circle.calculatePerimeter());

export default IT;
