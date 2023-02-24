// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtN2AIiLrcDlTsxHI65LVAWx4uErE1xx4",
  authDomain: "todo-208e5.firebaseapp.com",
  projectId: "todo-208e5",
  storageBucket: "todo-208e5.appspot.com",
  messagingSenderId: "934609200594",
  appId: "1:934609200594:web:daf4ec5171c189f69cd40b",
};

// Initialize Firebase apppp
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

