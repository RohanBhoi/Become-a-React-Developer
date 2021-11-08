import './App.css';
import React, {useReducer} from "react";

function App() {
  const [cheked, toggle] = useReducer(
    (cheked) => !cheked,
    false
  );

  return (
    <>
      <input 
        type="checkbox" 
        value={cheked}
        onChange={toggle}
      />

      <p>
        {cheked ? "cheked" : "not checked"}
      </p>
    </>
  )
}

export default App;

