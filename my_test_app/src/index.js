// jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';

const customeStyle = {
  color: "orange",
  fontSize: "24px",
  border: "1px solid black",
}

customeStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customeStyle}>Hello World</h1>
    <ul>
      <li>Pizza</li>
      <li>Biryani</li>
      <li>Nihari</li>
    </ul>
  </div>, 
document.getElementById("root"));