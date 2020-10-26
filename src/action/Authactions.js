import {
  LOAD_DATA_SET,
  LOGIN_EMAIL,
  LOGIN_PASS,
  LOGIN_USER_SUCCESS,
  REG,
  REG_CONFIRMPASS,
  REG_CONTACT,
  REG_EMAIL,
  REG_PASS,
  REG_UNAME,
  RESET_LOGIN,
  RESET_REG,
  SHOW_LOADER_LOGIN,
  SHOW_LOADER_REG,
} from "./types";
import { showToastError, showToastSuccess } from "./ToastAction";

import Constants from "./Constants";
import { NavigationActions } from "react-navigation";
import NavigationService from './navigationService';
import { Platform } from "react-native";
import firebase from "react-native-firebase";

export const loadDataChange = (payload) => {
  return{
    type: LOAD_DATA_SET,payload: payload };
}

const loginUserSuccess = (data, dispatch) => {
  dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
  dispatch({ type: SHOW_LOADER_REG, payload: false });
  dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  dispatch({ type: RESET_LOGIN });
  dispatch({ type: RESET_REG });
  dispatch({ type: LOAD_DATA_SET, payload: data.data });
  dispatch( NavigationService.navigate("AddContact") );
};

const regUserSuccess = (data, dispatch) => {
  dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
  dispatch({ type: SHOW_LOADER_REG, payload: false });
  dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  dispatch({ type: RESET_LOGIN });
  dispatch({ type: RESET_REG });
  dispatch({ type: LOAD_DATA_SET, payload: data.data });
  dispatch( NavigationService.navigate("AddContact") );
};

const loginUserFail = (dispatch) => {
  dispatch({ type: SHOW_LOADER_LOGIN, payload:false });
  dispatch({ type: SHOW_LOADER_REG, payload:false });
  //dispatch({ type: LOGIN_USER_SUCCESS, payload:{} });
}

export const regEmailChange = (email) => {
  return { type: REG_EMAIL, payload: email };
};
export const regunameChange = (uname) => {
  return { type: REG_UNAME, payload: uname };
};
export const regcontactChange = (contact) => {
  return { type: REG_CONTACT, payload: contact };
};
export const regPassChange = (pass) => {
  return { type: REG_PASS, payload: pass };
};
export const regconfirmpassWord = (confirmpassWord) => {
  return { type: REG_CONFIRMPASS, payload: confirmpassWord };
};

//login
export const loginEmailChange = (email) => {
  return {
    type: LOGIN_EMAIL,
    payload: email,
  };
};
export const loginPassChange = (pass) => {
  return {
    type: LOGIN_PASS,
    payload: pass,
  };
};

export const signUpUser = () => {
  return async (dispatch, getState) => {
    const state = getState();
    // console.log("getstate==============>", getState());
    const baseurl = Constants.baseurl;
    const email = state.reg.email;
    const password = state.reg.password;
    const contact =
      state.reg.contact.dialCode + "-" + state.reg.contact.unmaskedPhoneNumber;
    const username = state.reg.uname;
    const fcmToken = await firebase.messaging().getToken();
    const platform = Platform.OS;

    var _body = new FormData();
    _body.append("username", username);
    _body.append("email", email);
    _body.append("password", password);
    _body.append("contact", contact);
    _body.append("fcmToken", fcmToken);
    _body.append("platform", platform);
    // console.log("body==============>", _body);
    dispatch({ type: SHOW_LOADER_REG, payload: true });
    fetch(baseurl + "register", {
      method: "POST",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var data = responseJson;
      if (data.status == true) {
          console.log('response true-->',data);
          // data.access_token = "Bearer " + data.access_token;
          showToastSuccess(data.message);
          regUserSuccess(data, dispatch);
        } else {
          console.log('response else-->',data);
          showToastSuccess(data.message);
          loginUserFail(dispatch);
          dispatch({ type: SHOW_LOADER_REG, payload: false });
        }
      })
      .catch((error) => {
        // console.log('response eror-->',error);
        showToastError("No Internet Connection!");
        loginUserFail(dispatch);
        dispatch({ type: SHOW_LOADER_REG, payload: false });
      });
  };
};

export const loginUser = () => {
  return (dispatch, getState) => {
    const state = getState();
    // console.log('state=====>',getState())
    const baseurl = Constants.baseurl; 
    const loginEmail = state.login.email;
    const loginPassword = state.login.password;

    var _body = new FormData();
    _body.append("email", loginEmail);
    _body.append("password", loginPassword);

    dispatch({ type: SHOW_LOADER_LOGIN, payload: true });
    // alert(baseurl)
    fetch(baseurl + "authentication", {
      method: "POST",
      headers: {
        "Content-Type":
          Platform.OS == "ios" ? "application/json" : "multipart/form-data",
      },
      body: _body,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var data = responseJson;
        if (data.status == true) {
          // data.access_token = "Bearer "+data.access_token;
          showToastSuccess(data.message);
          loginUserSuccess(data, dispatch);
          dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
        } else {
          showToastError(data.message);
          loginUserFail(dispatch);
          dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
        }
      })
      .catch((error) => {
        showToastError("No Internet Connection!");
        loginUserFail(dispatch);
        dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
      });
  };
};