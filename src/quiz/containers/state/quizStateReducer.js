import { Actions } from "../../../actions/actionQuiz";

const DefaultState = {
  questions: [],
  score: 0,
  end: false,
};

const quizStateReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case Actions.ADD_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };

    case Actions.SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    case Actions.QUIZ_END:
      return {
        ...state,
        end: action.payload,
      };
    default:
      return state;
  }
};

export default quizStateReducer;
