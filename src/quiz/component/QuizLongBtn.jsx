import "../quizLongBtn.css";

const QuizLongBtn = ({ textValue, onClick, disabled }) => {
  return (
    <button
      type="button"
      className="long_button"
      disabled={disabled ? "disabled" : ""}
      onClick={onClick}
    >
      <div className="text">{textValue}</div>
    </button>
  );
};

export default QuizLongBtn;
