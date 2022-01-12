// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnbjnerH4Cu3aHNua2zSMKzzn_hqx3tZQ",
  authDomain: "react-native-app-d42bc.firebaseapp.com",
  databaseURL: "https://react-native-app-d42bc-default-rtdb.firebaseio.com",
  projectId: "react-native-app-d42bc",
  storageBucket: "react-native-app-d42bc.appspot.com",
  messagingSenderId: "421294859787",
  appId: "1:421294859787:web:3c09a7bea57b6344ae490e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
