"use client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA8z_8drfF0DXXl1ROklUfr2Rw_4qM5p5Q",
  authDomain: "uni-buy-8cb9e.firebaseapp.com",
  projectId: "uni-buy-8cb9e",
  storageBucket: "uni-buy-8cb9e.appspot.com",
  messagingSenderId: "663962850871",
  appId: "1:663962850871:web:8749cdd1af1a9c632e91b2",
  measurementId: "G-BW8LV2WQBR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
export const storage = getStorage(app);
connectStorageEmulator(storage, "127.0.0.1", 9199);

export const auth = getAuth(app);
connectAuthEmulator(auth, "http://127.0.0.1:9099");