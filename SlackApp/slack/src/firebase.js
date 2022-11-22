import firebase from 'firebase/compat/app'
//import { initializeApp } from 'firebase/app';
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDFL3ItGkbabj0BIUWAeCzGxW6S508lehg",
    authDomain: "slack-44644.firebaseapp.com",
    projectId: "slack-44644",
    storageBucket: "slack-44644.appspot.com",
    messagingSenderId: "216580617144",
    appId: "1:216580617144:web:a3cfa5359cd4f74b71154d",
    measurementId: "G-YBB11J1KJX"
  };
  
  firebase.initializeApp(firebaseConfig);
  //export const db = firebase.firestore();
  export default firebase;