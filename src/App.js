import React, { useState } from "react";
import "./styles.css";

//database
const emojiDictionary = {
  "💞": "Revolving Hearts",
  "💕": "Two Hearts",
  "💟": "Heart Decoration",
  "❣️": "Heart Exclamation",
  "💔": "Broken Heart",
  "❤️‍🔥": "Heart on Fire",
  "❤️‍🩹": "Mending Heart",
  "❤️": "Red Heart",
  "🧡": "Orange Heart",
  "💛": "Yellow Heart",
  "💚": "Green Heart",
  "💙": "Blue Heart",
  "💜": "Purple Heart",
  "🤎": "Brown Heart",
  "🖤": "Black Heart",
  "🤍": "White Heart"
};
const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //set output
  }
  function inputChangeHandler(event) {
    //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput]; //input
    if (meaning === undefined) {
      meaning = "Sorry ,we don't have this in our database.";
    }
    setMeaning(meaning); //set output
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter App</h1>
      <h4>
        I struggle with understanding the heart emojis. Do you too? If yes, then
        see this library of heart emojis with meaning 🤩
      </h4>
      <h5>Copy emoji from below and paste here👇 or you can click on emoji </h5>
      <input onChange={inputChangeHandler} />
      {/* output */}
      <h2>
        <em style={{ color: "black" }}>{meaning}</em>
      </h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} id="emoji">
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
