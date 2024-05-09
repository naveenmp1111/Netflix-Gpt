// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD394NkB0FEJNe4jnZczF5PvSaAyD0fsLw",
  authDomain: "netflix-gpt-8e24c.firebaseapp.com",
  projectId: "netflix-gpt-8e24c",
  storageBucket: "netflix-gpt-8e24c.appspot.com",
  messagingSenderId: "460177964975",
  appId: "1:460177964975:web:ed0e3b797a44f73769f95a",
  measurementId: "G-PV6R8ERYZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();