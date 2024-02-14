// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvUll12CARA3bAW2Ibi4mupC8J6yT9qzM",
  authDomain: "daftra-ecommerce.firebaseapp.com",
  projectId: "daftra-ecommerce",
  storageBucket: "daftra-ecommerce.appspot.com",
  messagingSenderId: "880567042640",
  appId: "1:880567042640:web:a286a4b98b083da4900755",
  measurementId: "G-R9B520B9ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app, analytics)