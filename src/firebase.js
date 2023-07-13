// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMhlcf0HoLWW0W6PCYt07ep5rbfrYmWGc",
  authDomain: "instragram-clone-5915e.firebaseapp.com",
  projectId: "instragram-clone-5915e",
  storageBucket: "instragram-clone-5915e.appspot.com",
  messagingSenderId: "701798862186",
  appId: "1:701798862186:web:36cfd1cb56d21d47792913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()