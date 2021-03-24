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
    securityID: content.securityID,
    questionID: content.questionID,
    directorID: content.directorID,
    userID: content.userID,
    vote: content.vote,
    // company_id, director_id, question_id, ?user_id
  },
});

export const updateVote = (content) => ({
  type: UPDATE_VOTE,
  payload: {
    content,
  },
});

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
