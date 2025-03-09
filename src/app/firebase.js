// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjQYnvF4CcuNw1rJffijSGLD24TE_4o-Q",
  authDomain: "portfolio-reginaliew.firebaseapp.com",
  projectId: "portfolio-reginaliew",
  storageBucket: "portfolio-reginaliew.firebasestorage.app",
  messagingSenderId: "446155391665",
  appId: "1:446155391665:web:7900953024a1da63b61890",
  measurementId: "G-CHR1MCGZEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);