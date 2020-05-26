import React from "react";
// import ReactPlayer from "react-player";
import VideoPlayer from "./Video.js";

export const QuestionBody = ({ question, questionType, path }) => {
  let element = "";
  if (questionType == "text") {
    element = <span>{question}</span>;
  } else if (questionType == "image") {
    element = (
      <div>
        <span>{question}</span>
        <img src={path}></img>
      </div>
    );
  } else if (questionType == "video") {
    element = (
      <div>
        <span>{question}</span>
        <VideoPlayer path={path} />
      </div>
    );
  }
  return element;
};
