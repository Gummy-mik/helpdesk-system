
// /js/auth.js
import { auth } from './firebaseConfig.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const form = document.getElementById('loginForm');
const signupBtn = document.getElementById('signupBtn');

// Auto-redirect if already signed in
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('Already signed in as:', user.email);
    // e.g., window.location.href = './dashboard.html';
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login success:', cred.user.uid);
    // Redirect after login:
    // window.location.href = './dashboard.html';
  } catch (err) {
    console.error('Login failed:', err);
    alert(err.message || 'Login failed');
  }
});

signupBtn.addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Enter email and password first.');
    return;
  }

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Account created:', cred.user.uid);
    // window.location.href = './dashboard.html';
  } catch (err) {
    console.error('Signup failed:', err);
    alert(err.message || 'Signup failed');
  }
});
