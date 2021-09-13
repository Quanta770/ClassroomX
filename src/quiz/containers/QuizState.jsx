import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuizEnd, setQuizScore } from "../../actions/actionQuiz";
import QuizButton from "../component/QuizButton";
import QuizLongBtn from "../component/QuizLongBtn";

const QuizState = () => {
  const dispatch = useDispatch();
  //local states
  const [isDisabled, setIsDisabled] = useState(true);
  const [selected, setSelected] = useState(-1);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [options, setOptions] = useState([]);
  const [correct, setCorrect] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  const questionData = useSelector((state) => state.quizState);
  const [index, setIndex] = useState(0);
  const quizScore = questionData.score;

  const question = questionData.questions[index];
  const answer = question.correct_answer;

  function getRandomInt(x) {
    return Math.floor(Math.random() * Math.floor(x));
  }

  useEffect(() => {
    dispatch(setQuizEnd(false));
  }, []);
  //mix in correct option randomly
  useEffect(() => {
    let choices = [...question.incorrect_answers];
    choices.splice(getRandomInt(choices.length), 0, answer);
    setOptions(choices);
  }, [answer, question, setOptions]);

  useEffect(() => {
    if (selected !== -1) {
      setIsDisabled(false);
    }
  }, [selected]);

  useEffect(() => {
    if (index === 5) {
      // dispatch({
      //   type: "QUIZ_END",
      //   payload: true,
      // });
      dispatch(setQuizEnd(true));
    }
  }, [index]);

  const handleClick = (i, e) => {
    setSelectedAnswer(e.target.textContent);
    setSelected(i);
  };

  const handleCheck = () => {
    setAnswered(true);
    if (selectedAnswer === answer) {
      setCurrentScore(currentScore + 1);
      dispatch(setQuizScore(currentScore));
      setCorrect(true);
    }
    console.log(quizScore);
  };

  const checkResult = () => {
    if (correct) {
      return <h2>Correct!</h2>;
    } else {
      return <h2>Wrong!</h2>;
    }
  };

  const reset = () => {
    //reset local   state to default
    setSelected(-1);
    setAnswered(false);
    setCorrect(false);
    setIsDisabled(true);
  };

  const changeBtn = (foo) => {
    if (foo) {
      return <QuizLongBtn textValue="Check" onClick={handleCheck} />;
    } else {
      return (
        <QuizLongBtn
          textValue="Continue"
          onClick={() => {
            setIndex(index + 1);
            reset();
          }}
        />
      );
    }
  };

  const showData = () => {
    return (
      <div>
        <h2>Score: {currentScore + " / " + questionData.questions.length}</h2>
        <p>Question {index + 1}</p>
        <h3 dangerouslySetInnerHTML={{ __html: question.question }}></h3>
        <div>
          {options.map((option, i) => (
            <QuizButton
              key={i}
              index={i}
              content={option}
              onClick={(e) => handleClick(i, e)}
              active={i === selected}
              answered={answered}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {<h3>Current score: {currentScore}</h3>}
      {showData()}

      <div>Selected: {selectedAnswer}</div>
      <div>Correct ans: {answer}</div>
      {answered ? checkResult() : null}
      {/* <QuizLongBtn textValue="Check" onClick={handleCheck} /> */}
      {answered ? (
        changeBtn(false)
      ) : (
        <QuizLongBtn
          textValue="Check"
          onClick={handleCheck}
          disabled={isDisabled}
        />
      )}
    </div>
  );
};

export default QuizState;
