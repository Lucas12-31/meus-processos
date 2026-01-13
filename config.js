import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; // NOVO

const firebaseConfig = {
  apiKey: "AIzaSyAFirIsgcYtcGUTZ-GPfo1F3P_cqOC2VsE",
  authDomain: "gerenciadortrabalho-ec7e8.firebaseapp.com",
  projectId: "gerenciadortrabalho-ec7e8",
  storageBucket: "gerenciadortrabalho-ec7e8.firebasestorage.app",
  messagingSenderId: "87436928988",
  appId: "1:87436928988:web:77635c9787c2d9532c9119",
  measurementId: "G-96HSJCTCBE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 
