// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyDkJTB3p6jHL3yw9qx7bwQJZ0PiCCItxg0",
   authDomain: "infinitymart-8edf2.firebaseapp.com",
   projectId: "infinitymart-8edf2",
   storageBucket: "infinitymart-8edf2.appspot.com",
   messagingSenderId: "293061753694",
   appId: "1:293061753694:web:715bd95581e20b281fadcf",
   databaseURL: "https://infinitymart-8edf2-default-rtdb.firebaseio.com", // Adicione esta linha para configurar o Realtime Database
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database }; // Exporte ambos auth e database
