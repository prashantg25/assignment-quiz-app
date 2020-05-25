import ReactDOM from "react-dom";
import React from "react";
import Quiz from "./components/Quiz.js";
import "./styles/style.css";

const element = (
  <div>
    <h2>
      <center>Assignment Quiz App</center>
    </h2>
    <Quiz />
  </div>
);
ReactDOM.render(element, document.getElementById("app"));
