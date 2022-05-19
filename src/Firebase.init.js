// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAriKr5uKV73yt77nRbIjYLMNoWhy-JQmw",
  authDomain: "doctor-portal-2a49f.firebaseapp.com",
  projectId: "doctor-portal-2a49f",
  storageBucket: "doctor-portal-2a49f.appspot.com",
  messagingSenderId: "1038597982121",
  appId: "1:1038597982121:web:c760d36c56a5b9a1fde6b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
