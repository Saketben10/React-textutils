import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (massage, type) => {
    setalert({
      msg: massage,
      typ: type,
    });
  };

const alertGone = ()=>{
  setTimeout(()=>{
    setalert(null);
  },1500);
}

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0984e3";
      alertGone();

      
      showAlert("dark mode has been enabled", "success: ");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success: ");
      alertGone();

    
    }
  };

  return (
    <>
      <Navbar title="Text Utils" mode1={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter your text here to analyze" mode10={mode} alert = {showAlert} alertcancel = {alertGone}/>
      </div>

      <div className="container my-3">
        {/* <Textform heading ="Enter your text here to analyze"  /> */}
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
