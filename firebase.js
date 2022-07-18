// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBt5uad-aW_1POul3haHJVsijpa5FDaFs",
    authDomain: "uber-next-clone-ed6b2.firebaseapp.com",
    projectId: "uber-next-clone-ed6b2",
    storageBucket: "uber-next-clone-ed6b2.appspot.com",
    messagingSenderId: "309197767790",
    appId: "1:309197767790:web:d37222a7e6a0135ee2127f",
    measurementId: "G-6EJHKPVS1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }