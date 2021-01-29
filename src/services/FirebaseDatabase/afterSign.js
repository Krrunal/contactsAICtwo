import firebase from "./db";

export const afterSign = (
    username,
     
) => {
    firebase.firestore().collection('user').doc(`${username}`).collection('myInfo').set({     
    //   user_id: user_id,
    //   is_active: is_active,
    //   token: token,
    //   number: number,
      email: "test@gmail.com",
      profile_image: "", 
      profile_image2: "",
      profile_image3: "",
      first_name: "ABC",
      middle_name: "ABC",
      last_name: "ABC",
      nick_name: "ABC",
      number1: "",
      number2: "",
      number3: "",
      address: "",
      messenger : "", 
      facebook: "",
      instagram:  "",
      website:"",
      date :  "",
      wedding :"",
      note: "",
      company: { company: "IBM",label: "Compnay" }, 
      job_title: "",
      work_hour:  "",
      friend: "Friends,Universal Studio",
    });
};
export const myInfo =(   username ) =>{
  firebase.firestore().collection('user').doc(`${username}`).collection('myInfo').add({   
    nick_name: "ABC",
   }) 

}
