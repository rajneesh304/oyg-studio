// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmLh748f8NDTNpp-GJ_kYRg0fFMSavpZQ",
  authDomain: "own-your-gig.firebaseapp.com",
  projectId: "own-your-gig",
  storageBucket: "own-your-gig.appspot.com",
  messagingSenderId: "1019238013172",
  appId: "1:1019238013172:web:6fb2528f698ba9a47c66a1",
  measurementId: "G-GJ8KXM2W59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export default app;