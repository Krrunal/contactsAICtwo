import firebase from './db';

export const manageLabelToFirebase = 
    (username,selectedName,final_first_name,final_last_name,final_middle_name,final_nick_name,final_phone_1,final_phone_2,final_phone_3,final_email_1,final_email_2,final_address,final_messanger_1,final_messanger_2,final_social_media_1,final_social_media_2,final_website_1,final_website_2,final_date,final_note,final_company,final_job_title,final_work_hour) => {
          
    firebase.firestore().collection('user').doc(`${username}`).collection('contacts').add({        
       // profile_image: profile_image,
        selectedName:selectedName,
        first_name: final_first_name,
        middle_name: final_middle_name, 
        last_name: final_last_name,
        nick_name: final_nick_name,
        number1: final_phone_1,
        number2: final_phone_2,
        number3: final_phone_3,
      
        email1: final_email_1,
        email2: final_email_2,
       
        address1: final_address,
       
        messenger1: final_messanger_1,
        messenger2: final_messanger_2,
      
        social_media1: final_social_media_1,
        social_media2: final_social_media_2,

        website1: final_website_1,
        website2: final_website_2,
       
        dob1: final_date,
       
        note1: final_note,
       
      
        company: final_company,
        job_title: final_job_title,
        work_hour: final_work_hour,  
        
      
    })
}