
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjGsZtEK1h56rqtCr4MiGjpJ2491c_SlI",
  authDomain: "battlezoneff-6eebe.firebaseapp.com",
  projectId: "battlezoneff-6eebe",
  storageBucket: "battlezoneff-6eebe.firebasestorage.app",
  messagingSenderId: "276577935554",
  appId: "1:276577935554:web:b44ff5fba7b675ea601b5b",
  measurementId: "G-0T3E02HHQ4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

