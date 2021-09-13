import { useSelector } from "react-redux";

const QuizEnd = () => {
  const score = useSelector((state) => state.quizState.score);

  return <h2>Your total score is: {score}</h2>;
};

export default QuizEnd;
