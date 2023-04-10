
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Studentform(props) {
    const [text, setText] = useState('Message');
    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const clickforuppercase = () =>{
        console.log("uppercase was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const clickforlowercase = () =>{
        let lowercas = text.toLowerCase();
        setText(lowercas)
    }
    const clickforclear = () =>{
        let clickredo =(" ")
        setText(clickredo)
    }
    const clickforcapitialize = () =>{
        let str2 = text.charAt(0).toUpperCase() + text.slice(1);
        setText(str2)
        console.log(text.split(" ").length);
        let newnum = (text.split(" ").length);
        console.log(newnum);
      
    }
    const clickforprint =()=>{
        window.print();
    }
  return (
    <>
    <div className='container mt-5'>
        <h1>{props.heading}</h1>
        <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="stuform" rows="8"></textarea>
            <button className="btn btn-primary my-3" onClick={clickforuppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-5" onClick={clickforlowercase}>Convert to lowercase</button>
            <button className="btn btn-primary my-3" onClick={clickforcapitialize}>Convert to normal</button>
            <button className="btn btn-primary my-3 mx-5" onClick={clickforclear}>click for clear </button>
            <button className="btn btn-primary my-3 mx-5" onClick={clickforprint}>click for prints </button>
        </div>
    </div>
    <div className="container my-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} :words and {text.length} :characters</p>
    </div>
    </>
  )
}

Studentform.propTypes = {
    heading: PropTypes.string

}