// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDc7pCLFxniA5091jkK_zpgNkebGYSFPF4",
    authDomain: "uber-clone-2a78e.firebaseapp.com",
    projectId: "uber-clone-2a78e",
    storageBucket: "uber-clone-2a78e.appspot.com",
    messagingSenderId: "660045689931",
    appId: "1:660045689931:web:2aaf19063c7645d4c109ce",
    measurementId: "G-8M43NK50EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }