import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Settings = () => {
  //useState hooks
  const [options, setOptions] = useState([]);
  const category = useSelector((state) => state.options.category);
  const difficulty = useSelector((state) => state.options.difficulty);
  const type = useSelector((state) => state.options.type);
  const amount = useSelector((state) => state.options.amount);

  const dispatch = useDispatch();

  //useEffect hook gets data from api after DOM render
  useEffect(() => {
    const controller = new AbortController();
    const apiUrl = "https://opentdb.com/api_category.php";
    const tokenUrl = "https://opentdb.com/api_token.php?command=request";

    const signal = controller.signal;

    const setToken = (data) => {
      dispatch({
        type: "quiz/session_token",
        value: data,
      });
    };

    const setCode = (data) => {
      dispatch({
        type: "quiz/response_code",
        value: data,
      });
    };

    Promise.all(
      [
        fetch(apiUrl).then((res) => res.json()),
        fetch(tokenUrl).then((res) => res.json()),
      ],
      { signal: signal }
    )
      .then(([data, token]) => {
        setOptions(data.trivia_categories);
        setCode(data.response_code);
        console.log(token);
        setToken(token);
      })
      .catch((error) => {
        throw error;
      });

    /* fetch(apiUrl, { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        setOptions(data.trivia_categories);
      })
      .catch((error) => {
        throw error;
      }); */

    return function cleanup() {
      controller.abort();
    };
  }, [dispatch, setOptions]);

  /* useEffect(() => {
    console.log(category + " " + difficulty + " " + type + " " + amount);
    console.log(typeof category != "undefined");
  }, [category, difficulty, type, amount]); */

  useEffect(() => {
    options && options.find((a) => a.id === Number(category));
  }, [options, category]);

  const handleCategory = (e) => {
    dispatch({
      type: "quiz/category",
      value: e.target.value,
    });
  };

  const handleDifficulty = (e) => {
    dispatch({
      type: "quiz/difficulty",
      value: e.target.value,
    });
  };

  const handleType = (e) => {
    dispatch({
      type: "quiz/type",
      value: e.target.value,
    });
  };

  const handleAmount = (e) => {
    dispatch({
      type: "quiz/amount",
      value: e.target.value,
    });
  };

  return (
    <div className="p-4">
      <h2>Select Category</h2>
      <select
        className="form-select form-select-sm"
        value={category}
        name="question_catgory"
        onChange={handleCategory}
      >
        <option>All</option>

        {options &&
          options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
      </select>
      <h2>Select Difficulty</h2>
      <select
        className="form-select form-select-sm"
        name="difficulty"
        value={difficulty}
        onChange={handleDifficulty}
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
        value={type}
        onChange={handleType}
      >
        <option value="">Any</option>
        <option value="multiple">Multiple choice</option>
        <option value="boolean">True/False</option>
      </select>
      <h2>Set Amount</h2>

      <input
        type="number"
        className="form-control"
        value={amount || ""}
        onChange={handleAmount}
      ></input>
    </div>
  );
};

export default Settings;
