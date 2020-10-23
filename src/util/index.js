import { Alert, Platform } from "react-native";

class Util {
  keyExtractor = (item: Object, index: number) => index;


  isValidUserName(name : string){
    const re = /^[a-z,A-Z]+$/;
    return re.test(name);
  }
  isValidMobilNumber(number : number) {
    let re = /^[0]?[6789]\d{9}$/;
    return re.test(number);
  };
  isValidEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  isValidPass(password: string) {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(password);
  }

}
export default new Util();