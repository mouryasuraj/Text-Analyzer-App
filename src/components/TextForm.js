import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text==='' ? props.showalert("Please write something to convert", "warning") : props.showalert("Converted to UpperCase", "success");
  };


  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text==='' ? props.showalert("Please write something to convert", "warning") : props.showalert("Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopy = () => {
    let copyText = document.getElementById("mybox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    text==='' ? props.showalert("Please write something to copy the text", "warning") : props.showalert("Copied", "success");

  };
  
  const handleExtraSpaces = () => {
    let des = text;
    let nText = text.split(/[ ]+/);
    setText(nText.join(" "));
    text==='' ? props.showalert("Please write below ", "warning") : text.length > des.length-1 ? props.showalert("Removed Extra Spaces", "success") : props.showalert("There is not extra spaces", "info");
  };

  const handelOnChanged = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div className="my-3 container">
        <div className="mb-3">
          <label htmlFor="mybox" className="my-3 form-label">
            {props.heading}
          </label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0a0b2f",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handelOnChanged}
            className="textarea form-control"
            id="mybox"
            rows="8"
            placeholder="write here"
          ></textarea>
          <button onClick={handleUpClick} className="btn btn-primary my-3">
            UpperCase
          </button>
          <button onClick={handleLwClick} className="btn btn-primary mx-2">
            LowerCase
          </button>
          <button onClick={handleCopy} className="btn btn-primary mx-2">
            Copy Text
          </button>
          <button onClick={handleExtraSpaces} className="btn btn-primary mx-2">
            Remove Extra Spaces
          </button>
          <button onClick={handleClearClick} className="btn btn-primary mx-2">
            Clear text
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your text summary </h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes read</p>
        <p>{text.split(".").length - 1} Sentences</p>
        <h2>Preview</h2>
      </div>
      <div className="container preview ">
        <p>
          {text === ""
            ? "Enter the text in above text area to preview it here"
            : text}
        </p>
      </div>
    </div>
  );
}
