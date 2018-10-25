import {TOGGLE_ACTIVE} from "../constants/action-types.tsx";

const initialState = {
  active: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return {...state,
        active: !state.active,
      };
    default:
      return state;
  }
};

export default rootReducer;
