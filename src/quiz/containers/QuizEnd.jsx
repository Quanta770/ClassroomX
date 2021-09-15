import { useSelector, useDispatch } from "react-redux";
import { setQuizEnd, setQuizScore } from "../../actions/actionQuiz";
import { Link } from "react-router-dom";
import QuizPrimaryBtn from "../component/QuizPrimaryBtn";

const QuizEnd = () => {
  const score = useSelector((state) => state.quizState.score);
  const dispatch = useDispatch();

  const Reset = () => {
    dispatch(setQuizEnd(false));
    dispatch(setQuizScore(0));
  };

  return (
    <div>
      <h2>Your total score is: {score}</h2>
      <Link to="/quiz">
        <QuizPrimaryBtn onClick={Reset} textValue="Retry?" disabled={false} />
      </Link>
      <br />
      <Link to="/">
        <QuizPrimaryBtn textValue="Exit" disabled={false} onClick={Reset} />
      </Link>
    </div>
  );
};

export default QuizEnd;
