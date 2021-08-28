import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const FetchCountBtn = () => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("");
  const [count, setCount] = useState();

  useEffect(() => {
    const apiUrl = "https://opentdb.com/api_category.php";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setOptions(data.trivia_categories);
      })
      .catch((error) => {
        throw error;
      });
  });

  const getCount = () => {
    const api = `https://opentdb.com/api_count.php?category=${selected}`;
    console.log(api);
    if (selected !== "") {
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.category_question_count);
          setCount(data.category_question_count.total_question_count);
        });
    } else {
      setCount("category undefined");
      console.log("category undefined");
    }
  };

  return (
    <div className="p-4">
      <h2>No. of Questions in each Category</h2>
      <select
        name="category"
        className="form-select form-select-sm m-2"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="" disabled selected hidden>
          Select a category...
        </option>
        {options &&
          options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
      </select>
      <h2>{count}</h2>
      <button className="btn-primary btn-lg m-2" onClick={getCount}>
        Count
      </button>
    </div>
  );
};

export default FetchCountBtn;
