import React, { useState } from "react";
import Countdown from "react-countdown";
import Config from "../components/Config";
import { default as CountdownComponent } from "../components/Countdown";

const Controller = () => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState(true);

  let count = parseInt(localStorage.getItem("countdown")) || 5;
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

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
      {config ? (
        <Config setConfig={setConfig}/>
      ) : count > 0 ? (
        <Countdown
          date={Date.now() + count}
          autoStart={false}
          renderer={renderer}
        >
          <Completionist />
        </Countdown>
      ) : (
        <Countdown date={Date.now() + 5} autoStart={false} renderer={renderer}>
          <Completionist />
        </Countdown>
      )}
    </>
  );
};

export default Controller;
