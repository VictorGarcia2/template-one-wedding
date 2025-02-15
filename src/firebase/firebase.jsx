// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz132nQi9MARDfb_c1ReSqymhV33YtGU0",
  authDomain: "template-weddin-invitation.firebaseapp.com",
  databaseURL: "https://template-weddin-invitation-default-rtdb.firebaseio.com",
  projectId: "template-weddin-invitation",
  storageBucket: "template-weddin-invitation.firebasestorage.app",
  messagingSenderId: "991947686294",
  appId: "1:991947686294:web:9bc22dbe7779e43b31ddb7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref ,get, onValue };
