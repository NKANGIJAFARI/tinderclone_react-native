// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestor } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsWibs9rEyzgNaFgHAL-83bZP56Covb9g',
  authDomain: 'tinder-clone-de76d.firebaseapp.com',
  projectId: 'tinder-clone-de76d',
  storageBucket: 'tinder-clone-de76d.appspot.com',
  messagingSenderId: '794965708466',
  appId: '1:794965708466:web:73951fe6bb20a9fb3503ab',
};

// Initialize Firebase
const app = initializeApp(firebaseCsssonfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
