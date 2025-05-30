import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d5c00.firebaseapp.com",
  projectId: "reactchat-d5c00",
  storageBucket: "reactchat-d5c00.firebasestorage.app",
  messagingSenderId: "243952451185",
  appId: "1:243952451185:web:477aa3862b2f42ed9be5d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
