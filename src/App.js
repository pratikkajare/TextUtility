import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark Mode Enabled","success");
    document.title="TextUtils - DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
      document.title="TextUtils - LightMode";

      }
  }
 
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3 bellow">
    {/* <Routes>
          <Route path="/About" element={<About />}>
            
          </Route>
          
          <Route path="/" element={<TextForm heading="Enter value to Convert"  mode={mode}/>}>
          
          </Route>
        </Routes>         */}
        <TextForm heading="Enter value to Convert"  mode={mode}/>
    </div>
    {/* </Router> */}
  </>
  );
}

export default App;
