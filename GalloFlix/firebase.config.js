// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCWRAq49YUrSqnKaNbVcEqLnHZLBvWYnk",
    authDomain: "galloflix-d06eb.firebaseapp.com",
    projectId: "galloflix-d06eb",
    storageBucket: "galloflix-d06eb.appspot.com",
    messagingSenderId: "988513306671",
    appId: "1:988513306671:web:f345ac9b789cbb5ef2deda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);