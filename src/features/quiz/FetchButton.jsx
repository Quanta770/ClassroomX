import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FetchButton = () => {
  const category = useSelector((state) => state.options.category);
  const difficulty = useSelector((state) => state.options.difficulty);
  const type = useSelector((state) => state.options.type);
  const amount = useSelector((state) => state.options.amount);
  const token = useSelector((state) => state.options.token);

  const dispatch = useDispatch();

  const setQuestions = (data) => {
    dispatch({
      type: "quiz/questions",
      value: data,
    });
  };

  const handleQuery = () => {
    let apiURL = `https://opentdb.com/api.php?amount=${amount}`;

    if (typeof category != "undefined") {
      apiURL = apiURL.concat(`&category=${category}`);
    }
    if (typeof difficulty != "undefined") {
      apiURL = apiURL.concat(`&difficulty=${difficulty}`);
    }
    if (typeof type != "undefined") {
      apiURL = apiURL.concat(`&type=${type}`);
    }
    if (typeof token != "undefined") {
      apiURL = apiURL.concat(`&token=${token}`);
    }

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data.results);
      });
  };

  return (
    <button className="btn-primary btn-lg " onClick={handleQuery}>
      Fetch
    </button>
  );
};

export default FetchButton;
