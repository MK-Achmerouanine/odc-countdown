import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Countdown, {zeroPad} from "react-countdown";
import Config from './Config';

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
      
      <div className="box-wrapper">
        <button onClick={() => api.start()}><i className="fa fa-play"></i></button>
        <button onClick={() => api.pause()}><i className="fa fa-pause"></i></button>
        <button onClick={() => api.stop()}><i className="fa fa-stop"></i></button>
      </div>
      <div className="box-wrapper">
        <div className="box">
        {zeroPad(hours)}
        </div>
        <div className="box">
        {zeroPad(minutes)}
        </div>
        <div className="box">
        {zeroPad(seconds)}
        </div>

      </div>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </>
    );
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Config/>
    <Countdown date={Date.now() + 5000} autoStart={false} renderer={renderer}>
    <Completionist />
  </Countdown>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
