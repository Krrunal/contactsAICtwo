// const initialState = false;
// export const themeReducer = (state = initialState,action) => {
//     console.log('reducer',state)
//     if(action.type == 'change_theme'){
//         return action.payload
//     }
//     return state;
// }

import { darkTheme, lightTheme } from "../containers/theme/themeProps";

import {SWITCH_THEME} from '../action/themeAction'

const initialState = {
  theme: { ...lightTheme}
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      let newState = {
        ...state,
        theme: { ...state.theme, ...action.baseTheme }
      }
      return newState
    default:
      return state
  }
};

export default themeReducer;