import React, { useEffect, useState } from "react";
import Challenge from "../components/Challenge";

const Trivia = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean&encode=base64"
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const questions = await response.json();
    setQuestions(questions.results);
  };

  if (questions.length === 0) return <span>Loading...</span>;

  return (
    <>
      <Challenge questions={questions} />
    </>
  );
};

export default Trivia;
