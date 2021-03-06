import firebase from "./db";

export const manageLabelToFirebase = (
  user_id,
  selectedName,
  profile_image,
  profile_image2,
  profile_image3,
  first_name,
  middle_name,
  last_name,
  nick_name,
  phone_1,
  email_1,
  address,
  address2,
  messanger_1,
  social_media_1,
  social_media_2,
  website_1,
  date,
  note,
  company,
  job_title,
  work_hour
) => {
  firebase.firestore().collection(`${user_id}`).add({
     label: selectedName,
      profile_image: profile_image,
      profile_image2: profile_image2,
      profile_image3: profile_image3,
      user_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      nick_name: nick_name,
      number1: phone_1,
      email1: email_1,
      address1: address,
      address2: address2,
      messenger1: messanger_1,
      social_media1: social_media_1,
      social_media2: social_media_2,
      website1: website_1,
      date: date,
      note: note,
      company: company,
      job_title: job_title,
      work_hour: work_hour,
    });
};
