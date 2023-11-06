import React, {useState} from 'react'

export default function TextForm(props) {
   const [text, setText] = useState("");

   const handleUpCase = () => {
     let newText = text.toUpperCase();
     setText(newText)
   };

   const handleLowCase = () => {
     let newText = text.toLowerCase();
     setText(newText);
   };
   
   const handleClear = () => {
     let newText = "";
     setText(newText);
   };

   const handleCopyClick = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
   };

   const handleSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
   }

   const handleOnChange = (e) => {
     setText(e.target.value);
   };
 
  return (
    <>
      <div className="container">
        <div className="form-group">
          <h1>{props.heading} </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCase}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowCase}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
