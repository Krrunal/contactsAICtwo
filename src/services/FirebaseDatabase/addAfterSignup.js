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
      messanger :  { messanger: "@usernamesean", label: "" }, 
      facebook: { socialMedia: "@usernamesean", label: "" },
      instagram:  { instagram: "Seanusername", label: "" },
      website:{ website: "www.seamuser.com",label: "Our" },
      date :  { date: "6 Decemeber 2020",label: "Birthday" },
      wedding :{ date:  "6 Decemeber 2020",label: "Wedding Anniversary" },
      note:  { note: "To book me as Comedian E-mail me at workmail@company.com", label: "" },
      company: { company: "IBM",label: "Compnay" }, 
      job_title: { jobTitle:  "Software Engineer", label: "Job Title" },
      work_hour:  { workHours:  "Monday 9.00a.m to 5.00p.m",label: "Pacific Time Zone" },
      friend: "Friends,Universal Studio",
      notificationTime:"8:00AM",
      weddingDate:"8:00AM"
    });
};

