import { Actions } from "../../../actions/actionQuiz";

const DefaultState = {
  data: [],
  category: 0,
  difficulty: "",
  type: "",
  amount: 10,
  loading: false,
};

const quizSettingsReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case Actions.ADD_CATEGORY_LIST:
      return {
        ...state,
        data: action.payload,
      };
    case Actions.ADD_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case Actions.ADD_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };

    case Actions.ADD_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case Actions.SET_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };

    case Actions.SET_RESPONSE_CODE:
      return {
        ...state,
        response_code: action.payload,
      };

    case Actions.SET_SESSION_TOKEN:
      return {
        ...state,
        session_token: action.payload,
      };

    case Actions.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default quizSettingsReducer;
