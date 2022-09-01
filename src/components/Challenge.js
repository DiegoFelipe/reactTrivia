import React, { useState } from "react";
import Card from "./Card";
import Results from "./Results";

export default function Challenge(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0);
  const { questions } = props;

  let question = questions[currentQuestion];
  let isTestDone = currentQuestion + 1 === questions.length;

  const handleAnswer = (answer) => {
    if (answer === window.atob(question.correct_answer)) {
      setCorrectAnswersTotal((prevState) => prevState + 1);
      question.wasAnsweredCorrectly = true;
    } else {
      question.wasAnsweredCorrectly = false;
    }

    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  return (
    <>
      {!isTestDone && (
        <>
          <h1>{window.atob(question.category)}</h1>
          <Card>
            <div>{window.atob(question.question)}</div>
          </Card>
          <br />
          <button onClick={() => handleAnswer("True")}>TRUE</button>
          <button onClick={() => handleAnswer("False")}>FALSE</button>
          <br />
          <span>
            {currentQuestion + 1} of {questions.length}
          </span>
        </>
      )}
      {isTestDone && (
        <Results correctAnswers={correctAnswersTotal} questions={questions} />
      )}
    </>
  );
}
