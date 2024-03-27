const Lab5 = () => {
    // Bài 1: Intersection Type
    type Admin = {
        name: string;
        Privileges: string[];
    };
    type Employee = {
        name: string;
        startDate: Date;
    };
    type ElevatedEmployee = Admin & Employee;

    // Bài 2: Type guard
    class Car {
        drive() {
            console.log("Driving...");
        }
    }
    class Truck {
        drive() {
            console.log("Driving... a truck");
        }
        loadCargo(amount: number) {
            console.log("Loading cargo..." + amount);
        }
    }
    type Vehicle = Car | Truck;

    const v1 = new Car();
    const v2 = new Truck();
    v1.drive();
    v2.loadCargo(100);

    function useVehicle(vehicle: Vehicle) {
        vehicle.drive();
        if (vehicle instanceof Truck) {
            vehicle.loadCargo(1000);
        }
    }
    useVehicle(v1);
    useVehicle(v2);

    // Bài 3: Discriminated unions
    interface Bird {
        type: "Bird";
        flyingSpeed: number;
    }
    interface Horse {
        type: "Horse";
        runningSpeed: number;
    }
    type Animal = Bird | Horse;

    function moveAnimal(animal: Animal) {
        let speed;
        switch (animal.type) {
            case "Bird":
                speed = animal.flyingSpeed;
                break;
            case "Horse":
                speed = animal.runningSpeed;
                break;
        }
        console.log("Moving at speed :" + speed);
    }
    let dongvat: Animal = {
        type: "Horse",
        runningSpeed: 20,
    };
    moveAnimal(dongvat);

    // Bài 4: Generic
    function merge<T extends object, U extends object>(objA: T, objB: U) {
        return Object.assign(objA, objB);
    }
    const mergedObj = merge({ name: "Max", hobiies: ["sports"] }, { age: 30 });
    console.log("check  mergedObj:", mergedObj);

    // Generic interface
    interface Lengthy {
        length: number;
    }

    function countAndDescruibe<T extends Lengthy>(element: T): [T, string] {
        let descriptionText = "got no value";
        if (element.length === 1) {
            descriptionText = "Got 1 element";
        } else if (element.length > 1) {
            descriptionText = "Got " + element.length + " elements";
        }
        return [element, descriptionText];
    }
    let demleng = {
        length: 20,
    };
    console.log("check countAndDescruibe", countAndDescruibe(demleng));

    // Generic class
    class DataStorege<T extends string | number | Boolean> {
        private data: T[] = [];

        addItem(item: T) {
            this.data.push(item);
        }
        removeItem(item: T) {
            if (this.data.indexOf(item) === -1) {
                return;
            }
            this.data.splice(this.data.indexOf(item), 1);
        }
        getItems() {
            return [...this.data];
        }
    }
    const textStorage = new DataStorege<string>();
    textStorage.addItem("Max");
    textStorage.addItem("Kim");
    textStorage.removeItem("Max");
    console.log(textStorage.getItems());

    const numberStorage = new DataStorege<number>();
    numberStorage.addItem(1);
    numberStorage.addItem(2);
    numberStorage.addItem(3);
    numberStorage.removeItem(3);
    console.log(numberStorage.getItems());
};
export default Lab5;
