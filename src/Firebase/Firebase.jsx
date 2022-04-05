import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxZIOd7D50AcMOmQ8GfpDi2J9ZaWHXF54",
    authDomain: "clone-practice-ca139.firebaseapp.com",
    projectId: "clone-practice-ca139",
    storageBucket: "clone-practice-ca139.appspot.com",
    messagingSenderId: "452582445782",
    appId: "1:452582445782:web:2a1b870315f0b1a342ef77",
    measurementId: "G-S3JW2L3030"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

