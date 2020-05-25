import React, { Component } from "react";
import { QuestionBody } from "./QuestionBody.js";
import { QuestionOptions } from "./QuestionOptions.js";

export const QuestionsMain = ({
  questionId,
  question,
  answers,
  updateResponse,
  questionType,
  answerFieldType,
  path,
}) => {
  const element = (
    <li key={questionId}>
      <QuestionBody
        question={question}
        questionType={questionType}
        path={path}
      />
      <br></br>
      <QuestionOptions
        questionId={questionId}
        answers={answers}
        updateResponse={updateResponse}
        answerFieldType={answerFieldType}
      />
    </li>
  );
  return element;
};
