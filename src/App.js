import React, { useState } from "react";

import "./styles.css";
// var person = prompt("Please enter your name", "Harry Potter");

export default function App() {
  const [words, setWords] = useState("");

  function textShow(event) {
    // console.log(event.target.value);
    setWords(event.target.value);
  }

  return (
    <div className="App">
      <h1> First Show </h1>
      <input onChange={textShow} />
      <div>Welcome {words} !</div>
    </div>
  );
}
