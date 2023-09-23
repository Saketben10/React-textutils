import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let uppertext = text.toUpperCase();
    setText(uppertext);
  };

  const handledownClick = () => {
    let lowertext = text.toLocaleLowerCase();
    setText(lowertext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clear = ()=>{
    let wipetext = text.replace(`${text}`, "");
    setText(wipetext);
  }
const split = ()=>{
  let split2 = text.slice(0 , (text.length/2));
  setText(split2);
}
  const [text, setText] = useState("enter your text here too");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
         to upper case
        </button>
        <button className="btn btn-primary mx-1" onClick={handledownClick}>
          to lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={clear}>
          to clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={split}>
        to split into half
        </button>
      </div>
      <div className="container my-4">
        <h1>Your word count here !</h1>
        <p>
          your text contains {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          {0.005 * text.split(" ").length} to {0.003 * text.split(" ").length}{" "}
          minutes are required to read
        </p>
        <div className="container my-3">
          <h2>Preview</h2>
       <div className="container border">
        <p>{text}</p>
       </div>
        </div>
      </div>
    </>
  );
}
