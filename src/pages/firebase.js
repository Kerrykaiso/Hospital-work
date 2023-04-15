import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBsWFHIe_OTQo4nS1Uji-dWP2nZLch7qkA",
  authDomain: "hospital-work-9ee53.firebaseapp.com",
  projectId: "hospital-work-9ee53",
  storageBucket: "hospital-work-9ee53.appspot.com",
  messagingSenderId: "697585918821",
  appId: "1:697585918821:web:05c4dfe59986f2b784b78c",
  measurementId: "G-301F7F16RT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth= getAuth()