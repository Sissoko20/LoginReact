import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeki_Jp2Xu3g6AYf2sTsFAVbcafFxa5Lk",
  authDomain: "todolistreact-c44b1.firebaseapp.com",
  projectId: "todolistreact-c44b1",
  storageBucket: "todolistreact-c44b1.appspot.com",
  messagingSenderId: "351409272851",
  appId: "1:351409272851:web:0bc3a27c2793b960aae7e6",
  measurementId: "G-906BX7T620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
