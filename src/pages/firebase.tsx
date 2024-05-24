// src/firebase.tsx
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiwoqM1QefC1sxn5z0FnXkrbBUrYLp2LE",
  authDomain: "fir-auth-90fb3.firebaseapp.com",
  projectId: "fir-auth-90fb3",
  storageBucket: "fir-auth-90fb3.appspot.com",
  messagingSenderId: "1081557350851",
  appId: "1:1081557350851:web:7729398b20b63e0f5f6576",
  measurementId: "G-TD42PJRDXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances

