const INITIAL_STATE = {
  loading: false,
  email: "",
  password: "",
  phone:"",
  shouldLoadData: false,
};

import {
  LOAD_DATA_SET,
  LOGIN_EMAIL,
  LOGIN_PASS,
  LOGIN_PHONE,
  RESET_LOGIN,
  SHOW_LOADER_LOGIN,
} from "../action/types";

export default (state = INITIAL_STATE, action) => {
  console.log(INITIAL_STATE.email);
  switch (action.type) {
    case "Navigation/NAVIGATE":
      return { ...state, currentRoute: action.routeName };
      break;
    case RESET_LOGIN:
      return { ...state, email: "", password: "" ,phone:""};
      break;

    case LOAD_DATA_SET:
      return { ...state, shouldLoadData: action.payload };
      break;

    case LOGIN_EMAIL:
      return { ...state, email: action.payload };
      break;

    case LOGIN_PASS:
      return { ...state, password: action.payload };
      break;

    case LOGIN_PHONE:
      return { ...state, phone: action.payload };
      break;

    case SHOW_LOADER_LOGIN:
      return { ...state, loader: action.payload };
      break;

    default:
      return state;
  }
};
