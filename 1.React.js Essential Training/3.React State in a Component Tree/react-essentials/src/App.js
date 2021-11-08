import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`Its ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`Its ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
    <h1> Current emotion is {emotion} and {secondary} </h1>

    <button onClick={() => setEmotion("Happy")}> 
      Make Happy
    </button>

    <button onClick={() => setEmotion("Frustrated")}> 
      Frustrate
    </button>
    
    <button onClick={() => setEmotion("Enthusiastic")}> 
      Enthuse
    </button>

    <button onClick={() => setSecondary("Crabby")}> 
      Make Crabby
    </button>
    </>
  )
}

export default App;

