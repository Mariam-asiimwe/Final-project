import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {component} from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// # Final Project

// ## Application Requirements

// You and your group will use everything you’ve learned to create a real-world client-side single-page application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfill the following requirements:

// * Must use ReactJS.

// * Must use Node.

// * Must have both GET and POST routes for retrieving and adding new data.

// * Must deploy this application using Netlify.

// * Must utilize at least two libraries, packages, or technologies that we haven't discussed.

// * Must have a polished front end/UI.

// * Must meet good quality coding standards (indentation, scoping, naming).

// * Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
