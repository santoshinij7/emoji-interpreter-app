import React, { useState } from "react";
import "./styles.css";

//database
const emojiDictionary = {
  "π": "Revolving Hearts",
  "π": "Two Hearts",
  "π": "Heart Decoration",
  "β£οΈ": "Heart Exclamation",
  "π": "Broken Heart",
  "β€οΈβπ₯": "Heart on Fire",
  "β€οΈβπ©Ή": "Mending Heart",
  "β€οΈ": "Red Heart",
  "π§‘": "Orange Heart",
  "π": "Yellow Heart",
  "π": "Green Heart",
  "π": "Blue Heart",
  "π": "Purple Heart",
  "π€": "Brown Heart",
  "π€": "Black Heart",
  "π€": "White Heart"
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
        see this library of heart emojis with meaning π€©
      </h4>
      <h5>Copy emoji from below and paste hereπ or you can click on emoji </h5>
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
