import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB6DLDKSDRY1RGsRfXyU56Bz5fe1oOlLKY",
    authDomain: "mentor-map-685b0.firebaseapp.com",
    projectId: "mentor-map-685b0",
    storageBucket: "mentor-map-685b0.firebasestorage.app",
    messagingSenderId: "215543285467",
    appId: "1:215543285467:web:9c4143418add3ca5996efe"
  };
  

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);