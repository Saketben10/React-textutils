import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let uppertext = text.toUpperCase();
    setText(uppertext);
    props.alert("coverted to upper case" , "success:");
    props.alertcancel();
  };

  const handledownClick = () => {
    let lowertext = text.toLocaleLowerCase();
    setText(lowertext);
    props.alert("converted to lower case " , "success:");
    props.alertcancel();

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clear = () => {
    let wipetext = text.replace(`${text}`, "");
    setText(wipetext);
    props.alert("text has been cleared" , "success:");
    props.alertcancel();

  };
  const split = () => {
    let split2 = text.slice(0, text.length / 2);
    setText(split2);
    props.alert("your text has been trimmed into half", "success:");
    props.alertcancel();

  };

  const [text, setText] = useState("enter your text here too");
  console.log(props.mode10);
  return (
    <>
      <div style={{ color: props.mode10 === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control`}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleOnChange}
            value={text}
            style={{
              backgroundColor: props.mode10 === "light" ? "white" : "grey",
              color: props.mode10 === "light" ? "black" : "white",
            }}
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
      <div
        className="container my-4"
        style={{ color: props.mode10 === "light" ? "black" : "white" }}
      >
        <h1>Your word count here !</h1>
        <p>
          your text contains {text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>
          {0.005 * text.split(" ").length} to {0.003 * text.split(" ").length}{" "}
          minutes are required to read
        </p>
        <div className="container my-3">
          <h2>Preview</h2>
          <div
            className="container border"
            style={{
              backgroundColor: props.mode10 === "light" ? "white" : "#8e44ad",
            }}
          >
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
