// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMFxuUlP7msDpl8PDLuYd3tMREqgBrtGE",
  authDomain: "zerent-6a257.firebaseapp.com",
  projectId: "zerent-6a257",
  storageBucket: "zerent-6a257.appspot.com",
  messagingSenderId: "64494292358",
  appId: "1:64494292358:web:82f58296f8036a312b7007",
  measurementId: "G-NBYE31E73F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
