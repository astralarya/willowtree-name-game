import {AppAction, AppState} from "../types/redux";

const initialState: AppState = {
  status: "not-ready",
  teamMembers: [],

  currFaces: [],
  currIdx: null,
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
    case "NEW_ROUND":
      const currFaces = shuffle([...state.teamMembers]).slice(0, 5);
      const currIdx = Math.floor(Math.random() * 5);
      return {...state,
        currFaces,
        currIdx,
      };
    default:
      return state;
  }
};

// Fisher-Yates Shuffle
const shuffle = (array: any[]) => {
  array.forEach((_: any, idx1: number, arr: any[]) => {
     const idx2 = Math.floor(Math.random() * (idx1 + 1));
     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  });
  return array;
};

export default rootReducer;
