import firebase from 'react-native-firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDxHNri65PZI3cIyA7dwJqr9qT1qx0vxkA",
    authDomain: "contactaic.firebaseapp.com",
    databaseURL: "https://contactaic.firebaseio.com",
    storageBucket: "contactaic.appspot.com",
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  export default storage;