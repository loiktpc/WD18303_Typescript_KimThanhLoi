const Lab3 = () => {
    // BÀI 1
    const cau1tinhtong = (): number => {
        return 1 + 1;
    };

    const cau1b_tinhtong = (
        a: number = 2,
        b?: number,
        ...rest: any
    ): number => {
        let total: number = 0;
        console.log(a, b);

        rest.forEach((item: number) => {
            total += item;
        });
        return total;
    };
    console.log(cau1b_tinhtong(2, 1, 3, 4, 3));
    // ARRAY
    const dev = ["JS", "PHP", "JAVA"];
    const activedev = ["C#"];
    let newdev = [...dev, ...activedev];
    console.log("check new dev:", newdev);
    console.log();
    activedev.push(dev[0], dev[1]);
    activedev.push(...dev);
    console.log("check activedev:", activedev);

    // BÀI 2
    // 1. Function & void
    let sum = (x: number, y?: number) => {
        if (y !== undefined) {
            return x + y;
        }
        return x;
    };
    let speech = (output: any): void => {
        console.log("result:", output);
    };
    speech(sum(10, 10));
    console.log(speech(sum(20, 10)));

    // 2. Never & void
    let something: void = undefined;
    let nothing: never | null = null;
    const throwError = (messError: string): never => {
        throw new Error(messError);
    };

    // 3. Function & callback
    const AddandHandle = (x: number, y: number, cb: (num: number) => void) => {
        const result = x + y;
        cb(result);
    };
    AddandHandle(10, 20, (result) => {
        console.log(result);
    });

    // LAb 3.5 bài thêm

    // 1
    // So sánh cách viết arrow function với function thông thường trong TypeScript. ?
    // Arrow function:
    // Cú pháp ngắn gọn hơn.
    // Không có this riêng.
    // Không có arguments object.
    // Không thể sử dụng làm constructor.
    // Không thể sử dụng làm method cho object.

    // Function thông thường:
    // Cú pháp dài dòng hơn.
    // Có this riêng.
    // Có arguments object.
    // Có thể sử dụng làm constructor.
    // Có thể sử dụng làm method cho object.

    const nhandoimotso = (a: number): void => {
        console.log("check Nhân đôi 1 số: ", a * 2);
    };
    nhandoimotso(2);

    // 2
    const travetong2so = (a: number = 0, b: number = 0): number => {
        return a + b;
    };
    console.log("check tổng 2 số :", travetong2so(1, 1));

    const chuoidaonguoc = (str: string): string => {
        const newchuoi = str.split("").reduce((acc, item) => {
            return item + acc;
        }, "");
        console.log("check chuoidaonguoc", newchuoi);
        return newchuoi;
    };
    chuoidaonguoc("kimthanhloi");

    // 3
    type dinhnghiadulieu = number | string;

    let number1: dinhnghiadulieu = 10;
    let number2: dinhnghiadulieu = 5;

    const nhan2hamsotrave1so = (x: number, y?: number): number => {
        return x;
    };
    nhan2hamsotrave1so(number1, number2);

    // Tạo một biến có kiểu là một hàm và gán một hàm cộng hai số vào đó.
    type AddFunction = (x: number, y: number) => number;
    let biencogiatrilaham: AddFunction;

    biencogiatrilaham = (x, y) => {
        return x + y;
    };
    console.log(
        "check hàm có biến có giá trị là hàm:",
        biencogiatrilaham(2, 2),
    );

    //  4

    const hamtinhtongarr = (arr: any) => {
        let total = 0;
        arr.forEach((item: number) => {
            total += item;
        });
        return total;
    };
    console.log("check hàm tính tổng:", hamtinhtongarr([1, 2, 3]));

    const hamcothenhan1so = (...rest: any) => {
        let total = 0;
        rest.forEach((item: number) => {
            total += item;
        });
        return total;
    };
    console.log(
        "check hàm nhận các số ko xác định bao nhiêu tham số",
        hamcothenhan1so(1, 2, 3),
    );

    // 5
    const hambinhphuongthamso = (a = 2) => {
        return a * a;
    };
    console.log(
        "check hàm bình phương của tham số mặc định:",
        hambinhphuongthamso(),
    );
    const hamgiatrimacdinhdetinhtong = (a = 1, b = 1) => {
        return a + b;
    };
    console.log(
        "check hàm có giá trị mặc định tính tổng của 2 số:",
        hamgiatrimacdinhdetinhtong(),
    );

    // 6

    const hamcothamsotuychon = (a: any = "mặc định") => {
        return a;
    };
    console.log("check hàm có ham số tùy chọn :", hamcothamsotuychon());
    console.log("check hàm có ham số tùy chọn :", hamcothamsotuychon(1));

    // 7

    const arr = [1, 2, 3, 4, 5];

    const hamtinhtongspread = (...rest: number[]) => {
        return rest.reduce((total, num) => total + num, 0);
    };
    console.log("check hàm tính tổng spread:", hamtinhtongspread(...arr));

    const hamtinhtongdoisokhongxacdinh = (...rest: number[]) => {
        return rest.reduce((total, num) => total + num, 0);
    };
    console.log(
        "check hàm tính tổng đối số ko sác định:",
        hamtinhtongdoisokhongxacdinh(1, 1, 1),
    );
    // 8
    const Hamrestparamstinhtongsokhongxacdinh = (...rest: number[]) => {
        return rest.reduce((total, num) => total + num, 0);
    };
    console.log(
        "check hàm nhận một số lượng biến đối số không xác định, sau đó tính tổng của chúng:",
        Hamrestparamstinhtongsokhongxacdinh(1, 1),
    );

    // 9
    const hamkhongtravegiatri = (): void => {
        console.log("hàm ko trả về giá trị ");
    };
    hamkhongtravegiatri();

    const hamvoidkhongtrave = (): void => {
        let a;
        let b;
    };
    hamvoidkhongtrave();

    // 10

    //So sánh sự khác nhau giữa never và void trong TypeScript ?
    // void:
    // void được sử dụng để chỉ ra rằng một hàm không trả về bất kỳ giá trị nào.
    // kiểu trả về là void, nó có thể trả về undefined
    // Ít sử dụng, chỉ gán undefined
    // => Giúp code dễ hiểu , hàm không trả về giá trị.

    // never:
    // never được sử dụng khi một hàm không bao giờ kết thúc
    // hoặc không bao giờ trả về bất kỳ giá trị nào.
    // Không thể gán giá trị
    // thường dùng:
    // Vòng lặp vô hạn.
    // Hàm ném lỗi. Ví dụ:
    const throwErrors = (): never => {
        throw new Error("quăng Lỗi!");
    };

    // throwErrors();
    const loopForever = (): never => {
        while (true) {
            console.log("Vòng lặp vô hạn!");
        }
    };
    // loopForever();

    const sayLoi = (): void => {
        console.log("Hi LOi!");
    };

    sayLoi();

    let result = sayLoi(); // result là undefined
};
export default Lab3;
