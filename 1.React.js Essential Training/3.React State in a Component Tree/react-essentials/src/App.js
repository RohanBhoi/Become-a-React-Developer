import './App.css';
import React, { useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);

  return (
    <>
    <h1> Current emotion is {emotion} </h1>

    <button onClick={() => setEmotion("Frustrated")}> 
      Frustrate
    </button>
    
    <button onClick={() => setEmotion("Enthusiastic")}> 
      Enthuse
    </button>
    </>
  )
}

export default App;
