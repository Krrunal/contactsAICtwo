import firebase from './db';

export const importContactToFirebase = 
    (username, profile_image, first_name, middle_name,last_name,nick_name,number1,number2,number3,numberArray,
        email1,email2,emailArray,address1,addressArray,messenger1,messenger2,messangerArray,
        social_media1,social_media2,socialMediaArray,website1,website2,websiteArray,dob,
        dateArray,note,noteArray,company,companyArray,job_title,work_hour) => {
          
    firebase.firestore().collection('user').doc(`${username}`).collection('contacts').add({        
        profile_image: profile_image,
        profile_image2: "",
        profile_image3: "",
        first_name: first_name,
        middle_name: middle_name, 
        last_name: last_name,
        nick_name: nick_name,
        number1: number1,
        number2: number2,
        number3: number3,
        number: numberArray,
        email1: email1,
        email2: email2,
        email: emailArray,
        address1: address1,
        address: addressArray,
        messenger1: messenger1,
        messenger2: messenger2,
        messenger: messangerArray,
        social_media1: social_media1,
        social_media2: social_media2,
        social_media: socialMediaArray,
        website1: website1,
        website2: website2,
        website: websiteArray,
        dob1: dob,
        date: dateArray,
        note1: note,
        note: noteArray,
        company1: company,
        company: companyArray,
        job_title: job_title,
        work_hour: work_hour,
        isImport :false
    })
}