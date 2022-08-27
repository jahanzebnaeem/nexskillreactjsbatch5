// jshint esversion:6

import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [headerText, setHeaderText] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function submitHandler(event) {
    setHeaderText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headerText}</h1>
      <form onSubmit={submitHandler}>
        <input 
        onChange={handleChange} 
        value={name}
        type="text" 
        placeholder="What's your name?" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
