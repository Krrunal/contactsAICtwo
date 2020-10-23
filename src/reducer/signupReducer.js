const INITIAL_STATE = {
  loading: false,
  email: "",
  uname: "",
  password: "",
  contact:"",
  confirmpassWord: "",
};

import {
  REG_CONTACT,
  REG_EMAIL,
  REG_PASS,
  REG_CONFIRMPASS,
  REG_UNAME,
  RESET_REG,
  SHOW_LOADER_REG,
} from "../action/types";

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case RESET_REG:
      return INITIAL_STATE;
      break;
    case REG_UNAME:
      console.log('reducer--->',action.payload)
      return { ...state, uname: action.payload };
      break;
    case REG_EMAIL:
      return { ...state, email: action.payload };
      break;
    case REG_CONTACT:
      return { ...state, contact: action.payload };
      break;
    case REG_PASS:
      return { ...state, password: action.payload };
      break;
    case REG_CONFIRMPASS:
      return { ...state, confirmpassWord: action.payload };
      break;  
    case SHOW_LOADER_REG:
      return { ...state, loader: action.payload };
      break;
    default:
      return state;
  }
};
