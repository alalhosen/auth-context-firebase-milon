// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdQ9dug9wcSwBVhaiIWHyAijsICxuRoNo",
  authDomain: "auth-context-firebase-milon.firebaseapp.com",
  projectId: "auth-context-firebase-milon",
  storageBucket: "auth-context-firebase-milon.firebasestorage.app",
  messagingSenderId: "578287464601",
  appId: "1:578287464601:web:3f604ef54bd8f32c490808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;