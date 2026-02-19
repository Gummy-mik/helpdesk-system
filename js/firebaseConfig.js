
// js/firebaseConfig.js
// Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- EXACT values from Firebase Console (do NOT modify manually)
const firebaseConfig = {
  apiKey: "AIzaSyDhg1JSs5G0yK8uhWbNl3wv_B-smlZNmrU",
  authDomain: "helpdesk-mark.firebaseapp.com",
  projectId: "helpdesk-mark",
  storageBucket: "helpdesk-mark.appspot.com",        // <- appspot.com (recommended)
  messagingSenderId: "21016513710",
  appId: "1:21016513710:web:68d283fa8c051fc2d9b13f"
};

// Debug log: should appear in the console
console.log(
  'Config loaded for:', firebaseConfig.projectId,
  'apiKey starts with:', (firebaseConfig.apiKey||'').slice(0,6)
);

// Initialize & export
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

// Optional global helpers
window.appLogout = async () => { 
  await signOut(auth); 
  window.location.href = "./index.html"; 
};
window._auth = { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };
