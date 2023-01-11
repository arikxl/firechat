// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbceZmQXIM6fbVKp39Cx0qDVs0FeRUBeU",
  authDomain: "firechat-23356.firebaseapp.com",
  projectId: "firechat-23356",
  storageBucket: "firechat-23356.appspot.com",
  messagingSenderId: "507725267333",
  appId: "1:507725267333:web:a48c957fc75e7ebf5984ec",
  measurementId: "G-EJ0FBWLFQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);