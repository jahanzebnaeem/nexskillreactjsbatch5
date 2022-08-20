// jshint esversion:6
import React, {useState} from "react";

function App() {
  const [headingText, setHeadingText] = useState("Submit");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function clickHandler() {
    setHeadingText("Submitted");
  }

  function onMouseOver() {
    setIsMouseOver(true);
  }
  
  function onMouseOut() {
    setIsMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor : isMouseOver ? "black" : "white"}} 
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={clickHandler}>{headingText}</button>
    </div>
  );
}

export default App;
