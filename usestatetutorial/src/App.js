import React, { useState } from "react";
import Button from "./Button"

import './App.css';

function initCount() {
  console.log("initial count")
  return 0;
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Aidan')
  
  function handleClick(value) {
    setCount((prevState) => {
      return prevState + value;
    });
  }

  return (
    <div className="App">
      <div>{name}</div>
      <div>{count}</div>
      <Button handleClick = {handleClick} title = "+" value = {1}/>
      <Button handleClick = {handleClick} title = "-" value = {-1}/>
      {/* <button onClick = {() => setState(0)}>Reset</button> */}
    </div>
  );
}

export default App;
