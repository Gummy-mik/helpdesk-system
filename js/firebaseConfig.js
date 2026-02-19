
// --- Firebase CDN imports (static hosting friendly)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- YOUR REAL CONFIG (keep as-is, based on your screenshot)
const firebaseConfig = {
  apiKey: "AIzaSyDhg1JSs56QyK8uhWbWNL3wv_B-smLZNmrU",
  authDomain: "helpdesk-mark.firebaseapp.com",
  projectId: "helpdesk-mark",
  storageBucket: "helpdesk-mark.firebasestorage.app",
  messagingSenderId: "12106153710",
  appId: "1:12106153710:web:68d283fa8c051fc2d9b13f"
};

// (Debug) Put this AFTER the const firebaseConfig, BEFORE initializeApp:
console.log('Config loaded for:', firebaseConfig.projectId, 
            'apiKey starts with:', (firebaseConfig.apiKey||'').slice(0,6));

// --- Initialize & exports
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

// --- Global helpers
window.appLogout = async () => { 
  await signOut(auth); 
  window.location.href = "./index.html"; 
};
window._auth = { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };
