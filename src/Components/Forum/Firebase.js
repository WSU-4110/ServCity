// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfhHYAHP4U-W23vl5Ky8MxgCF-3JMqzLs",
  authDomain: "test1-4caf4.firebaseapp.com",
  projectId: "test1-4caf4",
  storageBucket: "test1-4caf4.appspot.com",
  messagingSenderId: "458824630943",
  appId: "1:458824630943:web:36bf8fc7e18c5f986018aa",
  measurementId: "G-96V9QYB97P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
