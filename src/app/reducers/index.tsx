import {AppAction, AppState} from "../types/redux";

const initialState: AppState = {
  active: true,
};

const rootReducer = (state: AppState = initialState, action: AppAction) => {
  switch (action.type) {
    case "TOGGLE_ACTIVE":
      return {...state,
        active: !state.active,
      };
    default:
      return state;
  }
};

export default rootReducer;
