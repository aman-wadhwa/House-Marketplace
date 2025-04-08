// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCytkY3a6UFsFTJjQ3ZIvEGxPPxICxe3WA",
  authDomain: "house-marketplace-c5a34.firebaseapp.com",
  projectId: "house-marketplace-c5a34",
  storageBucket: "house-marketplace-c5a34.firebasestorage.app",
  messagingSenderId: "913544627783",
  appId: "1:913544627783:web:2f34c6b3b1537144949362",
  measurementId: "G-KLMY1L11DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();