import React from "react";

const Timer = ({ timer, buttonLabel }) => {
  return (
    <div className="Timer">
      <div>
        <h1>{timer}</h1>
      </div>
      <form>
        <div className="time-input">
          <h2>Hours</h2>
          <input type="number" />
          <h2>Minutes</h2>
          <input type="number" />
        </div>
        <input type="submit" className="start-btn" value={buttonLabel} />
      </form>
    </div>
  );
};

export default Timer;
