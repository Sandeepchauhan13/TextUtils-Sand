import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';

import Alert from './component/Alert';
import About from './component/About';
import TextForm from './component/TextForm';



function App() {
  const [mode, setMode]= useState('light');//whether dark mode is enabled or not
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }
  const toggleMode= ()=>{
   if(mode=== 'light'){

      setMode('dark');
      document.body.style.backgroundColor='#080a31';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
   <>
   {/* <BrowserRouter> */}
   {/* <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/Textform">TextForm</Link>
   </div> */}
      <Navbar title="TextUtils" mode={mode} about="About" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    {/* <Routes> */}
      {/* <Route path='/' element={<About/>}></Route> */}
      {/* <Route path='/about' element={<About/>}></Route> */}
     
      {/* <Route path='/textform' element= */}
  {/* {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}></Route>  */}

      {/* </Routes> */}
 {/* </BrowserRouter> */}
 {/* <Navbar title="TextUtils" mode={mode} about="About" toggleMode={toggleMode}/> */}
 {/* <Alert alert={alert}/> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>


   <div className="container">

   
   
  
   </div>
   </>
  );
}

export default App;
