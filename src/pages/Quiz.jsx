import QuizState from "../quiz/containers/QuizState";
import { useSelector } from "react-redux";
import QuizEnd from "../quiz/containers/QuizEnd";

const Quiz = () => {
  const end = useSelector((state) => state.quizState.end);
  return <div>{end ? <QuizEnd /> : <QuizState />}</div>;
};

export default Quiz;
