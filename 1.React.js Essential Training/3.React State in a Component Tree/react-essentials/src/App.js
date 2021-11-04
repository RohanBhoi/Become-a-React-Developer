import './App.css';
import React from "react";

function SecretComponent() {
  return <h1> Secret information for authorised user only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component</h1>;
}

function App(authorized) {
  return (
    <>
    {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

export default App;
