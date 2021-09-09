import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App(props) {
  const url = "https://meditation-app-tw.herokuapp.com/timer/";

  const { startHour = 0, startMin = 0, startSec = 0 } = props;
  // states
  const [hoursLeft, setHoursLeft] = useState(startHour);
  const [minLeft, setMinLeft] = useState(startMin);
  const [secLeft, setSecLeft] = useState(startSec);

  const getTimer = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setHoursLeft(data);
    setMinLeft(data);
    setSecLeft(data);
  };

  // useEffects
  useEffect(() => {
    getTimer();
  }, []);

  useEffect(() => {
    const intervals = setInterval(() => {
      if (secLeft > 0) {
        setSecLeft(secLeft - 1);
      }
      if (secLeft === 0) {
        if (minLeft === 0) {
          clearInterval(intervals);
        } else {
          setMinLeft(minLeft - 1);
          setSecLeft(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(intervals);
    };
  });

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Main
              {...routerProps}
              timeLeft={
                hoursLeft === 0 && minLeft === 0 && secLeft === 0 ? null : (
                  <h1>
                    {hoursLeft}:{minLeft}:
                    {secLeft < 10 ? `0${secLeft}` : secLeft}
                  </h1>
                )
              }
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
