import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/Styles/index.css";
import App from './App';
import "../src/Styles/MapBox.css";
import "../src/Styles/Buttons.css";
import "../src/Styles/TextField.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

