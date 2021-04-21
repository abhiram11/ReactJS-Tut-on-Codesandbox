import React, { useState } from "react";

import "./styles.css";
// var person = prompt("Please enter your name", "Harry Potter");

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😞": "sad",
  "🤬": "angry",
  "🍕": "pizza",
  "❤": "love"
};

export default function App() {
  const [emoji, setEmoji] = useState("");

  function emojiSearcher(event) {
    // console.log(emojiDictionary[event.target.value]);

    var meaning = emojiDictionary[event.target.value];

    if (meaning === undefined) {
      meaning = "Meaning not Found";
    }
    setEmoji(meaning);
  }

  return (
    <div className="App">
      <h1>Enter your emoji below!</h1>
      <input onChange={emojiSearcher}></input>
      <div> {emoji} </div>
    </div>
  );
}
