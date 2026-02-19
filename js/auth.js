
// /js/auth.js
import { auth } from './firebaseConfig.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Helper: absolute URL to dashboard (GitHub Pages)
const DASHBOARD_URL = 'https://gummy-mik.github.io/helpdesk-system/dashboard.html';

const form = document.getElementById('loginForm');
const signupBtn = document.getElementById('signupBtn');

// Redirect kapag may active session
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('Already signed in as:', user.email);
    // small delay para makita mo muna ang log (optional)
    setTimeout(() => {
      window.location.assign(DASHBOARD_URL);
    }, 100);
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login success:', cred.user.uid);
    window.location.assign(DASHBOARD_URL);
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
    window.location.assign(DASHBOARD_URL);
  } catch (err) {
    console.error('Signup failed:', err);
    alert(err.message || 'Signup failed');
  }
});
