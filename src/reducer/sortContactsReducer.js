import {firstName, lastName} from '../containers/theme/sortNameProps';

import {SWITCH_CONTACT} from '../action/switchContactAction'

const initialState = {
  contactChange: { ...firstName}
};

const sortContactsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SWITCH_CONTACT:
      let newState = {
        ...state,
        contactChange: { ...state.contactChange, ...action.BaseContact }
      }
      return newState
    default:
      return state
  }
};

export default sortContactsReducer;