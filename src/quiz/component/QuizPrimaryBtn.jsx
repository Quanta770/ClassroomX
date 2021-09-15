import "../quizLongBtn.css";

const QuizPrimaryBtn = ({ textValue, onClick, disabled }) => {
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

export default QuizPrimaryBtn;
