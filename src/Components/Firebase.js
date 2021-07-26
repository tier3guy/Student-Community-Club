import firebase from "firebase";
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCf5WgRmq2_Af5t1Ne4sp9_bLqNzGW4xLw",
  authDomain: "students-community-club.firebaseapp.com",
  projectId: "students-community-club",
  storageBucket: "students-community-club.appspot.com",
  messagingSenderId: "899561443538",
  appId: "1:899561443538:web:ece36479d8b4fbfbeadd0b"
});

var db = firebaseApp.firestore();

export {db};