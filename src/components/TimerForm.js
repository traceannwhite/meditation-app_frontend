import React from "react";

const Timer = () => {
  return (
    <form>
      <div className="hours">
        <h2>Hours</h2>
        <input type="number" />
      </div>
      <div className="minutes">
        <h2>Minutes</h2>
        <input type="number" />
      </div>
    </form>
  );
};

export default Timer;
