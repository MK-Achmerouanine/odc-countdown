import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const Config = () => {
  let navigate = useNavigate();
  const init = (initialValue) => {
    return {
      hours: initialValue,
      minutes: initialValue,
      seconds: initialValue,
    };
  };
  const reducer = (state, action) => {
    const { hours, minutes, seconds } = action.payload;
    console.log("inside reducer", hours);
    switch (action.type) {
      case "edit":
        console.log("inside reducer payload", action.payload);
        console.log("inside reducer state", state);
        return {
          hours: hours !== undefined ? hours : state.hours,
          minutes: minutes !== undefined ? minutes : state.minutes,
          seconds: seconds !== undefined ? seconds : state.seconds,
        };
      case "increment":
        if (state.hours > 24 || state.hours < 0) return { ...state, hours: "" };
        if (state.minutes > 60 || state.minutes < 0)
          return { ...state, minutes: "" };
        if (state.seconds > 60 || state.seconds < 0)
          return { ...state, seconds: "" };
        return {
          hours: hours ? state.hours + parseInt(hours) : state.hours,
          minutes: minutes ? state.minutes + parseInt(minutes) : state.minutes,
          seconds: seconds ? state.seconds + parseInt(seconds) : state.seconds,
        };
      case "decrement":
        if (state.hours > 24 || state.hours < 0) return { ...state, hours: "" };
        if (state.minutes > 60 || state.minutes < 0)
          return { ...state, minutes: "" };
        if (state.seconds > 60 || state.seconds < 0)
          return { ...state, seconds: "" };
        return {
          hours: hours ? state.hours - parseInt(hours) : state.hours,
          minutes: minutes ? state.minutes - parseInt(minutes) : state.minutes,
          seconds: seconds ? state.seconds - parseInt(seconds) : state.seconds,
        };
      case "reset":
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    let regex = new RegExp("^[0-9]{0,2}$");
    const check = regex.test(e.target.value);
    let val = parseInt(e.target.value);
    console.log(val);
    console.log(isNaN(val));

    if (isNaN(val) && !check)
      dispatch({ type: "edit", payload: { [e.target.name]: 0 } });
    else {
      console.log(`${e.target.name} : ${val}`);

      switch (e.target.name) {
        case "hours":
          if (isNaN(parseInt(val)))
            dispatch({ type: "edit", payload: { [e.target.name]: 0 } });
          if (val < 24 && val >= 0 && check)
            dispatch({ type: "edit", payload: { [e.target.name]: val } });
          console.log("inside hours", val);
          break;
        case "minutes":
          if (isNaN(parseInt(val)))
            dispatch({ type: "edit", payload: { [e.target.name]: 0 } });
          if (val < 60 && val >= 0 && check)
            dispatch({ type: "edit", payload: { [e.target.name]: val } });
          break;
        case "seconds":
          if (isNaN(parseInt(val)))
            dispatch({ type: "edit", payload: { [e.target.name]: 0 } });
          if (val < 60 && val >= 0 && check)
            dispatch({ type: "edit", payload: { [e.target.name]: val } });
          break;

        default:
          break;
      }
    }
  };
  const handleConfig = (e) => {
    e.preventDefault();
    // setConfig(false)
    let totalSeconds =
      parseInt(state.hours) * 3600 +
      parseInt(state.minutes) * 60 +
      parseInt(state.seconds);
    console.log(localStorage.getItem("countdown"));
    localStorage.setItem("countdown", totalSeconds);
    localStorage.setItem("state", state);
    console.log(JSON.stringify(localStorage.getItem("state")));
    console.log(localStorage.getItem("countdown"));
    navigate("/countdown");

    // throw new Error('Error')
  };

  const [state, dispatch] = useReducer(reducer, 0, init);

  return (
    <>
      <div class="container is-fluid">
        <div id="config">
          <pre>{JSON.stringify(state)}</pre>
          <div id="hours">
            <label htmlFor="input_hours" style={{ marginRight: "2.5rem" }}>
              Hours{" "}
            </label>
            <input
              type="text"
              name="hours"
              id="input_hours"
              value={state.hours}
              onChange={handleChange}
            />
          </div>
          <div id="minutes">
            <label htmlFor="input_minutes">Minutes</label>
            <input
              type="text"
              name="minutes"
              id="input_minutes"
              value={state.minutes}
              onChange={handleChange}
            />
          </div>
          <div id="seconds">
            <label htmlFor="input_seconds">Seconds</label>
            <input
              type="text"
              name="seconds"
              id="input_seconds"
              value={state.seconds}
              onChange={handleChange}
            />
          </div>
          <button style={{ margin: "1rem auto" }} onClick={handleConfig}>
            Config
          </button>
        </div>
      </div>
    </>
  );
};

export default Config;
