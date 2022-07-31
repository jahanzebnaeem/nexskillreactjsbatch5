// jshint esversion:6

import React from "react";
// import Login from "./Login";

// var isLoggedIn = true;

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// function renderLoggedIn() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>
//   } else {
//     return (
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

// function App() {
//   return <div className="container">
//     {renderLoggedIn()}
//   </div>
// }

// function App() {
//   return <div className="container">
//     if (isLoggedIn === true) {
//       return <h1>Hello</h1>
//     } else {
//       return (
//         <form className="form">
//           <input type="text" placeholder="Username" />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Login</button>
//         </form>
//       );
//   }
//   </div>
// }

// Expression && Expression

// Expression && Expression
// Condition && Expression

// true && Expression
// false

const currentTime = new Date(2022, 7, 31, 17).getHours();
console.log(currentTime);


function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {/* { currentTime > 16 ? <h1>Bye bye</h1> : <h2>Welcome</h2> } */}
      { currentTime > 16 && <h1>Bye bye</h1> }
    </div>
  )
}

export default App;
