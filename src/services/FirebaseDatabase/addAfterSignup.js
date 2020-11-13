import firebase from './db';

export const addItem = 
    (user_name, user_id, is_active, token, number, email ) => {
    firebase.firestore().collection('user').doc(`${user_name}`).set({
        user_id: user_id,
        is_active: is_active,
        token: token,
        number: number, 
        email: email,
    })
}