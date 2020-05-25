import React from "react";

export const QuestionOptions = ({
  questionId,
  answers,
  updateResponse,
  answerFieldType,
}) => {
  let element = "";
  if (answerFieldType == "radio") {
    element = (
      <span>
        {answers.map((answer) => (
          <div key={answer}>
            <input
              type="radio"
              value={answer}
              name={questionId}
              onClick={() => {
                updateResponse(questionId, answer);
              }}
            />
            {answer}
          </div>
        ))}
      </span>
    );
  } else if (answerFieldType == "filltheblanks") {
    element = (
      <input
        type="text"
        onChange={(e) => {
          let answer = e.target.value.trim();
          updateResponse(questionId, answer);
        }}
      />
    );
  }
  return element;
};
