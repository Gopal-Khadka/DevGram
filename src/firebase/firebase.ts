import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "devgram-8ce16.firebaseapp.com",
  projectId: "devgram-8ce16",
  storageBucket: "devgram-8ce16.appspot.com",
  messagingSenderId: "228289767278",
  appId: "1:228289767278:web:fb294d4851192ac32a037f",
  measurementId: "G-7CEGYFB4W0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const fireAuth = getAuth(app);
const fireStorage = getStorage(app);

export { app, firestore, fireAuth, fireStorage };
