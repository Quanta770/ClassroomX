import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuestions } from "../../actions/actionQuiz";
import fetchQuestions from "../../api/quiz/quizQuestionsActions";

const FetchButton = () => {
  const category = useSelector((state) => state.quizSettings.category);
  const difficulty = useSelector((state) => state.quizSettings.difficulty);
  const type = useSelector((state) => state.quizSettings.type);
  const amount = useSelector((state) => state.quizSettings.amount);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchQuestions(category, difficulty, type, amount));
  };

  return (
    <button className="btn-primary btn-lg " onClick={handleClick}>
      Fetch
    </button>
  );
};

export default FetchButton;
