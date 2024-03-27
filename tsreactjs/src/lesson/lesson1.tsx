// ⁡⁣⁣⁢type⁡
// Định nghĩa kiểu dữ liệu Person
type Person = {
    name: string;
    age: number;
    gender: string;
};

// Khai báo một biến có kiểu dữ liệu là Person
let person: Person = {
    name: "John",
    age: 30,
    gender: "male",
};

// In ra thông tin của đối tượng person
console.log(person.name); // In ra: John
console.log(person.age); // In ra: 30
console.log(person.gender); // In ra: male

// ⁡⁣⁣⁢Discriminated Unions:⁡
// Định nghĩa kiểu dữ liệu cho hình tròn và hình vuông
type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    sideLength: number;
};

// Kiểu dữ liệu union sử dụng Discriminated Unions
type Shape = Circle | Square;

// Hàm in ra diện tích của hình tròn hoặc hình vuông
function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            // TypeScript sẽ báo lỗi nếu có trường hợp không xử lý
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// Khai báo các hình tròn và hình vuông
let circle: Circle = { kind: "circle", radius: 5 };
let square: Square = { kind: "square", sideLength: 4 };

// In ra diện tích của hình tròn và hình vuông
console.log("Area of circle:", area(circle)); // In ra: Area of circle: 78.53981633974483
console.log("Area of square:", area(square)); // In ra: Area of square: 16

// ⁡⁣⁣⁢Generic⁡ function để in ra một mảng các phần tử
function printArray<T>(arr: T[]): void {
    arr.forEach((element) => console.log(element));
}

// Sử dụng generic function với một mảng số nguyên
let numbers: number[] = [1, 2, 3, 4, 5];
printArray(numbers);

// Sử dụng generic function với một mảng chuỗi
let strings: string[] = ["apple", "banana", "orange"];
printArray(strings);

class Box<T > {
    private item: T;
    private name: T;

    constructor(item: T, name: T) {
        this.item = item;
        this.name = name;
    }

    getItem(): T {
        return this.item;
    }
}
interface Pair<T , U> {
    first: T;
    second: U;
}
let demo:Pair<string,number> ;

let obj = new Box(9,9);
export default Person;
