import React, { useEffect, useState } from "react";

const Settings = () => {
  //useState hooks
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  //useEffect hook gets data from api after DOM render
  useEffect(() => {
    const controller = new AbortController();
    const apiUrl = "https://opentdb.com/api_category.php";
    const signal = controller.signal;

    fetch(apiUrl, { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        setOptions(data.trivia_categories);
      })
      .catch((error) => {
        throw error;
      });

    return function cleanup() {
      controller.abort();
    };
  }, [setOptions]);

  useEffect(() => {
    console.log("test");

    console.log("category after use effect: ", category);
    let arr = options && options.find((a) => a.id === Number(category));
    console.log(arr);
  }, [options, category]);

  console.log("diff: ", difficulty + "type: ", type);

  return (
    <div className="p-4">
      <h2>Select Category</h2>
      <select
        className="form-select form-select-sm"
        value={category}
        name="question_catgory"
        onChange={(e) => setCategory(e.target.value)}
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
        onChange={(e) => setDifficulty(e.target.value)}
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
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Any</option>
        <option value="multiple">Multiple choice</option>
        <option value="boolean">True/False</option>
      </select>
    </div>
  );
};

export default Settings;
