import React, { useEffect, useState } from "react";
import { default as CountdownComponent } from "../components/Countdown";
import Countdown from "react-countdown";

const Controller = () => {
  const [count, setCount] = useState(null)
  useEffect(() => {
    let count = parseInt(localStorage.getItem("countdown"));
    setCount(count)
  }, [count])
  

  // Random component
  const Completionist = () => <span>You are good to go! {count}</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed, api }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          <CountdownComponent
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            api={api}
          />
        </>
      );
    }
  };
  return (
    <>
      { parseInt(localStorage.getItem("countdown")) ? (
        <Countdown
          date={Date.now() + count*1000}
          autoStart={false}
          renderer={renderer}
        >
          <Completionist />
        </Countdown>
      ) :(
        <h3>{parseInt(localStorage.getItem("countdown"))}</h3>
      )}
    </>
  );
};

export default Controller;
