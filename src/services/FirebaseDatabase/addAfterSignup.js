import firebase from "./db";

export const addItem = (
  user_name,
  user_id,
  is_active,
  token,
  number,
  email,
  platform
) => {
  firebase
    .firestore()
    .collection("user")
    .doc(`${user_name}`)
    .set({
      user_id: user_id,
      is_active: is_active,
      token: token,
      number: number,
       platform:platform,
      profile_image: "", 
      profile_image2: "",
      profile_image3: "",
      first_name: user_name,
      middle_name: "",
      last_name: "",
      nick_name: "",
      number:"",
      number1:"",
      mobileabel:"",
      email:email,
      emailabel:"",
      address:"",
      addresslabel:"",
      messenger:"",
      messengerlabel:"",
      socialMedia:"",
      socialMedia1:"",
      sociallabel:"",
      website:"",
      websitelabel:"",
      date:"",
      datelabel:"",
      note:"",
      notelabel:"",
      company:"",
      jobTitle:"",
      monday:"",
      mondayTo:"",
      tuesday:"",
      tuesdayTo:"",
      wednesday:"",
      wednesdayTo:"",
      thursday:"",
      thursdayTo:"",
      friday:"",
      fridayTo:"",
      saturday:"",
      saturdayTo:"",
      sunday:"",
      sundayTo:"",
      friend: "Friends,Universal Studio",
      notificationTime:"Tue Jan 12 2021 14:23:00 GMT+0530",
      weddingDate:"Tue Jan 12 2021 14:23:00 GMT+0530",
      isLogedIn : false,
    });
};



// number1: { number1: "+1 (303) 123-4567", label: "Work" },
// number2: { number2: "+1 (303) 987-6547", label: "Work" },
// number3: { number3: "+1 (303) 987-6547", label: "Work" },
// address: {address :  "4546 willows St. Los Angeles,CA 90016 United states" , label :"Home"},
// messanger :  { messanger: "@usernamesean", label: "" }, 
// facebook: { socialMedia: "@usernamesean", label: "" },
// instagram:  { instagram: "Seanusername", label: "" },
// website:{ website: "www.seamuser.com",label: "Our" },
// date :  { date: "6 Decemeber 2020",label: "Birthday" },
// wedding :{ date:  "6 Decemeber 2020",label: "Wedding Anniversary" },
// note:  { note: "To book me as Comedian E-mail me at workmail@company.com", label: "" },
// company: { company: "IBM",label: "Compnay" }, 
// job_title: { jobTitle:  "Software Engineer", label: "Job Title" },
// work_hour:  {
//   monday : { first :"7:00AM", to:"3:30PM" },
//   tuesday : { first :"7:00AM", to:"3:30PM" },
//   wednesday : { first :"7:00AM", to:"3:30PM" },
//   thursday : { first :"7:00AM", to:"3:30PM" },
//   friday : { first :"7:00AM", to:"3:30PM" },
//   saturday : { first :"OFF", to:"3:30PM" },
//   sunday : { first :"OFF", to:"3:30PM" },
// },