import React, {useState} from 'react'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export function TextForm(props) {
  const[text,setText]=useState('Enter text here');
  
    const handleUpClick = ()=>{
    //   setText("to upper case");
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
    } 
    


    // #convert to lower case----
    const handleLoClick = ()=>{
    //   setText("to upper case");
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
    }

    // #copy button---
    const handleCopy = ()=>{
      // console.log('i am copy');
      var text = document.getElementById("myBox");
      text.select();
     
      navigator.clipboard.writeText(text.value);
    }

    // #handleclearclick-----
    const handleClearClick=()=>{
      let newText=" ";
      setText(newText);
    }

    // #RemoveExtraSpaces-----
    // const handleExtraSpaces = () => {
    //   let newText = text.split(/[ ]+/);
    //   setText(newText.join(" "))
    // }
    // const [text, setText] = useState('');


    // #capitalize function ---
    const handleCapitalizeClick= ()=> {
      let newText=text.charAt(0).toUpperCase() +
      text.slice(1);
      setText(newText);
    }
    
    

    const handleOnChange = (event)=>{
        // console.log('onchange');
        setText(event.target.value);
    }
    
  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'#080a31'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#080a31':'white', color: props.mode==='dark'?'white':'#080a31'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>ClearText</button>
<button className="btn btn-primary mx-1 my-2" onClick={handleCapitalizeClick}>Capitalize</button>
<button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>CopyText</button>
{/* <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>RemoveExtraSpaces</button> */}
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#080a31'}}>
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} words,{text.length} characters</p>
        <p>{.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something  to preview it here"}</p>
    </div>
    </>
  )
}

export default TextForm
