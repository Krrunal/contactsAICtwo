import firebase from "./db";

export const updateMyInfo = (user_name,profile_image,first_name, middle_name,last_name,nick_name,number1 , number2, number3,numberArray, email, email2, emailArray,  address, addressArray, messenger1, messenger2, messangerArray, social_media1,social_media2, socialMediaArray, website1,website2, websiteArray, dob,dateArray,note, noteArray, company, companyArray, job_title, work_hour) => {
  firebase.firestore().collection("user").doc(`${user_name}`).update({
   // user_id: user_id,
   profile_image:profile_image,
    first_name: first_name,
    middle_name: middle_name,
    last_name:last_name,
    nick_name:nick_name,
    number1:number1,
    number2: number2,
    number3 :number3,
    numberArray: numberArray,
    email: email,
    email2: email2,
    emailArray: emailArray,
    address:address,
    addressArray:addressArray,
    messenger1: messenger1,
    messenger2:messenger2,
    messangerArray: messangerArray,
    social_media1: social_media1,
    social_media2:social_media2,
    socialMediaArray:socialMediaArray,
    website1:website1,
    website2:website2,
    websiteArray:websiteArray,
    dob: dob,
    dateArray:dateArray,
    note:note,
    noteArray: noteArray,
    company: company,
    companyArray:companyArray,
    job_title: job_title,
    work_hour:work_hour

  });
 
};



