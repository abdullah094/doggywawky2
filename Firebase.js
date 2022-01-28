// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDljijiM_TEolz9It5OiX8Y8B26SA4Ox5o",
  authDomain: "doggywawky.firebaseapp.com",
  projectId: "doggywawky",
  storageBucket: "doggywawky.appspot.com",
  messagingSenderId: "520757143318",
  appId: "1:520757143318:web:7d08104ec258ca46fe9237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);