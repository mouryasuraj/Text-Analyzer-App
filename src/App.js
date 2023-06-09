import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#14153d";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Analyzer - Home (Dark Mode)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Analyzer - Home ";
    }
  };

  return (
    <>
        <Navbar
          title={"Text Analyzer"}
          mode={mode}
          toggleMode={toggleMode}
          about="About"
          home='Home'
        />
        <Alert alert={alert} />
        <div className="container">
        <TextForm
                  showalert={showAlert}
                  mode={mode}
                  heading="Enter the Text to analyze below"
        />
        {/* <About mode={mode} /> */}
          
        </div>
    </>
  );
}

export default App;
