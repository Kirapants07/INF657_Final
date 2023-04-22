// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: `"{process.env.REACT_APP_API_KEY}"`,
  // apiKey: "AIzaSyAioIN3QmNjH6OPfX4sopA_kF7CbvHMDG8",
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_API_APP_ID,

  apiKey: "AIzaSyAioIN3QmNjH6OPfX4sopA_kF7CbvHMDG8",
  authDomain: "inf657shoppinglist.firebaseapp.com",
  projectId: "inf657shoppinglist",
  storageBucket: "inf657shoppinglist.appspot.com",
  messagingSenderId: "185750253990",
  appId: "1:185750253990:web:c94deaa0e1216928091f67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;