//initial state
const initState = {
  options: [],
  category: 0,
  difficulty: "",
  type: "",
  amount: 10,
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "quiz/category":
      return {
        ...state,
        options: {
          ...state.options,
          category: action.value,
        },
      };

    case "quiz/difficulty":
      return {
        ...state,
        options: {
          ...state.options,
          difficulty: action.value,
        },
      };

    case "quiz/type":
      return {
        ...state,
        options: {
          ...state.options,
          type: action.value,
        },
      };
    case "quiz/amount":
      return {
        ...state,
        options: {
          ...state.options,
          amount: action.value,
        },
      };

    case "quiz/questions":
      return {
        ...state,
        options: {
          ...state.options,
          questions: action.value,
        },
      };
    case "quiz/response_code":
      return {
        ...state,
        options: {
          ...state.options,
          response_code: action.value,
        },
      };

    case "quiz/session_token":
      return {
        ...state,
        options: {
          ...state.options,
          response_code: action.value,
        },
      };
    default:
      return state;
  }
};

export default Reducer;
