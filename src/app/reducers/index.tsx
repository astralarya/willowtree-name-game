import {AppAction, AppState} from "../types/redux";

const initialState: AppState = {
  status: "not-ready",
  teamMembers: [],
};

const rootReducer = (state: AppState = initialState, action: AppAction) => {
  switch (action.type) {
    case "REQUEST_DATA":
      return {...state,
        status: "loading",
      };
    case "REQUEST_ERROR":
      return {...state,
        status: "error",
      };
    case "RECIEVE_DATA":
      return {...state,
        status: "ready",
        teamMembers: action.teamMembers,
      };
    default:
      return state;
  }
};

export default rootReducer;
