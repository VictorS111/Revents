// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-v3-course3.firebaseapp.com",
  projectId: "revents-v3-course3",
  databaseURL: "https://revents-v3-course3-default-rtdb.firebaseio.com",
  storageBucket: "revents-v3-course3.firebasestorage.app",
  messagingSenderId: "881002669832",
  appId: "1:881002669832:web:f540948138d1e392b4eebd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const fb = getDatabase(app);
