import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH7pg45v7kAPVcO7JjOqXxaQwCetr3dUs",
  authDomain: "film-saver-db.firebaseapp.com",
  projectId: "film-saver-db",
  storageBucket: "film-saver-db.appspot.com",
  messagingSenderId: "818818399499",
  appId: "1:818818399499:web:18c63a3fa65e5683aaf60e",
  measurementId: "G-X0H9LWS1K2"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;