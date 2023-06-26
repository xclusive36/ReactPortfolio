import React from "react"; // import React
import ReactDOM from "react-dom/client"; // import ReactDOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; // import index.css stylesheet
import App from "./App"; // import App component
import reportWebVitals from "./reportWebVitals"; // import reportWebVitals
import About from "./components/About/About.component";
import Contact from "./components/Contact/Contact.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import Resume from "./components/Resume/Resume.component";

const root = ReactDOM.createRoot(document.getElementById("root")); // create root
root.render(
  // render root
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // report web vitals
