// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJwvOzXM6vXksqSMoECbVmK8QASIKdq6g",
    authDomain: "sahilchudasama-mobiledev.firebaseapp.com",
    projectId: "sahilchudasama-mobiledev",
    storageBucket: "sahilchudasama-mobiledev.firebasestorage.app",
    messagingSenderId: "430482849818",
    appId: "1:430482849818:web:249671467ec3fdc98951a3",
    measurementId: "G-HJQBJ7D7JW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { db, analytics };
