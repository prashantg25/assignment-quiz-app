import React from "react";
import ReactPlayer from "react-player";

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
        <ReactPlayer url={path} light={true} width={300} height={200} />
      </div>
    );
  }
  return element;
};
