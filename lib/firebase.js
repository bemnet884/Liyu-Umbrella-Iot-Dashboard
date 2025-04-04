import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };


/**
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7j-2arxYwnIVZ2Yh1jKSwfdLmHgTkB6g",
  authDomain: "liyu-umbrella-iot-dashboard.firebaseapp.com",
  projectId: "liyu-umbrella-iot-dashboard",
  storageBucket: "liyu-umbrella-iot-dashboard.firebasestorage.app",
  messagingSenderId: "832012135222",
  appId: "1:832012135222:web:0bac41b8fe05590380a197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */