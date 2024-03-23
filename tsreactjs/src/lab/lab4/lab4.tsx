const lab4 = async () => {
    // Bài 1: Interface như là 1 function
    interface AddFn {
        (a: number, b: number): number;
    }
    let add: AddFn;
    add = (a: number, b: number) => {
        return a + b;
    };
    console.log("check add:", add(2, 3));

    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): {
        color: string;
        area: number;
    } {
        let newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({ color: "black" });
    console.log("check mySquare", mySquare);

    // Bài 2: Interface và kế thừa

    interface Named {
        readonly name?: string;
        outputName?: string;
    }
    interface Greetable extends Named {
        greet(plarse: string): void;
    }
    // silde hướng dẫn sai báo lỗi

    class Person implements Greetable {
        name: string;
        outputName?: string;

        constructor(name: string, outputName?: string) {
            this.name = name;
            this.outputName = outputName;
        }

        greet(phrase: string) {
            console.log(`${phrase}, ${this.name}!`);
        }
    }

    let user1: Greetable;

    user1 = new Person("Kim", "Loi");
    user1.greet("2 loi");
    console.log("check user1", user1);

    // Bài 3 Class
    abstract class Department {
        static fiscaYear = 2022;
        protected emloyess: string[] = [];

        constructor(
            protected readonly id: string,
            public name: string,
        ) {}
        static createEmloyess(name: string) {
            return { name: name };
        }
        abstract describe(this: Department): void;

        addEmployee(name: string) {
            this.emloyess.push(name);
        }
        printEmployee() {
            console.log(this.emloyess.length);
            console.log(this.emloyess);
        }
        getId(): string {
            return this.id;
        }
    }
    class ITDeparment extends Department {
        admins: string[] = [];
        constructor(id: string, admins: string[]) {
            super(id, "IT");
            this.admins = admins;
        }
        describe(this: Department): void {
            // console.log("IT Department - ID:", this.id);
            console.log("IT Department - ID:", this.getId());
        }
        getarr() {
            console.log("check trong mảng arradmin:", this.admins);
        }
    }
    const employee1 = Department.createEmloyess("fpt"); // gọi trực tiếp static

    console.log("check employee1", employee1);
    console.log("check Department.fiscaYear", Department.fiscaYear);

    const itDept = new ITDeparment("softWareCantho", ["Loi", "hieu"]);
    itDept.describe();
    itDept.getarr();

    itDept.addEmployee("hieu");
    itDept.addEmployee("duy");
    itDept.printEmployee();
};

export default lab4;
