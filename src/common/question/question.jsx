import React, { Component } from "react";
import "./question.css";
import Choice from "../choice/choice";

class Question extends Component {
  render() {
    const shuffle = (arr) => {
      for (let i = 0; i < 4; i++) {
        while (true) {
          let random = Math.floor(Math.random() * 4 + 1);
          if (!isRepeated(arr, random)) {
            arr[i] = random;
            break;
          }
        }
      }
    };

    const isRepeated = (arr, num) => {
      for (let i = 0; i < 4; i++) if (arr[i] === num) return true;
      return false;
    };

    let choicesOrder = [];
    shuffle(choicesOrder);

    return (
      <div className="question-container">
        <div className="question">{this.props.text}</div>
        <div className="choices-container">
          {choicesOrder.map((e) => (
            <Choice
              id={e}
              key={e}
              className="choice"
              answer={this.props.choices[e - 1].choice}
              isCorrect={this.props.choices[e - 1].isCorrect}
              onAnswer={this.props.onAnswer}
            />
          ))}
          
        </div>
      </div>
    );
  }
}

export default Question;
