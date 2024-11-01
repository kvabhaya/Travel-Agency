// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwvdp33iAaIDznYHmfGTac2JUm8_vZfTc",
    authDomain: "skywing-2500d.firebaseapp.com",
    projectId: "skywing-2500d",
    storageBucket: "skywing-2500d.appspot.com",
    messagingSenderId: "1007187704458",
    appId: "1:1007187704458:web:94eae19959e49ffbaf0b73",
    measurementId: "G-TJYMDWV72G"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
