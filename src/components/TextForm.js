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

   const handleSenCase = () => {
    let newText = text.toLowerCase().split(". ");
    let sentenceCased = newText.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    setText(sentenceCased.join('. '));
   }

   const handleSpChars = () => {
    let newText = text.replace(/[^a-zA-Z0-9 ]/g, "");
    setText(newText);
    props.showAlert("Special characters removed", "success");
   }

   const handleExText = () => {
    let newText = text.match(/[a-z]|[A-Z]|[.]|[ ]/g);
    if(newText === null){
      setText('')
      props.showAlert("No Text found, try again", "warning");
    } else {
      setText(newText.join(''))
    }
   }
   
   const handleClear = () => {
     let newText = "";
     setText(newText);
   };

   const handleCopyClick = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success")
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
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#151517" }}
      >
        <div className="form-group my-3">
          <h1>{props.heading} </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
            style={{
              backgroundColor: props.mode === "dark" ? "#151517" : "white",
              color: props.mode === "dark" ? "white" : "#151517",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpCase}
        >
          Upper Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowCase}
        >
          Lower Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSenCase}
        >
          Sentence Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpace}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpChars}
        >
          Remove Special Characters
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExText}
        >
          Extract Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Nothing to preview here!!"}
        </p>
      </div>
    </>
  );
}
