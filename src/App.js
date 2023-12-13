import  { useState } from 'react'
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
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode= (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
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
   <BrowserRouter>
   {/* <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/Textform">TextForm</Link>
   </div> */}
      <Navbar title="TextUtils" mode={mode} about="About" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    <Routes>
      <Route path='/about' element={<About mode={mode} />}></Route>
      {/* <Route path='/about' element={<About/>}></Route> */}
     
      <Route path='/' element=
   {<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Lower to Upper Case etc." mode={mode}/>}></Route>

      </Routes>
 </BrowserRouter>
 {/* <Navbar title="TextUtils" mode={mode} about="About" toggleMode={toggleMode}/> */}
 {/* <Alert alert={alert}/> */}
{/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}


   <div className="container">

   
   
  
   </div>
   </>
  );
}

export default App;
