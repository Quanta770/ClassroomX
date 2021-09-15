import "../quizButton.css";

const QuizButton = ({ answered, active, onClick, index, content }) => {
  return (
    <div
      className={answered ? "button-container disabled" : "button-container"}
    >
      <div className={active ? "button selected" : "button"} onClick={onClick}>
        {/* <p className="answer-number">{index} </p> */}
        <p id={index} className="answer-choice" value={content}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default QuizButton;
