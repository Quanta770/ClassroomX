import axios from "axios";
import { setQuestions } from "../../actions/actionQuiz";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const fetchQuestions =
  (category, difficulty, type, amount) => async (dispatch) => {
    let apiURL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    try {
      axios.get(apiURL, { cancelToken: source.token }).then((res) => {
        console.log(res.data.results);
        dispatch(setQuestions([...res.data.results]));
      });
    } catch (error) {
      source.cancel();
      console.log("failed to get questions from api");
    }
  };

export default fetchQuestions;
