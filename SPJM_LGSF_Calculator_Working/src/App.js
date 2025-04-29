// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdfDPxR9-B-OLP2_2631lJbNrDQg36DXU",
  authDomain: "spjm-lgsf.firebaseapp.com",
  projectId: "spjm-lgsf",
  storageBucket: "spjm-lgsf.firebasestorage.app",
  messagingSenderId: "977679195856",
  appId: "1:977679195856:web:dfab8850d58b1c54f5c8d5",
  measurementId: "G-7K0Y6B8WP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
