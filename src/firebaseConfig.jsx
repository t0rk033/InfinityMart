import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyDkJTB3p6jHL3yw9qx7bwQJZ0PiCCItxg0",
    authDomain: "infinitymart-8edf2.firebaseapp.com",
    projectId: "infinitymart-8edf2",
    storageBucket: "infinitymart-8edf2.appspot.com",
    messagingSenderId: "293061753694",
    appId: "1:293061753694:web:715bd95581e20b281fadcf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


