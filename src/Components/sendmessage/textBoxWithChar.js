import React, { useState } from "react";

function CharacterLimitTextBox() {
  const [text, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const characterLimit = 120;

  // Function to handle text change
  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setCharacterCount(newText.length);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        maxLength={characterLimit}
        rows="5"
        class="form-control col-12 col-sm-12"
        placeholder="text message"
        id="msg"
        name="msg"
        type="text"
      />
      <div style={{"margin-left" : "600px"}}>
        {characterCount}/{characterLimit}
      </div>
    </div>
  );
}

export default CharacterLimitTextBox;
