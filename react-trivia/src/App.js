import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySelect from "./CategorySelect";
import Question from "./Question";
import "./index.css";

const App = () => {
  const categoriesURL = "https://opentdb.com/api_category.php";
  const questionsURL =
    "https://opentdb.com/api.php?amount=10&type=boolean&category=";
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);

  // ask for a list of categories
  useEffect(() => {
    axios.get(categoriesURL).then((response) => {
      setCategories(response.data.trivia_categories);
    });
  }, [endGame]);

  // useEffect(() => {}, [])

  // ask for a list questions based off the selected category
  useEffect(() => {
    axios.get(questionsURL + `${selected}`).then((response) => {
      console.log(response);
      setQuestions(response.data.results);
    });
  }, [selected]);

  if (endGame) {
    return (
      <div id="done">
        <p>
          Game over! Your score is: {score} out of {questions.length}!
        </p>
        <p>Would you like to play again?</p>
        <button class="button5" onClick={() => {console.log('play again clicked!'); setEndGame(false); setPlayAgain(true); setQuestions([]); setScore(0)}}>Play Again</button>
      </div>
    );
  }
  if (score === 0 && playAgain || endGame === false) {
  return (
  
    // Ternary operator syntax
    // condition ? what to do if true : what to do if false
    <div id="container">
<p>To test your knowledge of randomly random things, please choose a category below...at random...</p>
  
      {questions.length > 0 ? (
        <div>
          <p>The following statements are either 'true' or 'false'...</p>
          
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
          <button class="button" onClick={() => setEndGame(true)}>Finish Game</button>
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
  )};
  return null
};

export default App;
