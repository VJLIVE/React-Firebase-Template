// src/firebase-config.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration object from the Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyAmpk86Qo4NaN8IUp9hv87iFN2UWWlFQfg",
    authDomain: "emma-001byvijay.firebaseapp.com",
    projectId: "emma-001byvijay",
    storageBucket: "emma-001byvijay.firebasestorage.app",
    messagingSenderId: "708677937388",
    appId: "1:708677937388:web:bbb44b4862cdd8498e9dc9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Authentication instance
export const auth = getAuth(app);
