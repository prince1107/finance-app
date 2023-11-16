// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyAtEYd-Zc7Zvm6ECdJqdKR33s4JN9qWY",
  authDomain: "personal-protfolio-app.firebaseapp.com",
  projectId: "personal-protfolio-app",
  storageBucket: "personal-protfolio-app.appspot.com",
  messagingSenderId: "550259214504",
  appId: "1:550259214504:web:60c7573ca08c4fc18b9a9d",
  measurementId: "G-RVL4ZD7NGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
