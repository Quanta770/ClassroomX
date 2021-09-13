import { createAction } from "@reduxjs/toolkit";

export const Actions = {
  //api call actions
  SET_SESSION_TOKEN: "SET_SESSION_TOKEN",
  SET_RESPONSE_CODE: "SET_RESPONSE_CODE",
  SET_LOADING: "SET_LOADING",
  SET_ERROR_MESSAGE: "SET_ERROR_MESSAGE",
  //settings actions
  ADD_CATEGORY_LIST: "ADD_CATEGORY_LIST",
  ADD_CATEGORY: "ADD_CATEGORY",
  ADD_DIFFICULTY: "ADD_DIFFICULTY",
  ADD_TYPE: "ADD_TYPE",
  SET_AMOUNT: "SET_AMOUNT",
  //quiz state actions
  ADD_QUESTIONS: "ADD_QUESTIONS",
  SET_SCORE: "SET_SCORE",
  SET_QUESTION_INDEX: "SET_QUESTION_INDEX",
  QUIZ_END: "QUIZ_END",
};

//action creation function
export const setCategoryList = createAction(Actions.ADD_CATEGORY_LIST);
export const setCategory = createAction(Actions.ADD_CATEGORY);
export const setDifficulty = createAction(Actions.ADD_DIFFICULTY);
export const setType = createAction(Actions.ADD_TYPE);
export const setAmount = createAction(Actions.SET_AMOUNT);
export const setSessionToken = createAction(Actions.SET_SESSION_TOKEN);
export const setLoading = createAction(Actions.SET_LOADING);
export const setQuizScore = createAction(Actions.SET_SCORE);
export const setQuestions = createAction(Actions.ADD_QUESTIONS);
export const setIndex = createAction(Actions.SET_QUESTION_INDEX);
export const setQuizEnd = createAction(Actions.QUIZ_END);
