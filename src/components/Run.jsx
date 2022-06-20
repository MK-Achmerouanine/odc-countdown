import React, { useEffect, useState } from "react";
import { default as CountdownComponent } from "../components/Countdown";
import Countdown from "react-countdown";
import useSound from 'use-sound';
import wizz from '../wizz.mp3'
const Run = () => {
    const [count, setCount] = useState(null)

    const [play] = useSound(wizz);
    useEffect(() => {
      let count = parseInt(localStorage.getItem("countdown"));
      setCount(count)
    }, [count])
    
  
    // Random component
     // const Completionist = () => <span>You are good to go! {count}</span>;
  
    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed, api }) => {
      if (completed) {
        // Render a complete state
        for (let index = 0; index < 5; index++) {
            play()
        }
        api.stop()
        //return <Completionist />;
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
          />
        ) :(
          <h3>{parseInt(localStorage.getItem("countdown"))}</h3>
        )}
      </>
    );
}

export default Run