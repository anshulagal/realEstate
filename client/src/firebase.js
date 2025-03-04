// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "real-estate-ba724.firebaseapp.com",
  projectId: "real-estate-ba724",
  storageBucket: "real-estate-ba724.firebasestorage.app",
  messagingSenderId: "911722883572",
  appId: "1:911722883572:web:4877a2b164367249fef1a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);