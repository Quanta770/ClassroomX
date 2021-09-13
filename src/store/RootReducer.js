import quizSettingsReducer from "../quiz/containers/state/quizSettingsReducer";
import { combineReducers } from "redux";
import quizStateReducer from "../quiz/containers/state/quizStateReducer";

const RootReducer = combineReducers({
  quizSettings: quizSettingsReducer,
  quizState: quizStateReducer,
});

export default RootReducer;
