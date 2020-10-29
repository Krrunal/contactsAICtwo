const INITIAL_STATE = {
    loading:false,
    email:"",
    password:"",
    shouldLoadData:false,
    
  };
  
  import {
    SHOW_LOADER_LOGIN,
    LOAD_DATA_SET,
    LOGIN_EMAIL,
    LOGIN_PASS,
    RESET_LOGIN,
  } from '../action/types';
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'Navigation/NAVIGATE':
        return {...state, currentRoute:action.routeName}
        break;
      // case RESET_LOGIN:
      //   return INITIAL_STATE
      //   break;

      case LOAD_DATA_SET:
        return {...state, shouldLoadData:action.payload}
        break;
    
      case LOGIN_EMAIL:
        return {...state,email:action.payload}
        break;

      case LOGIN_PASS:
        return {...state,password:action.payload}
        break;

      case SHOW_LOADER_LOGIN:
        return {...state,loader:action.payload}
        break;
    
      default:
        return state;
    }
  };
  