import axios from "axios";
import {
  //COMPANY
  SET_COMPANY_DETAILS,
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  FETCH_DEFAULT_QUESTION_REQUEST,
  FETCH_DEFAULT_QUESTION_SUCCESS,
  FETCH_DEFAULT_QUESTION_FAILURE,
} from "../actionTypes";

// COMPANY Action Creators

//comapany details
export const setCompanyDetails = (companyName, securityID) => {
  console.log("setCompanyDetails", companyName, securityID);
  return {
    type: SET_COMPANY_DETAILS,
    payload: {
      companyName,
      securityID,
    },
  };
};

// Questions
export const fetchQuestionsRequest = () => ({
  type: FETCH_QUESTIONS_REQUEST,
});

export const fetchQuestionsSuccess = (content) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: {
    securityID: content.securityID,
    companyName: content.companyName,
    questions: content.questions,
  },
});

export const fetchQuestionsFailure = (error) => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload: {
    error,
  },
});

export function fetchCompanyQuestions(securityID, companyName) {
  securityID =
    typeof securityID === "number" ? securityID.toString() : securityID;
  console.log(securityID);

  return (dispatch) =>
    _fetchCompanyQuestions(dispatch, companyName, securityID);
}

export function _fetchCompanyQuestions(dispatch, securityID) {
  dispatch(fetchQuestionsRequest());
  console.log("insede _fetchCompanyQuestions");
  axios
    .post("/proxy/get-Question-by-secur-Id", {
      Security_ID: securityID,
    })
    .then((res) => {
      console.log(res.data);
      console.log("inside the get fetchCompanyQuestions().then");
      dispatch(
        fetchQuestionsSuccess({
          securityID,
          questions: res.data,
        })
      );
      console.log(res.data);
    })
    .catch((error) => {
      dispatch(fetchQuestionsFailure(error.message));
      console.log(error.message);
      console.log("error.message");
    });
}

// COMPANY Action Creators -- Default Question

export const fetchDefaultQuestionRequest = () => ({
  type: FETCH_DEFAULT_QUESTION_REQUEST,
});

export const fetchDefaultQuestionSuccess = ({
  defaultQuestionInfo,
  securityID,
}) => ({
  type: FETCH_DEFAULT_QUESTION_SUCCESS,
  payload: {
    securityID: securityID,
    // companyName: companyName,
    defaultQuestion: {
      code: defaultQuestionInfo.proxyCode,
      topic: defaultQuestionInfo.topic,
      ave: defaultQuestionInfo.ave,
      officers: defaultQuestionInfo.officers,
    },
  },
});

export const fetchDefaultQuestionFailure = (error) => ({
  type: FETCH_DEFAULT_QUESTION_FAILURE,
  payload: {
    error,
  },
});

export function fetchCompanyDefaultQuestion(securityID, fundName, chanel) {
  securityID =
    typeof securityID === "number" ? securityID.toString() : securityID;

  securityID = securityID; //temporary
  fundName = fundName;
  chanel = chanel;

  return (dispatch) =>
    _fetchCompanyDefaultQuestion(dispatch, securityID, fundName, chanel);
}

function _fetchCompanyDefaultQuestion(dispatch, securityID, fundName, chanel) {
  dispatch(fetchDefaultQuestionRequest());
  axios
    .post("/proxy/get-corporate-default-question-data", {
      Security_ID: securityID,
      fundName: fundName,
      chanel: chanel,
    })
    .then((res) => {
      dispatch(
        fetchDefaultQuestionSuccess({
          defaultQuestionInfo: res.data,
          securityID,
          companyName: res.data.company_name,
        })
      );
      console.log(res.data);
    })
    .catch((error) => {
      dispatch(fetchDefaultQuestionFailure(error.message));
      console.log(error.message);
      console.log("error.message");
    });
}
