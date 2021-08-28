import "./App.css";
import FetchButton from "./features/quiz/FetchButton";
import FetchCountBtn from "./features/quiz/FetchCountBtn";
import Settings from "./features/quiz/Settings";

function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Settings />
      <FetchButton />
      <FetchCountBtn />
    </div>
  );
}

export default App;
