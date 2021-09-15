import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz, setQuizEnd, setQuizScore } from "../../actions/actionQuiz";
import QuizButton from "../component/QuizButton";
import QuizPrimaryBtn from "../component/QuizPrimaryBtn";
import { ProgressBar } from "react-bootstrap";

const QuizState = () => {
  const dispatch = useDispatch();
  //local states
  const [isDisabled, setIsDisabled] = useState(true);
  const [selected, setSelected] = useState(-1);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [options, setOptions] = useState([]);
  const [correct, setCorrect] = useState(false);

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

  const handleClick = (i, e) => {
    setSelectedAnswer(e.target.textContent);
    setSelected(i);
  };

  const handleCheck = () => {
    setAnswered(true);
    if (selectedAnswer === answer) {
      // setCurrentScore(currentScore + 1);
      dispatch(setQuizScore(quizScore + 1));
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
      return <QuizPrimaryBtn textValue="Check" onClick={handleCheck} />;
    } else {
      return (
        <QuizPrimaryBtn
          textValue="Continue"
          onClick={() => {
            if (index + 1 === questionData.questions.length) {
              dispatch(setQuizEnd(true));
            }
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
        <h2>Score: {quizScore + " / " + questionData.questions.length}</h2>
        <ProgressBar now={(quizScore / questionData.questions.length) * 100} />
        {console.log("score", quizScore)}
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
      {showData()}
      {console.log("index: ", index)}
      <div>Selected: {selectedAnswer}</div>
      <div>Correct ans: {answer}</div>
      {answered ? checkResult() : null}
      {/* <QuizLongBtn textValue="Check" onClick={handleCheck} /> */}
      {answered ? (
        changeBtn(false)
      ) : (
        <QuizPrimaryBtn
          textValue="Check"
          onClick={handleCheck}
          disabled={isDisabled}
        />
      )}
    </div>
  );
};

export default QuizState;
