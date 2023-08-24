import React, { useState } from 'react'
import Links from './Links'
import { jsPDF } from "jspdf";
import HelveticaNeueBd from "../font/Poppins-Bold.ttf"
import HelveticaNeueMed from "../font/Poppins-Regular.ttf"

export default function Textarea(props) {

  const [text,setText] = useState('')
  const jspdf = new jsPDF('p','pt','letter')

  const handleChange=(event)=>{
    console.log("seems like u tryin to mess")
    setText(event.target.value)
}

  const handleUpper = () =>{
    console.log("upper btn was clicked")
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleClear = () =>{
    console.log("clear btn was clicked")
    setText('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = text;
    const doc = new jsPDF();
    doc.addFont(HelveticaNeueBd, 'customBold', 'normal');
    doc.addFont(HelveticaNeueMed, 'customMedium', 'normal');

    const lines = val.split('\n');
    let yOffset = 10;
    const lineHeightFirst = 15; 
    const lineHeightRemaining = 6; 

    for (let i = 0; i < lines.length; i++) {
      const fontName = i === 0 ? 'customBold' : 'customMedium';
      const fontSize = i === 0 ? 20 : 15;
      const lineHeight = i === 0 ? lineHeightFirst : lineHeightRemaining;

      doc.setFont(fontName);
      doc.setFontSize(fontSize);
      doc.text(10, yOffset, lines[i]);
      yOffset += lineHeight;
    }

    doc.save('demo.pdf');
  }

  return (
    <div>
    <div className="mb-3 container my-3 px-5">
    <h2 className={`text-${props.mode=='dark'?'light':'dark'}`}>Enter Your Text Here</h2>
    <br />
    <textarea className={`form-control txt bg-${props.mode=='light'?'light':'secondary'} text-${props.mode=='dark'?'light':'dark'}`} id="exampleFormControlTextarea1" rows="9" value={text} name='txt' onChange={handleChange} ></textarea>
    </div>
    <br />
    <button type="button" className="btn btn-primary mx-2" onClick={handleUpper}>Caps</button>
    <button type="button" className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
    <button type="button" className="btn btn-info mx-2" onClick={(e)=>handleSubmit(e)}>Convert to PDF</button>
    </div>
  )
}
