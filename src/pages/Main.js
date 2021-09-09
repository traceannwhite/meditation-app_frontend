import React from "react";
import Timer from "../components/TimerForm";

const Main = () => {
  return (
    <div className="main-container">
      <h2>How long would you like to meditate today?</h2>
      <Timer />
    </div>
  );
};

export default Main;
