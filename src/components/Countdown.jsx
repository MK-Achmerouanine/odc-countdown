import React from "react";

import { zeroPad } from "react-countdown";
const Countdown = ({ hours, minutes, seconds, api }) => {
  const actionStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    alignContent: "center",
  };
  const actionStyle2 = {
    display: "flex",
    flexWrap: "wrap",
    justifyItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    alignContent: "center",
    maxWidth: "200px"
  };

  return (
    <>
      {/* Countdown */}
      <section style={actionStyle}>
        <div className="box info">Heures</div>
        <div className="box info">Minutes</div>
        <div className="box info">Secondes</div>
      </section>
      <section style={actionStyle}>
        <div className="box countdown">{zeroPad(hours)}</div>
        <div className="box countdown">{zeroPad(minutes)}</div>
        <div className="box countdown">{zeroPad(seconds)}</div>
      </section>
      <section style={actionStyle2}>
        <button className="btn-action play" onClick={() => api.start()}>
          <i className="fa fa-play"></i>
        </button>
        <button className="btn-action pause" onClick={() => api.pause()}>
          <i className="fa fa-pause"></i>
        </button>
        <button className="btn-action stop" onClick={() => api.stop()}>
          <i className="fa fa-stop"></i>
        </button>
      </section>
    </>
  );
};

export default Countdown;
