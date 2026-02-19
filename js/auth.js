
import { auth } from './firebaseConfig.js';

const emailEl = document.getElementById('email');
const passEl = document.getElementById('password');

document.getElementById('loginBtn').onclick = async () => {
  try {
    await window._auth.signInWithEmailAndPassword(auth, emailEl.value, passEl.value);
    window.location.href = './dashboard.html';
  } catch (e) { alert(e.message); }
};

document.getElementById('signupBtn').onclick = async () => {
  try {
    await window._auth.createUserWithEmailAndPassword(auth, emailEl.value, passEl.value);
    window.location.href = './dashboard.html';
  } catch (e) { alert(e.message); }
};
