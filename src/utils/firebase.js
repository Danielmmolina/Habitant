import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBv-KjkOl7ppZv8B_mHGCrZpbDnY6IoDsc",
  authDomain: "habitant-7b6a5.firebaseapp.com",
  projectId: "habitant-7b6a5",
  storageBucket: "habitant-7b6a5.appspot.com",
  messagingSenderId: "809286522533",
  appId: "1:809286522533:web:ff7b8423de66b3f1d21f4c"
};



export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);