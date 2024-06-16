import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleDownClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");

    }
    const handleRevClick =()=>{
        let newText = text.split(" ").reverse().join(" ");
        setText(newText)
        props.showAlert("Reversed sucessfully!", "success");

    }
    const handleClearClick =()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Cleared!", "success");

    }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }


    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container" style={{color:props.mode === "dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="5"
          style={{backgroundColor:props.mode === "dark"?"grey":"white", color:props.mode === "dark"?"white":"black"}}
        ></textarea>
      </div>
      <button className={`btn btn-${props.changeBgs==="#cfe2ff"?"info":(props.changeBgs==="#f1aeb5")?"danger":(props.changeBgs==="#a3cfbb")?"success":"primary"} mx-1`} onClick={handleUpClick}>Convert to UpperCase</button>
      <button className={`btn btn-${props.changeBgs==="#cfe2ff"?"info":(props.changeBgs==="#f1aeb5")?"danger":(props.changeBgs==="#a3cfbb")?"success":"primary"} mx-1`} onClick={handleDownClick}>Convert to LowerCase</button>
      <button className={`btn btn-${props.changeBgs==="#cfe2ff"?"info":(props.changeBgs==="#f1aeb5")?"danger":(props.changeBgs==="#a3cfbb")?"success":"primary"} mx-1`}onClick={handleRevClick}>Reverse the sentance</button>
      <button className={`btn btn-${props.changeBgs==="#cfe2ff"?"info":(props.changeBgs==="#f1aeb5")?"danger":(props.changeBgs==="#a3cfbb")?"success":"primary"} mx-1`} onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container" style={{color:props.mode === "dark"?"white":"black"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter(word=>word!=='').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box above to preview it here"}</p>
    </div>
    </>
  );
}
