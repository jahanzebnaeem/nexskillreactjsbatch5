// jshint esversion:6

import React, {useState} from "react";

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  // function updateFName(event) {
  //   // fName = event.target.value;
  //   setFName(event.target.value);
  // }

  // function updateLName(event) {
  //   // lName = event.target.value;
  //   setLName(event.target.value);
  // }

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    
    // console.log(newValue);
    // console.log(inputName);

    // if (inputName === "fName") {
    //   setFullName({fName: newValue});
    // } else if (inputName === "lName") {
    //   setFullName({lName: newValue});
    // }

    const { value, name } = event.target;

    console.log(name, value);

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      Hello {fullName.fName} {fullName.lName}
      <form>
        <input 
          name="fName" 
          placeholder="First Name" 
          onChange={handleChange}
          value={fullName.fName}
        />
        <input 
          name="lName" 
          placeholder="First Name" 
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
