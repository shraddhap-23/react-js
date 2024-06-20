import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react'


export default function TextForm(props) {
    
    const [text, setText] = useState('');

    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convert to uppercase|", "success");
    }

    const lower =()=>{
        console.log("lower was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert to lovercase|", "success");
    }
    const clear =()=>{
        console.log("clear was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text clear|", "success");
    }

    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handlecopy =()=>{
        // text.select();
        console.log(text)
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipbord|", "success");
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed|", "success");
    }


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn.primary mx-2" style={{backgroundColor: "blue", color: 'white'}} onClick={handleUpClick}>convert to upercase</button> 
        <button className="btn btn.primary mx-2" style={{backgroundColor: "blue", color: 'white'}} onClick={lower}>convert to lowercase</button> 
        <button className="btn btn.primary mx-2" style={{backgroundColor: "blue", color: 'white'}} onClick={clear}> clear</button>
        <button className="btn btn.primary mx-2" style={{backgroundColor: "blue", color: 'white'}} onClick={handlecopy}> copy Text</button>
        <button className="btn btn.primary mx-2" style={{backgroundColor: "blue", color: 'white'}} onClick={handleExtraSpaces}>Remove Extra Space </button>

    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2> your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>

    </div>
   </>
  )
}
