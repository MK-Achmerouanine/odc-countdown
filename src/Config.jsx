import React from 'react'

const Config = () => {
  return (
    <>
    <div id="config">
      <legend>Config</legend>
      <div id="hours">
        <label for="input_hours" style={{marginRight:"2.5rem"}}>Hours </label>
        <input type="number" name="hours" id="input_hours" />
      </div>
      <div id="minutes">
        <label for="input_minutes">Minutes</label>
        <input type="number" name="minutes" id="input_minutes" />
      </div>
      <div id="seconds">
        <label for="input_seconds">Seconds</label>
        <input type="number" name="seconds" id="input_seconds" />
      </div>
    <button style={{margin:"1rem auto"}}>Config</button>
    </div>
    </>
  )
}

export default Config