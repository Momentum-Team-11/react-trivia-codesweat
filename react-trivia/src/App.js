import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySelect from "./CategorySelect";
import Question from "./Question";

const App = () => {
  const categoriesURL = "https://opentdb.com/api_category.php";
  const questionsURL = "https://opentdb.com/api.php?amount=10&type=boolean&category=";
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);

  // ask for a list of categories
  useEffect(() => {
    axios.get(categoriesURL).then((response) => {
      setCategories(response.data.trivia_categories);
    });
  }, []);

  // useEffect(() => {}, [])

  // ask for a list questions based off the selected category
  useEffect(() => {
    axios.get(questionsURL + `${selected}`).then((response) => {
      console.log(response);
      setQuestions(response.data.results);
    });
  }, [selected]);

  if (endGame) {
    return `Well done! Your score is: ${score} out of ${questions.length}!`;
  }

  return (
    // Ternary operator syntax
    // condition ? what to do if true : what to do if false
    <div id="container">
      {questions.length > 0 ? (
        <div>
          {questions.map((question, idx) => {
            return (
              <Question
                key={idx}
                question={question}
                setScore={setScore}
                score={score}
              />
            );
          })}
          <button onClick={() => setEndGame(true)}>Finish Game</button>
        </div>
      ) : (
        categories.map((category) => {
          return (
            <CategorySelect
              key={category.id}
              category={category}
              setSelected={setSelected}
            />
          );
        })
      )}
    </div>
  );
};

export default App;
