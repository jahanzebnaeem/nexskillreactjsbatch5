// jshint esversion:6

import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <Avatar img="https://pbs.twimg.com/profile_images/1106789154153775104/LKbxj6Uj_400x400.jpg" />
      <h1 className="heading">My Contacts</h1>
      
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
      />
    </div>
  );
}

export default App;
