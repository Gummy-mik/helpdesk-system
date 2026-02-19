
import { auth } from './firebaseConfig.js';

export function onAuthGuard(cb){
  window._auth.onAuthStateChanged(auth, (user)=>{
    if(!user){ window.location.href = './index.html'; return; }
    cb(user);
  });
}
