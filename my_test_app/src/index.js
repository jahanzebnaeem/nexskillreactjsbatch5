// jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
// import pi, {doublePi, triplePi} from './math';
import * as Pi from './math';

ReactDOM.render(
  <ul>
    <li>{Pi.default}</li>
    <li>{Pi.doublePi()}</li>
    <li>{Pi.triplePi()}</li>
  </ul>, 
document.getElementById("root"));