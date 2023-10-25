/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKX-6mMdpr3iFLqKI3aOtjCJgGnpPvWZY',
  authDomain: 'chore-ify.firebaseapp.com',
  projectId: 'chore-ify',
  storageBucket: 'chore-ify.appspot.com',
  messagingSenderId: '811308222630',
  appId: '1:811308222630:web:da0e04d169961ca75f8c67',
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;

export const auth = getAuth(app);
