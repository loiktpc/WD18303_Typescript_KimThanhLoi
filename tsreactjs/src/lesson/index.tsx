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

    constructor(namefpt: string, age: number) {
        super(namefpt);
        this.age = age;
    }

    greet() {
        return console.log("Hello, " + this.age);
    }
}
export default IT;
