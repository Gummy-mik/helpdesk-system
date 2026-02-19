
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDhg1JSs56QyK8uhWbWNL3wv_B-smLZNmrU",
  authDomain: "helpdesk-mark.firebaseapp.com",
  projectId: "helpdesk-mark",
  storageBucket: "helpdesk-mark.firebasestorage.app",
  messagingSenderId: "12106153710",
  appId: "1:12106153710:web:68d283fa8c051fc2d9b13f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

window.appLogout = async () => { await signOut(auth); window.location.href = './index.html'; };
window._auth = { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };
