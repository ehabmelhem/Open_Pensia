import axios from "axios";
import {
  //VOTES
  ADD_VOTE,
  UPDATE_VOTE,
} from "../actionTypes";

const initialState = {
  // add relevant vote state
  votes: [
    {
      securityID: "",
      questionID: "",
      directorID: "",
      vote: 0,
    },
  ],
};

const VotesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_QUESTIONS_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    
    case ADD_VOTE:
      return {
        votes: [
          ...state.vates,
          {
            securityID: action.payload.securityID,
            questionID: action.payload.questionID,
            directorID: action.payload.directorID,
            vote: action.payload.vote,
          },
        ],
      };
    case UPDATE_VOTE:
      return {
        loading: false,
        securityID: action.payload.securityID,
        questionID: action.payload.questionID,
        directorID: action.payload.directorID,
        like: action.payload.like,
        error: "",
      };
    // case FETCH_DEFAULT_QUESTION_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case FETCH_DEFAULT_QUESTION_SUCCESS:
    //   return {
    //     loading: false,
    //     error: "",
    //     securityID: action.payload.securityID,
    //     companyName: action.payload.companyName,
    //     questions: [],
    //     defaultQuestion: action.payload.defaultQuestionInfo,
    //   };
    // case FETCH_DEFAULT_QUESTION_FAILURE:
    //   return {
    //     loading: false,
    //     error: action.payload.error,
    //     securityID: "",
    //     companyName: "",
    //     questions: [],
    //     defaultQuestion: {
    //       code: "",
    //       topic: "",
    //       ave: "",
    //       officers: [],
    //     },
    //   };
    default:
      return state;
  }
};

export default VotesReducer;
