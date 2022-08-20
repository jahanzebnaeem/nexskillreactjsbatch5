// jshint esversion:6

import React, { useState } from "react";

function App() {

  // var count = 0;

  // const state = React.useState(123);

  // console.log(state[0]);

  // rgb(9, 132, 227);
  // const rgb = [9, 132, 227];
  // const [red, green, blue] = [9, 132, 227];
  // console.log(red);

  const [count, setCount] = useState(0);


  // function increment() {

  // }

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

  // function App() {
  //   return <div />;
  // }

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
