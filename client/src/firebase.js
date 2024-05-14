import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-b0e8a.firebaseapp.com",
  projectId: "mernauth-b0e8a",
  storageBucket: "mernauth-b0e8a.appspot.com",
  messagingSenderId: "1020574006995",
  appId: "1:1020574006995:web:a8046ce3780c082a615e26",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
