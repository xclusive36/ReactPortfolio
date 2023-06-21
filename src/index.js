import React from 'react'; // import React
import ReactDOM from 'react-dom/client'; // import ReactDOM
import './index.css'; // import index.css stylesheet
import App from './App'; // import App component
import reportWebVitals from './reportWebVitals'; // import reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root')); // create root
root.render( // render root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // report web vitals
