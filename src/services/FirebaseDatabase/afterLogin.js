import firebase from "./db";

export const updateItem = (
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
    .update({ 
        isLogedIn : true,    
    });
}