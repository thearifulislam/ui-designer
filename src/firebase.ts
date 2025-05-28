// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqL-4iYl0y8m9d4qEkBHbkIKrXCGqhHvY",
  authDomain: "ariful-portfolio.firebaseapp.com",
  projectId: "ariful-portfolio",
  storageBucket: "ariful-portfolio.appspot.com",
  messagingSenderId: "517008224574",
  appId: "1:517008224574:web:8fbd2d6b9a4e12c6c8df87"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { db }; 