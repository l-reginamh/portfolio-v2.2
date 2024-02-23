// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_judCAXEyyTtDSoBQn_RlwqdEbTJd8Yg",
  authDomain: "portfolio-fb64a.firebaseapp.com",
  projectId: "portfolio-fb64a",
  storageBucket: "portfolio-fb64a.appspot.com",
  messagingSenderId: "1083418238231",
  appId: "1:1083418238231:web:e19c94740d87bf8ea12b52",
  measurementId: "G-GFX0KLQZSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);