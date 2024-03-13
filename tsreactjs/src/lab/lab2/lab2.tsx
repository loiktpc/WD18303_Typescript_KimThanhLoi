export const Lab2bai1 = () => {
    // 1. Sử dụng number, string, boolean
    let number1: number = 0;
    let number2: number = 2.8;
    let phrase: string = "kim thanh loi";
    let permit: boolean = false;
    number1 = 2;
    const result = number1 + number2;
    if (permit) {
        console.log(phrase + result);
    } else {
        console.log("không show kết quả");
    }

    // Type inference
    const add = (x = 5) => {
        let phrase = 1;
        phrase = 10;
        return (x = 2.8);
    };
    let results: number = add();

    // 3. Object
    let person: {
        name: string;
        age: number;
    };
    person = {
        name: "kim thanh loi",
        age: 11,
    } as const; // không thay đổi dữ diệu realonly
    console.log(person.name);
};

export const lab2bai4cau1 = () => {
    // 1. Array, tuple, any, enum
    enum Role {
        ADMIN,
        READ_ONLY,
        AUTHOR,
    }
    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role: number;
        roletuple: [number, string];
    } = {
        name: "kim loi",
        age: 21,
        hobbies: ["js", "java", "c#"],
        role: Role.ADMIN,
        roletuple: [2, "author"],
    };
    let favouriteActivites = [5, "sport", true];
    if (person.role == Role.AUTHOR) {
        console.log("is author  ");
    }

    person.roletuple.push("admin");
    person.roletuple[1] = "10";
    person.roletuple = [0, "admin"];
};
export const lab2bai4cau2 = () => {
    // Literal type & custom type
    type Combinable = number | string;
    const combine = (
        input1: Combinable,
        input2: number | string,
        resultConversion: "as-number" | "as-text",
    ) => {
        let result;
        if (
            typeof input1 === "number" &&
            typeof input2 === "number" &&
            resultConversion === "as-number"
        ) {
            result = input1 + input2;
        } else {
            result = input1.toString() + input2.toString();
        }
        return result;
    };
    const combineNumber = combine(30, 60, "as-number");
    console.log(combineNumber);

    const combineStringNumber = combine("30", "60", "as-text");
    console.log(combineStringNumber);
    const conbineText = combine("js", "java", "as-text");
    console.log(conbineText);
};
export const lab2bai4cau3 = () => {
    // Num & undefined
    let a = null;
    console.log(a);
    console.log(typeof a);

    let b;
    let undeclaredVar;
    console.log(b);
    console.log(typeof a);
    console.log(undeclaredVar);
};
export const lab2bai4cau4 = () => {
    // Unknown & any
    //  Kiểu unknown được sử dụng để mô tả một giá trị mà chúng ta không biết chắc chắn
    let userInput: unknown;
    let userName: string;

    userInput = 5;
    userInput = "kim loi";
    // userName = userInput ;
    // userName = <string> userInput ; ép kiểu
    userName = userInput as string; //  ép kiểu
    if (typeof userInput === "string") {
        userName = userInput;
    }
};
