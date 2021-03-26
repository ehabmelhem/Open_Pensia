import axios from "axios";
import {
  //VOTES
  ADD_VOTE,
  UPDATE_VOTE,
} from "../actionTypes";

const initialState = {
  // add relevant vote state
  votes: [],
};

const VotesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_QUESTIONS_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    case ADD_VOTE: {
      // securityID: companyData.securityID,
      // questionID: officerData.Proxy_code,
      // officerID: officerData.id,
      // vote: 1,

      let new_votes = state.votes;

      new_votes = state.votes.filter(function (item) {
        return (
          item.securityID !== action.payload.securityID &&
          item.questionID !== action.payload.questionID &&
          item.officerID !== action.payload.officerID
        );
        // check also useriD and officer id
      });

      new_votes = [
        ...new_votes,
        {
          securityID: action.payload.securityID,
          questionID: action.payload.questionID,
          officerID: action.payload.officerID,
          vote: action.payload.vote,
        },
      ];
      console.log(new_votes);

      // new_votes.add(action.payload);

      return {
        votes: [
          ...state.votes,
          {
            securityID: action.payload.securityID,
            questionID: action.payload.questionID,
            directorID: action.payload.directorID,
            vote: action.payload.vote,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export default VotesReducer;
