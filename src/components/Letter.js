import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ attemptVal, letterPosition }) {
  const {
    board,
    correctWord,
    currentAttempt,
    disabledLetters,
    setDisabledLetters,
  } = useContext(AppContext);
  const letter = board[attemptVal][letterPosition];

  const correct = correctWord.toUpperCase()[letterPosition] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currentAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  React.useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
