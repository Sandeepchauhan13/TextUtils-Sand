import React from 'react'
// import React, {useState} from 'react'

function About(props) {
    // const [myStyle, setMyStyle]= useState({
    //     color:'white',
    //     backgroundColor:'#080a31'
    // })
    let myStyle = {
      color: props.mode ==='dark'?'white':'#231141',
      backgroundColor:props.mode ==='dark'?'#231141':'white',
      border: '1px solid ', borderColor: props.mode==='dark'?'white':'#231141'
    }
// const [btntext, setBtnText]= useState("Enable Light Mode")

  // const  toggleStyle = ()=>{
  //      if (myStyle.color =='#080a31'){
  //       setMyStyle({
  //           color:'white',
  //           backgroundColor:'#080a31'
  //       })
  //       setBtnText("Enable Dark Mode");
  //      }
  //      else{
  //       setMyStyle({
  //           color:'#080a31',
  //           backgroundColor:'white'
  //       })
  //       setBtnText("Enable White Mode");
  //      }
  //   }
  return (
    <div className="container" style={myStyle}>
        <h3 className='my-2'>About Us</h3>
      <div className="accordion" id="accordionExample"style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>   Analyze Your Text</strong>  
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong> Free to use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutils is a free character coujnter tool that provides instant character count & word count statistics for a given text. Textutils reports that number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>  Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any web browser such as Chrome, Internet Explorer, safari, Opera, It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3"> */}
{/* <div classname="form-check form-switch"> */}
  {/* <input classname="form-check-input" onClick={toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
  {/* <label classname="form-check-label" for="flexSwitchCheckDefault">{btntext}</label> */}
{/* </div> */}
{/* </div> */}
    </div>
  )
}

export default About;
