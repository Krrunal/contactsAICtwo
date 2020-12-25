import firebase from "./db";

export const addItem = (
  user_name,
  user_id,
  is_active,
  token,
  number,
  email
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
      email: email,
      profile_image: "", 
      profile_image2: "",
      profile_image3: "",
      first_name: "ABC",
      middle_name: "ABC",
      last_name: "ABC",
      nick_name: "ABC",
      number1: { number1: "+1 (303) 123-4567", label: "Work" },
      number2: { number2: "+1 (303) 987-6547", label: "Work" },
      number3: { number3: "+1 (303) 987-6547", label: "Work" },
      address: {address :  "4546 willows St. Los Angeles,CA 90016 United states" , label :"Home"},
      messenger :  { messanger: "@usernamesean", label: "" }, 
      facebook: { socialMedia: "@usernamesean", label: "" },
      instagram:  { instagram: "Seanusername", label: "" },
     
    //   social_media1: "XyZ",
    //   social_media2: "XyZ",
    //   social_media: "XyZ",
      website:{ website: "www.seamuser.com",label: "Our" },
      date :  { date: "6 Decemeber 2020",label: "Birthday" },
      wedding :{ date:  "6 Decemeber 2020",label: "Wedding Anniversary" },
      note:  { note: "To book me as Comedian E-mail me at workmail@company.com", label: "" },
      company: { company: "IBM",label: "Compnay" }, 
      job_title: { jobTitle:  "Software Engineer", label: "Job Title" },
      work_hour:  { workHours:  "Monday 9.00a.m to 5.00p.m",label: "Pacific Time Zone" },
      friend: "Friends,Universal Studio",
    });
};

// user_id: user_id,
//         is_active: is_active,
//         token: token,
//         number: number,
//         email: email,
//         profile_image: "",
//         first_name: "ABC",
//         middle_name: "ABC",
//         last_name: "ABC",
//         nick_name: "ABC",
//         number1: "+1 (303) 123-4567",
//         number2:"+1 (303) 987-6547",
//         number3:"+1 (303) 999-8888",
//         mobileLabel:"Work",
//         address: "4546 willows St. Los Angeles,CA 90016 United states",
//         messenger1: "@usernamesean",
//         messenger2:"@usernamesean",
//         messenger: "Seanusername",
//         social_media1:"XyZ",
//         social_media2: "XyZ",
//         social_media:"XyZ",
//         website1:"www.seamuser.com",
//         dob: "6 Decemeber 2020",
//         date:"6 Decemeber 2020",
//         note: "To book me as Comedian E-mail me at workmail@company.com",
//         company1: "XyZ",
//         company:"IBM",
//         job_title: "Software Engineer",
//         work_hour: "Monday 9.00a.m to 5.00p.m",
//         friend:"Friends,Universal Studio"
