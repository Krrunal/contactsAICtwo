import {
  LOAD_CONTACT_MSG,
  LOAD_DATA_SET,
  LOAD_EMAIL_MSG,
  LOAD_USERNAME_MSG,
  LOGIN_EMAIL,
  LOGIN_NUMBER,
  LOGIN_PASS,
  LOGIN_USER_SUCCESS,
  REG,
  REG_CONFIRMPASS,
  REG_CONTACT,
  REG_EMAIL,
  REG_PASS,
  REG_UNAME,
  RESET_CONTACT,
  RESET_EMAIL,
  RESET_LOGIN,
  RESET_REG,
  RESET_USERNAME,
  SHOW_LOADER_LOGIN,
  SHOW_LOADER_REG
} from "./types";
import {afterSign, myInfo} from '../services/FirebaseDatabase/afterSign';
import { showToastError, showToastSuccess } from "./ToastAction";

import AsyncStorage from '@react-native-community/async-storage';
import Constants from "./Constants";
import { NavigationActions } from "react-navigation";
import NavigationService from "./navigationService";
import { Platform } from "react-native";
import { addItem } from '../services/FirebaseDatabase/addAfterSignup';
import { fcmService } from '../services/FirebaseDatabase/FCMService'
import firebase from "react-native-firebase";
import {updateItem} from '../services/FirebaseDatabase/afterLogin';

export const loadDataChange = (payload) => {
  return {
    type: LOAD_DATA_SET,
    payload: payload,
  };
};

const loginUserSuccess = (data, dispatch) => {
  dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
  dispatch({ type: SHOW_LOADER_REG, payload: false });
  dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  dispatch({ type: RESET_LOGIN });
  dispatch({ type: RESET_REG });
  dispatch({ type: LOAD_DATA_SET, payload: data.data });
 // console.log('log in data ---->',data.data)
  updateItem(data.data.username)
  dispatch(NavigationService.navigate("SerachEditContact"));
};

const regUserSuccess = (data, dispatch) => {
  dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
  dispatch({ type: SHOW_LOADER_REG, payload: false });
  dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  dispatch({ type: RESET_LOGIN });
  dispatch({ type: RESET_REG });
  dispatch({ type: LOAD_DATA_SET, payload: data.data });
  console.log('data---->',data.data)
  if(Platform.OS  ==  'android'){ 
   console.log("Platfrom version",Platform.OS)
  }else{
    console.log("Platfrom version",Platform.OS)
  }
  addItem( data.data.username, data.data.user_id, data.data.is_active, data.data.fcmToken, data.data.contact, data.data.email,Platform.OS)
  dispatch(NavigationService.navigate("AddContact"));

};
  // onRegister = (token) => {
  //   console.log("[Notification fcm ] onRegister:", token)
  // }

  // onNotification = (notify) => {
  //   console.log("[Notification fcm ] : onNotification:", notify)
  //   const notification = fcmService.buildNotification(this.createNotification(notify))
  //   fcmService.displayNotification(notification)
  // }

  // onOpenNotification = (notify) => {
  //   console.log("[Notification fcm ] : onOpenNotification ", notify)
  //   this.setState({ notifyData: notify._data }, () => this.setState({ isVisibleOverlay: true }))
  
const loginUserFail = (dispatch) => {
  dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
  dispatch({ type: SHOW_LOADER_REG, payload: false });
  dispatch({ type: RESET_LOGIN });
  dispatch({ type: RESET_REG });

  //dispatch({ type: LOGIN_USER_SUCCESS, payload:{} });
};

const checkUsernameSuccess = (data, dispatch) => {
  dispatch({ type: LOAD_USERNAME_MSG, payload: data });
};
const checkUsernameFail = (data, dispatch) => {
  dispatch({ type: LOAD_USERNAME_MSG, payload: data });
  // dispatch({ type: RESET_USERNAME });
};

const checkEmailSuccess = (data, dispatch) => {
  dispatch({ type: LOAD_EMAIL_MSG, payload: data });
};
const checkEmailFail = (data, dispatch) => {
  dispatch({ type: LOAD_EMAIL_MSG, payload: data });
  // dispatch({ type: RESET_EMAIL });
};

const checkContactSuccess = (data, dispatch) => {
  dispatch({ type: LOAD_CONTACT_MSG, payload: data });
};
const checkContactFail = (data, dispatch) => {
  dispatch({ type: LOAD_CONTACT_MSG, payload: data });
  // dispatch({ type: RESET_CONTACT });
};

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
export const loginNumberChange = (number) => {
  return {
    type: LOGIN_NUMBER,
    payload: number,
  };
}
export const checkUsername = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const baseurl = Constants.baseurl;
    const username = state.reg.uname;
    var _body = new FormData();
    _body.append("username", username);
    fetch(baseurl + "check_username", {
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
          checkUsernameSuccess(data, dispatch);
        } else {
          checkUsernameFail(data, dispatch);
        }
      })
      .catch((error) => {});
  };
};

export const checkEmail = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const baseurl = Constants.baseurl;
    const email = state.reg.email;
    var _body = new FormData();
    _body.append("email", email);
    fetch(baseurl + "check_email", {
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
          checkEmailSuccess(data, dispatch);
        } else {
          checkEmailFail(data, dispatch);
        }
      })
      .catch((error) => {
        
      });
  };
};

export const checkContact = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const baseurl = Constants.baseurl;
    const contact = state.reg.contact;
    var _body = new FormData();
    _body.append("contact", contact);
    fetch(baseurl + "check_contact", {
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
          // console.log("response true-->", data);
          checkContactSuccess(data, dispatch);
        } else {
          // console.log("response else-->", data);
          checkContactFail(data, dispatch);
        }
      })
      .catch((error) => {});
  };
};
export const signUpUser = () => {

  return async (dispatch, getState) => {
    const state = getState();
    const baseurl = Constants.baseurl;
    const email = state.reg.email;
    const password = state.reg.password;
    const contact = state.reg.contact;
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
          // console.log("response true-->", data);
          showToastSuccess(data.message);
          regUserSuccess(data, dispatch);
        } else {
          // console.log("response else-->", data.message);
          showToastSuccess(data.message);
          loginUserFail(dispatch);
          dispatch({ type: SHOW_LOADER_REG, payload: false });
        }
      })
      .catch((error) => {
        // showToastError("No Internet Connection!");
        // loginUserFail(dispatch);
        dispatch({ type: SHOW_LOADER_REG, payload: false });
      });
  };
};

export const loginUser = () => {
  return (dispatch, getState) => {
    console.log("GET STATE ---->",getState());

    const state = getState();
    const baseurl = Constants.baseurl;
    const loginEmail = state.login.email;
    const loginPassword = state.login.password;

    var _body = new FormData();
    _body.append("email", loginEmail);
    _body.append("password", loginPassword);

    dispatch({ type: SHOW_LOADER_LOGIN, payload: true });
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
        // showToastError("No Internet Connection!");
        // loginUserFail(dispatch);
        dispatch({ type: SHOW_LOADER_LOGIN, payload: false });
      });
  };
};
