const INITIAL_STATE = {
  loading: false,
  email: "",
  uname: "",
  password: "",
  contact: "",
  confirmpassWord: "",
  shouldLoadData: false,
  usernameMsg: "",
  contactMsg: "",
  emailMsg: "",
};

import {
  LOAD_CONTACT_MSG,
  LOAD_DATA_SET,
  LOAD_EMAIL_MSG,
  LOAD_USERNAME_MSG,
  REG_CONFIRMPASS,
  REG_CONTACT,
  REG_EMAIL,
  REG_PASS,
  REG_UNAME,
  RESET_CONTACT,
  RESET_EMAIL,
  RESET_REG,
  RESET_USERNAME,
  SHOW_LOADER_REG,
} from "../action/types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_REG:
      return {
        ...state,
        uname: "",
        email: "",
        contact: "",
        password: "",
        confirmpassWord: "",
        loader: false,
      };
      break;
    case REG_UNAME:
      // console.log("reducer--->", action.payload);
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
    case LOAD_DATA_SET:
      return { ...state, shouldLoadData: action.payload };
      break;
    case LOAD_USERNAME_MSG:
      return { ...state, usernameMsg: action.payload };
      break;
    case RESET_USERNAME:
      return { ...state, uname: "" };
      break;
    case LOAD_EMAIL_MSG:
      return { ...state, emailMsg: action.payload };
      break;
    case RESET_EMAIL:
      return { ...state, email: "" };
      break;
    case LOAD_CONTACT_MSG:
      return { ...state, contactMsg: action.payload };
      break;
    case RESET_CONTACT:
      return { ...state, contact: "" };
      break;
    default:
      return state;
  }
};
