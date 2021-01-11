import {
    offDate,
    onDate,
} from '../containers/theme/dateProps';

import { SWITCH_DATE } from '../action/switchDate'

const initialState = {
    dateChange: { ...onDate }
  };
  
  const switchDateReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case SWITCH_DATE:
        let newState = {
          ...state,
          dateChange: { ...state.dateChange, ...action.SwitchDate },
        };
        return newState;
      default:
        return state;
    }
  };
  
  export default switchDateReducer;
  