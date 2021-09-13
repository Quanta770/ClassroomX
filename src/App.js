import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <h3>Navbar</h3>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
