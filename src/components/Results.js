import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Results.module.css";

export default function Results(props) {
  const navigate = useNavigate();
  const handlePlayAgain = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <h1>You scored</h1>
      <span>
        {props.correctAnswers} / {props.questions.length}
      </span>
      <ul>
        {props.questions.map((question) => {
          return (
            <li className={styles.answerItem}>
              {question.wasAnsweredCorrectly ? "+" : "-"}{" "}
              {window.atob(question.question)}
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={handlePlayAgain}>PLAY AGAIN?</button>
    </>
  );
}
