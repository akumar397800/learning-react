import React, { useState } from 'react';



export default function Textform(props) {
    const [text, setText] = useState('Enter Text here2');

    const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
    }

    const handleUpClick = () => {
       // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const handleClearClick = () => {
       // console.log("Uppercase was clicked");
        let newText = '';
        setText(newText);
        
    }
    const link = () => {
        window.open("https://www.google.com");
    }
  return (
      <div>
          <h1>{ props.heading}</h1>
          <textarea className='form-control' value={text} onChange={handleOnChange} id='mybox' rows='3' ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-success mx-2'   onClick={link}>google </button>
          <button className='btn btn-success mx-2' onClick={handleClearClick}>Clear Text </button>
          <h3>preview</h3>
          <textarea className='form-control' value={text}   id='mybox' rows='8' ></textarea>
         
     </div>
  )
}
