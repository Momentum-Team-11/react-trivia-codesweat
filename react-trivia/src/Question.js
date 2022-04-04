import React, { useState } from "react";

const Question = ({ question, setScore, score }) => {
  const [isAnswered, setisAnswered] = useState(false);
  return (
    <div>
      <p>{question.question}</p>
      <button class="button5"
        disabled={isAnswered}
        onClick={() => {
          console.log("correct answer selected!");
          setScore((score += 1));
          setisAnswered(true);
        }}
      >
        {question.correct_answer}
      </button>
      <button class="button5"
        disabled={isAnswered}
        onClick={() => {
          console.log("correct answer selected!");
          setisAnswered(true);
        }}
      >
        {question.incorrect_answers}
      </button>
    </div>
  );
};

export default Question;

