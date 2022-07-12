import React, { useContext } from "react";
import { AppContext } from "../App";

function Monitor() {
  const { currentAttempt } = useContext(AppContext);

  return (
    <div>
      <div>currentAttempt.attempt : {currentAttempt.attempt}</div>
      <div>currentAttempt.letterPos : {currentAttempt.letterPos}</div>
    </div>
  );
}

export default Monitor;
