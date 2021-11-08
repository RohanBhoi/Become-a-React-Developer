import './App.css';
import React, {useState, useEffect} from "react";

//* Link to the external API from the github*//
// https://api.github.com/users/eveporcello

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(setData);
  }, []);

  if(data) {
    return <div> {JSON.stringify(data)} </div>
  }
  return (
    <div>
      no user available
    </div>
  )
}

export default App;

