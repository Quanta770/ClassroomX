import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryList } from "../../actions/actionQuiz";

//axios cancel tokens
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

//api urls

const apiUrl = "https://opentdb.com/api_category.php";
const tokenUrl = "https://opentdb.com/api_token.php?command=request";

const getList = axios.get(apiUrl, { cancelToken: source.token });
const getToken = axios.get(tokenUrl, { cancelToken: source.token });
export const GetQuizCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      value: true,
    });
    axios.all([getList, getToken]).then(
      axios.spread((res, token) => {
        console.log(setCategoryList([...res.data.trivia_categories]));
        dispatch(setCategoryList([...res.data.trivia_categories]));
        console.log("data: ");

        console.log(token.data);
      })
    );
  } catch (error) {
    console.log(error);
    source.cancel("api cancel");
  }
};
