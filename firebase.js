// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjfAS79JuCl55Djte3ghfwLJrTpYJBqk4',
  authDomain: 'tinderclone-2afec.firebaseapp.com',
  projectId: 'tinderclone-2afec',
  storageBucket: 'tinderclone-2afec.appspot.com',
  messagingSenderId: '322905100326',
  appId: '1:322905100326:web:296cbd1619ed30b1f616e7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
