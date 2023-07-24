import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQiH2iKL1JdA41-NaSQbSerI5NldqTvV4",
  authDomain: "filmyadda-b48d3.firebaseapp.com",
  projectId: "filmyadda-b48d3",
  storageBucket: "filmyadda-b48d3.appspot.com",
  messagingSenderId: "765583791911",
  appId: "1:765583791911:web:f5761c6351df3852b4bb02",
  measurementId: "G-EB519JMLWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
