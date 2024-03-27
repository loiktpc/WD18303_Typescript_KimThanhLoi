// loiktpc 05314
import lab1 from "./lab/lab1/lab1";
import Lab1_4 from "./lab/lab1/lab1_4";
import Header from "./component/header";
import Lab2Bai3 from "./lab/lab2/lab2bai3";
import Lab3 from "./lab/lab3/lab3";
import Lab3Bai3 from "./lab/lab3/lab3bai3";
import IT from "./lesson/index";
import lab4 from "./lab/lab4/lab4";
import Lab4bai4 from "./lab/lab4/lab4bai4";
import Lab5 from "./lab/lab5/lab5";
import Lab5Bai5FormLogin from "./lab/lab5/lab5bai5";
import "./App.css";

// pc05314
function App() {
    // Lab5
    Lab5();

    // lab4 :
    // lab4();

    // let fpt = new IT("kim", 12, "kim");
    // console.log(fpt);

    // lab 3:
    // Lab3();

    // Lab2Bai3();

    // lab 1
    // lab1.lab1bai1()
    // console.log(lab1.lab1bai2());

    // lab 2

    return (
        <div className="App">
            <header className="App-header">
                <Header />
            </header>
            {/* <Lab1_4  /> */}
            {/* <Lab2Bai3  /> */}
            {/* <Lab3Bai3 /> */}
            {/* <Lab4bai4 /> */}
            <Lab5Bai5FormLogin />
        </div>
    );
}

export default App;
