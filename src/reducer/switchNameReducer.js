import {
  firstNameFirst,
  lastNameFirst,
} from "../containers/theme/nameFirstProps";

import { SWITCH_NAME } from "../action/switchName";

const initialState = {
  nameChange: { ...firstNameFirst },
};

const switchNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_NAME:
      let newState = {
        ...state,
        nameChange: { ...state.nameChange, ...action.NameContact },
      };
      return newState;
    default:
      return state;
  }
};

export default switchNameReducer;
