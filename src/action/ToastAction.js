import {Toast} from 'native-base';
export const showToastSuccess = (msg) => {
    Toast.show({
      text: msg,
      duration: 3000,
      type: 'success',
      style: {
        backgroundColor: "black",
        borderColor:"#fff",
        borderWidth:0.7,
        width: "90%",
        alignSelf: 'center',
        borderRadius: 5
      }
    });
  }
  
  export const showToastError = (msg) => {
    Toast.show({
      text: msg,
      duration: 3000,
      type: 'danger',
      style: {
        backgroundColor: "black",
        borderColor:"#fff",
        borderWidth:0.7,
        width: "90%",
        alignSelf: 'center',
        borderRadius: 5
      }
    });
  }
  