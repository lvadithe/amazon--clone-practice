import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi--QddOZZWHeto96Bdx9_g4ZU9eEZVSY",
  authDomain: "clone--practice.firebaseapp.com",
  projectId: "clone--practice",
  storageBucket: "clone--practice.appspot.com",
  messagingSenderId: "618661999734",
  appId: "1:618661999734:web:5cfb922433d9248cfe1b57",
  measurementId: "G-Q9NXQR84HG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

