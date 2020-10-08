import { CHANGE_THEME } from './types'
import { color } from 'react-native-reanimated';

export const changeTheme = (theme) => {
 return {
      type: CHANGE_THEME,
      payload: theme,
  
    };
  };


//   const initialState = false

// export const themeReducer = (state = initialState,action) => {
//     if(action.type == 'change_theme'){
//         return action.payload
//     }
//     return state
// }
