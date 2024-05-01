// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "sandyestates-9faab.firebaseapp.com",
    projectId: "sandyestates-9faab",
    storageBucket: "sandyestates-9faab.appspot.com",
    messagingSenderId: "847887483644",
    appId: "1:847887483644:web:556499e05ee19834c4cd79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);