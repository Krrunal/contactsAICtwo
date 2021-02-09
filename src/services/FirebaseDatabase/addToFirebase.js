import firebase from './db';

export const addItem = 
    (user_id, id, label, number, email, user_name) => {
    firebase.firestore().collection(`${user_id}`).add({
        id: id,
        label: label,
        number: number, 
        email: email,
        user_name: user_name,
    })
}

