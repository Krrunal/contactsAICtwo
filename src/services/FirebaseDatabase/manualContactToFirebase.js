import firebase from "./db";

export const addManualContact = (
  username,
  selectedName,
  profile_image,
  profile_image2,
  profile_image3,
  first_name,
  middle_name,
  last_name,
  nick_name,
  number1,
  number2,
  number3,
  numberArray,
  email1,
  email2,
  emailArray,
  address1,
  address2,
  addressArray,
  messenger1,
  messenger2,
  messangerArray,
  social_media1,
  social_media2,
  socialMediaArray,
  website,
  website2,
  websiteArray,
  date,
    dateArray,
  note,
  noteArray,
  company,
  companyArray,
  job_title,
  work_hour,
  jobTitleArray,
  workHoursArray,
  singleCompany,
  singleWebsite,
  singleMessenger,
  singleSocialMedia,
  singleNote,
  singleJobTitle,
  singleAddress,
  sEmail,
  sNumber,
  sDate,
  unique_id
) => {
  firebase
    .firestore()
    .collection("user")
    .doc(`${username}`)
    .collection("contacts")
    .add({ 
      selectedName :selectedName,
      profile_image: profile_image,
      profile_image2: profile_image2,
      profile_image3: profile_image3,
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      nick_name: nick_name,
      number11: number1,
      number2: number2,
      number3: number3,
      number: numberArray,
      email11: email1,
      email2: "",
      email: emailArray,
      address: address1,
      address2:address2,
      aAddress: addressArray,
      messenger: messenger1,
      messenger2: messenger2,
      sMessenger: messangerArray,
      social_media: social_media1,
      social_media2: social_media2,
      sSocial_media: socialMediaArray,
      sWebsite: website,
      website2: website2,
      websiteArray : websiteArray,
      sDate: date,
      dateArray: dateArray,
      snote: note,
      noteArray: noteArray,
      sCompany: company,
      companyArray: companyArray,
      sJobTitle: job_title,
      workHours: work_hour,
      jobTitleArray:jobTitleArray,
      workHoursArray:workHoursArray,
      company: singleCompany.toLowerCase(),
      website: singleWebsite,
      messenger1:singleMessenger.toLowerCase(),
      social_media1 :singleSocialMedia.toLowerCase(),
      note :singleNote.toLowerCase(),
      jobTitle :singleJobTitle.toLowerCase(),
      address1 :singleAddress.toLowerCase(),
      isManually : true,
      u_name:first_name,
      r_label_name    :"",
      s_label_name:"",
      email1:sEmail,
      number1 : sNumber,
      date : sDate,
      unique_id:unique_id,
      monday  :"",
      mondayTo  :"",
      tuesday  :"",
      tuesdayTo  :"",
      wednesday  :"",
      wednesdayTo  :"",
      thursday  :"",
      thursdayTo  :"",
      friday  :"",
      fridayTo  :"",
      saturday  :"",
      saturdayTo  :"",
      sunday  :"",
      sundayTo  :"",
      first_name_small: first_name.toLowerCase(),
      middle_name_small: middle_name.toLowerCase(),
      last_name_small: last_name.toLowerCase(),
      nick_name_small: nick_name.toLowerCase(),
    });
};
