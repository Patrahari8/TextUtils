// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const [changeBgs, setChangeBg] = useState("light");
  const changeBg =(color)=>{
    setChangeBg(color)
    document.body.style.backgroundColor = color;
    showAlert((color==="#cfe2ff")?"Blue Theme is Activated":(color==="#f1aeb5")?"Red Theme is Activated":"Green Theme is Activated", 'success');
  }

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      setChangeBg("dark");
      document.body.style.backgroundColor = "rgb(24 39 62)";
      showAlert("Dark Mode Is Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Enabled", "success");
      document.title = "TextUtils - Light Mode";

    }
   
}
  return (
    
    <>
    {/* <Navbar title="Dragon" aboutText="About Us"/> */}
    {/* <Router> */}

    <Navbar changeBg={changeBg} changeBgs={changeBgs} title="Dragon" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    {/* <Navbar/> */}
    <div className="container my-3">
    {/* <Routes>
          <Route exact path='/about' element={<About />}>
            
          </Route> */}
          {/* <Route exact path='/' element={<TextForm changeBgs={changeBgs} showAlert={showAlert} heading="Enter The Text to analyze below" mode={mode}/>
}>
          </Route> */}
          <TextForm changeBgs={changeBgs} showAlert={showAlert} heading="Enter The Text to analyze below" mode={mode}/>
    {/* </Routes> */}
    </div>

    {/* </Router> */}


    
    </>
    
  );
}

export default App;
