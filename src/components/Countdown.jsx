import React from "react";

import {zeroPad} from "react-countdown";
const Countdown = ({ hours, minutes, seconds, api }) => {
  return (
    <div className="box-wrapper">
      <button onClick={() => api.start()}>
        <i className="fa fa-play"></i>
      </button>
      <button onClick={() => api.pause()}>
        <i className="fa fa-pause"></i>
      </button>
      <button onClick={() => api.stop()}>
        <i className="fa fa-stop"></i>
      </button>
        {/* Countdown */}
      <div className="box">{zeroPad(hours)}</div>
      <div className="box">{zeroPad(minutes)}</div>
      <div className="box">{zeroPad(seconds)}</div>
    </div>
  );
};

export default Countdown;
