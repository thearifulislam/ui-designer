// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqL-4iYl0y8m9d4qEkBHbkIKrXCGqhHvY",
  authDomain: "ariful-portfolio.firebaseapp.com",
  databaseURL: "https://ariful-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ariful-portfolio",
  storageBucket: "ariful-portfolio.appspot.com",
  messagingSenderId: "517008224574",
  appId: "1:517008224574:web:8fbd2d6b9a4e12c6c8df87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database }; 