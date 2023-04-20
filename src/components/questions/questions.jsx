import React, { Component } from "react";
import Question from "../../common/question/question";
import QuestionNav from "../questionNav/questionNav";
import "./questions.css";

class Questions extends Component {
  qArray = [
    {
      question: "Who is the father of C language??",
      choices: [
        { choice: "Dennis Ritchie", isCorrect: true },
        { choice: "Steve Jobs", isCorrect: false },
        { choice: "James Gosling", isCorrect: false },
        { choice: "Rasmus Lerdorf", isCorrect: false },
      ],
    },
    {
      question: " Which of the following is not a valid C variable name?",
      choices: [
        { choice: "int $main;", isCorrect: true },
        { choice: "int number;", isCorrect: false },
        { choice: "float rate;", isCorrect: false },
        { choice: "int variable_count;", isCorrect: false },
      ],
    },
    {
      question: "Which is valid C expression?",
      choices: [
        { choice: "int my_num = 100000;", isCorrect: true },
        { choice: "int my_num = 100,000;", isCorrect: false },
        { choice: "int my num = 1000;", isCorrect: false },
        { choice: "int $my_num = 10000;", isCorrect: false },
      ],
    },
    {
      question: "Which of the following cannot be a variable name in C?",
      choices: [
        { choice: "volatile", isCorrect: true },
        { choice: "true", isCorrect: false },
        { choice: "friend", isCorrect: false },
        { choice: "export", isCorrect: false },
      ],
    },
    {
      question: "Which of the following declaration is not supported by C language?",
      choices: [
        { choice: "String str;", isCorrect: true },
        { choice: "char *str;", isCorrect: false },
        { choice: "float str = 3e2;", isCorrect: false },
        { choice: "Both “String str;” and “float str = 3e2;”", isCorrect: false },
      ],
    },
    {
      question: "Where in C the order of precedence of operators do not exist?",
      choices: [
        { choice: "None of the mentioned", isCorrect: true },
        { choice: "Within conditional statements, if, else", isCorrect: false },
        { choice: "Within while, do-while", isCorrect: false },
        { choice: "Within a macro definition", isCorrect: false },
      ],
    },
    {
      question: "What is #include <stdio.h>?",
      choices: [
        { choice: "Preprocessor directive", isCorrect: true },
        { choice: "Inclusion directive", isCorrect: false },
        { choice: "File inclusion directive", isCorrect: false },
        { choice: "None of the mentioned", isCorrect: false },
      ],
    },
    {
      question: "C preprocessors can have compiler specific features.",
      choices: [
        { choice: "True", isCorrect: true },
        { choice: "False", isCorrect: false },
        { choice: "Depends on the standard", isCorrect: false },
        { choice: "Depends on the platform", isCorrect: false },
      ],
    },
    
   
    {
      question: "Which of the following are C preprocessors?",
      choices: [
        { choice: "all of the mentioned", isCorrect: true },
        { choice: "#ifdef", isCorrect: false },
        { choice: "#define", isCorrect: false },
        { choice: "#endif", isCorrect: false },
      ],
    },
   

    {
      question: "The C-preprocessors are specified with _________ symbol.",
      choices: [
        { choice: "#", isCorrect: true },
        { choice: "$", isCorrect: false },
        { choice: "” ”", isCorrect: false },
        { choice: "&", isCorrect: false },
      ],
    },
  ];
  render() {
    return (
      <div className="questions-container">
        <Question
          text={this.qArray[this.props.currentQuestion - 1].question}
          choices={this.qArray[this.props.currentQuestion - 1].choices}
          onAnswer={this.props.onAnswer}
        />
        <QuestionNav
          questions={this.props.questions}
          currentQuestion={this.props.currentQuestion}
        />
      </div>
    );
  }
}

export default Questions;
