// jshint esversion:6

import React from "react";

var isDone = false;

function strike() {
  // document.getElementsByTagName("p").style.textDecoration = "line-through";
  isDone = true;
}

function unStrike() {
  // document.getElementsByTagName("p").style.textDecoration = null;
  // console.log("unStrike");
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? {textDecoration: "line-through"} : null}>Buy milk</p>
      <button onClick={strike}>Strike Out</button>
      <button onClick={unStrike}>Un-Strike</button>
    </div>
  )
}

// document.getElementsByTagName("p").style.textDecoration = "line-through";

export default App