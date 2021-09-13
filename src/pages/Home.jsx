import FetchButton from "../quiz/containers/FetchButton";
import Settings from "../quiz/containers/Settings";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <h1>Quiz App</h1>
      <Settings />
      <FetchButton />

      <Link to={`/quiz`}>
        <h2>Start</h2>
      </Link>
    </div>
  );
}
