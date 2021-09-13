import "../quizButton.css";

const QuizButton = ({ answered, active, onClick, index, content }) => {
  return (
    <div
      className={answered ? "button-container disabled" : "button-container"}
    >
      <div className={active ? "button selected" : "button"}>
        <p className="answer-number">{index} </p>
        <p
          id={index}
          className="answer-choice"
          value={content}
          onClick={onClick}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default QuizButton;
