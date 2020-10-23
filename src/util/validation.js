import {Root, Toast} from 'native-base';

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const checkDecimal = (num=0) => {
  return num % 1 != 0;
}

export const showToastError = (msg) => {
 
  Toast.show({
    text: msg,
    type: 'danger',
    duration: 3000,
    style: {
      backgroundColor: "#c1a786",
      borderColor:"#fff",
      borderWidth:0.7
    }
  });

}

export const validateEmail = (str) => {
  var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(str);
}
