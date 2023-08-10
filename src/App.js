import React from 'react';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Forms from './components/Forms';
import Navbar  from './components/Navbar';
import About from './components/About';
import { BrowserRouter, Route,Routes } from "react-router-dom";


function App() {
const [mode,setMode] =useState('light');
const [alert,setAlert] = useState(null);

const showAlert =(message,type) => {
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}

const toggleMode= ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert("Dark mode is enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode is enabled","success");
  }
}

      return (<>
      
      
      <BrowserRouter >
      <Navbar Logo="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      
      <Routes>
        <Route path="/About" element={<About mode={mode}/>}/> 
        <Route path="/" element={ <Forms mode={mode} showAlert={showAlert}/> }/> 
      </Routes>
      </div>
      </BrowserRouter>
      </>
      );
    }
    Navbar.prototype ={
      Logo:"TextUtils",
    };
    export default App;
