// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBygAvDxNgPyn5OF_DILbrkVUbFbm2VVrg",
  authDomain: "food-order-app-a1d9e.firebaseapp.com",
  projectId: "food-order-app-a1d9e",
  storageBucket: "food-order-app-a1d9e.appspot.com",
  messagingSenderId: "308892892783",
  appId: "1:308892892783:web:39f6c838d8353d5f30179a",
  measurementId: "G-2YJQ0PGWPE",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
