import Utils from "./";

const isValidUserName = (name) => {
  return name == undefined || !Utils.isValidUserName(name) ? false : true;
};

const isValidEmail = (email) => {
  return email == undefined || !Utils.isValidEmail(email) ? false : true;
};
const isValidPass = (pass) => {
  return pass == undefined || !Utils.isValidPass(pass) ? false : true;
};
const isValidConfirmPass = (confirmPass) => {
  return confirmPass == undefined || !Utils.isValidConfirmPass(confirmPass)
    ? false
    : true;
};
const isValidMobilNumber = (number) => {
  return number == undefined || !Utils.isValidMobilNumber(number)
    ? false
    : true;
};
export default {
  isValidUserName,
  isValidEmail,
  isValidPass,
  isValidConfirmPass,
  isValidMobilNumber,
};