import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import Key from "./Key";

function Keyboard() {
  const {
    onEnter,
    onDelete,
    onSelectLetter,
    disabledLetters,
    setDisabledLetters,
  } = useContext(AppContext);

  const keys1 = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"];
  const keys3 = ["W", "X", "C", "V", "B", "N"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line3">
        {keys3.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyVal={"DEL"} bigKey />
        <Key keyVal={"ENTER"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
