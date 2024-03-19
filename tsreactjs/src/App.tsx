// loiktpc 05314

import logo from "./logo.svg";
import lab1 from "./lab/lab1/lab1";
import Lab1_4 from "./lab/lab1/lab1_4";
import Header from "./component/header";
import Lab2Bai3 from "./lab/lab2/lab2bai3";
import Lab3 from "./lab/lab3/lab3";
import Lab3Bai3 from "./lab/lab3/lab3bai3";
import IT from "./lesson/index";
import "./App.css";
// lab 1 Loiktpc 05314

// lab 2 loiktpc 05314
function App() {
    // lab 3:
    Lab3();

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
            <Lab3Bai3 />
        </div>
    );
}

export default App;
