import {Dimensions} from 'react-native';
import {Toast} from 'native-base';
var {width,height} =  Dimensions.get('window');

export const showToastSuccess = (msg) => {
    Toast.show({
      text: msg,
      duration: 5000,
      type: 'success',
      style: {
        backgroundColor: "black",
        borderColor:"#fff",
        borderWidth:0.7,
        width: "90%",
        alignSelf: 'center',
        borderRadius: 5,
        bottom: height * 0.05
      }
    });
  }
  
  export const showToastError = (msg) => {
    Toast.show({
      text: msg,
      duration: 5000,
      type: 'danger',
      style: {
        backgroundColor: "black",
        borderColor:"#fff",
        borderWidth:0.7,
        width: "90%",
        alignSelf: 'center',
        borderRadius: 5,
        bottom: height * 0.05
      }
    });
  }
    