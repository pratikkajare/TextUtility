import React, {useState} from 'react';

export default function TextForm(props) {
    const handleOnClick=()=>{
        console.log("Button Fired"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
        
    }
    const handleloClick=()=>{
        console.log("Button Fired"+text);
        let newText=text.toLowerCase();
        setText(newText);
        
    }
    const handleInvClick=()=>{
        console.log("Button Fired"+text);
        let newText=text.split("").reverse().join("");
        setText(newText);
        
    }
    const handleclearClick=()=>{
        console.log("Button Fired"+text);
        let newText='';
        setText(newText);
        
    }
    const [text, setText] = useState('Enter Text Here..');
    return (
        <>
        <div className="container">
            <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleOnClick} >Convert to Uppercase</button>
            <button className="btn btn-danger mx-2 my-2" onClick={handleloClick} >Convert to Lowercase</button>
            <button className="btn btn-secondary mx-2 my-2" onClick={handleInvClick} >invert</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handleclearClick} >Clear</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.length>0?text.trim().split(" ").filter((element)=>{return element.length!=0} ).length:0} Words and {text.length} Characters</p>
            <p>{text.length>0?0.008*text.trim().split(" ").length:"0"} Minutes to read </p>
            <h2 className="h22">PREVIEW</h2>
            <div className="alert alert-dark" role="alert">{text.length>0?text:"Enter Something"}</div>
        </div>
        </>
    )
}
