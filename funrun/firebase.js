// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {ReactNativeAsyncStorage} from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaBEowdcVOLY6hlSnJqRQoxb_BwP7-m_8",
  authDomain: "funrun-724b9.firebaseapp.com",
  projectId: "funrun-724b9",
  storageBucket: "funrun-724b9.appspot.com",
  messagingSenderId: "48756187378",
  appId: "1:48756187378:web:a7878a4714b4f6896b706b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)});

//Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
