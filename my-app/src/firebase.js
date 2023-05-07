// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhCqWFBNP04HDR1DZiGJ5tkpcax5GDJGY",
  authDomain: "inf657-movie-list.firebaseapp.com",
  databaseURL: "https://inf657-movie-list-default-rtdb.firebaseio.com",
  projectId: "inf657-movie-list",
  storageBucket: "inf657-movie-list.appspot.com",
  messagingSenderId: "332944014415",
  appId: "1:332944014415:web:c5ab14b3e44db5e961fe3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;