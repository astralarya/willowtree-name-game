import {AppAction, AppState, TeamMember} from "../types/redux";

const initialState: AppState = {
  status: "not-ready",
  teamMembers: [],

  currFaces: [],
  currIdx: null,
  currReveal: [],
};

const FACE_ARRAY_LENGTH = 5;

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
      const currFaces = shuffle([...state.teamMembers]).slice(0, FACE_ARRAY_LENGTH);
      const currIdx = Math.floor(Math.random() * FACE_ARRAY_LENGTH);
      return {...state,
        currFaces,
        currIdx,
        currReveal: new Array(FACE_ARRAY_LENGTH).fill(false),
      };
    case "ANSWER_INCORRECT":
      return {...state,
        currReveal: state.currFaces.map((teamMember: TeamMember, idx: number) => {
          return teamMember.slug === action.slug || state.currReveal[idx];
        }),
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
