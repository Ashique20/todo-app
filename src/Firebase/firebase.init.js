// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGxfPhL3Coo7coOcMxtfUzmwIjulawKRA",
  authDomain: "todo-b04b1.firebaseapp.com",
  projectId: "todo-b04b1",
  storageBucket: "todo-b04b1.appspot.com",
  messagingSenderId: "853132470318",
  appId: "1:853132470318:web:c0e3eacb343eca6f6457bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;