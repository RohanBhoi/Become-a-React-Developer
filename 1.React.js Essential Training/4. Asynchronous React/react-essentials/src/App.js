import './App.css';
import React, {useState, useEffect} from "react";

//* Link to the external API from the github*//
// https://api.github.com/users/eveporcello

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
     .then((response) => response.json())
     .then(setData);
  }, []);

  if(data) {
    return (
      <div> 
        <h1> {data.name} </h1>
        <p> {data.location} </p>
      </div>
    );
  }

  return <div> no user available </div>;
  
}

export default App;

