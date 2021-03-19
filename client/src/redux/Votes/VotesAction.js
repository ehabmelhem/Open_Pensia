import axios from "axios";
import {
  //VOTES
  ADD_VOTE,
  UPDATE_VOTE,
} from "../actionTypes";

// VOTES Action Creators

export const addVote = (content) => ({
  type: ADD_VOTE,
  payload: {
    content,
    // company_id, director_id, question_id, ?user_id
  },
});

export const updateVote = (content) => ({
  type: UPDATE_VOTE,
  payload: {
    content,
  },
});

// export const fetchDefaultQuestionSuccess = (content) => ({
//   type: FETCH_DEFAULT_QUESTION_SUCCESS,
//   payload: {
//     securityID: content.securityID,
//     companyName: content.companyName,
//     defaultQuestionInfo: content.defaultQuestionInfo,
//   },
// });

// export function fetchCompanyQuestions(Security_ID) {
//   Security_ID =
//     typeof Security_ID === "number" ? Security_ID.toString() : Security_ID;
//   return (dispatch) => {
//     dispatch(fetchQuestionsRequest());
//     return axios
//       .post("/", { Security_ID })
//       .then((res) => {
//         console.log("inside the get fetchCompanyQuestions().then");
//         console.log(res.data.allResult);
//         dispatch(fetchQuestionsSuccess(res.data.allResult));
//       })
//       .catch((error) => {
//         dispatch(fetchQuestionsFailure(error.message));
//       });
//   };
// }

// export function fetchCompanyDefaultQuestion(Security_ID) {
//   Security_ID =
//     typeof Security_ID === "number" ? Security_ID.toString() : Security_ID;
//   Security_ID = "520040700";
//   return (dispatch) => {
//     dispatch(fetchDefaultQuestionRequest());
//     return axios
//       .post("/proxy/get-corporate-default-question-data", {
//         Security_ID: Security_ID,
//       })
//       .then((res) => {
//         dispatch(fetchDefaultQuestionSuccess(res.data));
//         console.log(res.data);
//       })
//       .catch((error) => {
//         dispatch(fetchDefaultQuestionFailure(error.message));
//         console.log(error.message);
//       });
//   };
// }
