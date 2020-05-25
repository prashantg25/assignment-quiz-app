import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuestionsLib from "./QuestionsLib.json";
import { QuestionsMain } from "./QuestionsMain.js";
import { Result } from "./Result.js";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: {},
      time: { hours: 0, minutes: 0, seconds: 59 },
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.timer();
    }, 1000);
    this.setState(() => ({ interval }));
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  timer = () => {
    this.setState((prevState) => {
      let timeObj = {};
      if (prevState.time.seconds) {
        timeObj = { ...prevState.time, seconds: prevState.time.seconds - 1 };
      } else if (prevState.time.minutes) {
        timeObj = {
          ...prevState.time,
          minutes: prevState.time.minutes - 1,
          seconds: 59,
        };
      } else if (prevState.time.hours) {
        timeObj = { hours: prevState.time.hours - 1, minutes: 59, seconds: 59 };
      } else {
        this.submitQuiz();
        return;
      }
      return { time: timeObj };
    });
  };

  updateResponse = (questionId, answer) => {
    this.setState((prevState) => {
      return { responses: { ...prevState.responses, [questionId]: answer } };
    });
  };

  submitQuiz = () => {
    let correctAnswers = 0;
    let attempted = 0;

    QuestionsLib.map((question) => {
      if (question.correct == this.state.responses[question.questionId]) {
        correctAnswers = correctAnswers + 1;
      }
    });
    const resultObj = {
      total: QuestionsLib.length,
      correct: correctAnswers,
      attempted: Object.keys(this.state.responses).length,
    };
    ReactDOM.render(<Result {...resultObj} />, document.getElementById("app"));
  };

  render() {
    return (
      <div>
        <div className="timer">
          Time ::
          {this.state.time.hours > 9
            ? this.state.time.hours
            : "0" + this.state.time.hours}
          :
          {this.state.time.minutes > 9
            ? this.state.time.minutes
            : "0" + this.state.time.minutes}
          :
          {this.state.time.seconds > 9
            ? this.state.time.seconds
            : "0" + this.state.time.seconds}
        </div>
        <ol>
          {QuestionsLib.map((question) => (
            <QuestionsMain
              key={question.questionId}
              updateResponse={this.updateResponse}
              {...(() => {
                let { correct, ...questionProps } = question;
                return questionProps;
              })()}
            />
          ))}
        </ol>
        <center>
          <button
            onClick={() => {
              this.submitQuiz();
            }}
          >
            Submit
          </button>
        </center>
      </div>
    );
  }
}

export default Quiz;
