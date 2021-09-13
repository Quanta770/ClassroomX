import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetQuizCategory } from "../../api/quiz/quizSettingActions";
import _ from "lodash";
import {
  setCategory,
  setDifficulty,
  setType,
  setAmount,
} from "../../actions/actionQuiz";

const Settings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetQuizCategory());
  }, []);

  const quiz = useSelector((state) => state.quizSettings);

  const ShowData = () => {
    console.log(quiz);
    if (!_.isEmpty(quiz.data)) {
      return (
        <div>
          <h2>Select Category</h2>
          <select
            className="form-select form-select-sm"
            value={quiz.category}
            name="question_catgory"
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            <option>All</option>

            {quiz.data &&
              quiz.data.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
          <h2>Select Difficulty</h2>
          <select
            className="form-select form-select-sm"
            name="difficulty"
            value={quiz.difficulty}
            onChange={(e) => dispatch(setDifficulty(e.target.value))}
          >
            <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <h2>Select Type</h2>
          <select
            className="form-select form-select-sm "
            name="type"
            value={quiz.type}
            onChange={(e) => dispatch(setType(e.target.value))}
          >
            <option value="">Any</option>
            <option value="multiple">Multiple choice</option>
            <option value="boolean">True/False</option>
          </select>
          <h2>Set Amount</h2>
          <input
            type="number"
            className="form-control"
            defaultValue={10}
            onChange={(e) => dispatch(setAmount(e.target.value))}
          ></input>
        </div>
      );
    }

    if (quiz.loading) {
      return (
        <div>
          <h2>Loading ... </h2>
        </div>
      );
    }

    return <p>Loading ...</p>;
  };

  return <div className="p-4">{ShowData()}</div>;
};

export default Settings;
