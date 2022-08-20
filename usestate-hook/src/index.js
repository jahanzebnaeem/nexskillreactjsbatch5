// jshint esversion:6

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// var count = 0;

// function increment() {
//   count++;
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//     </div>,
//     document.getElementById("root")
//   );
// }

// ReactDOM.render(
//   <div className="container">
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
//   </div>,
//   document.getElementById("root")
// );


ReactDOM.render (
  <App />, 
  document.getElementById("root")
);