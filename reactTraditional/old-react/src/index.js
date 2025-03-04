import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import hederSection from "./components/hederSection";
import reportWebVitals from './reportWebVitals';
import header from "./header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <header />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


