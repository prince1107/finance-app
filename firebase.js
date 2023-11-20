// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ5k_GZ-03nE9_nIoQeyJgj5LaO0OLPT8",
  authDomain: "finance-tracker-app-559f7.firebaseapp.com",
  projectId: "finance-tracker-app-559f7",
  storageBucket: "finance-tracker-app-559f7.appspot.com",
  messagingSenderId: "1005897959036",
  appId: "1:1005897959036:web:6e8c566b6585950fd32bf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);