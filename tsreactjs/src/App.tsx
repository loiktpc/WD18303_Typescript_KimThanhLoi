// loiktpc 05314 

import logo from './logo.svg';
import lab1 from './lab/lab1/lab1' ;
import Lab1_4 from './lab/lab1/lab1_4' ;
import Header from './component/header' ;
import './App.css';
  
// lab 1 Loiktpc 05314

function App() {
  
 
  // lab 1 
  lab1.lab1bai1()
  console.log(lab1.lab1bai2());
  
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <Lab1_4  />
    </div>
    
  );
}

export default App;
