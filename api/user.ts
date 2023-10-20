/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
} from 'firebase/firestore';
import db from '../firebaseConfig';
import { User, UserState } from "../src/redux/slices/userSlice";

export async function createFirebaseUser(userData: User) {
  const userRef = doc(db, 'users');
  const newUser = { ...userData, id: userRef.id };
  await setDoc(userRef, userData);
  return newUser;
}

export async function getFirebaseUsers(): Promise<UserState> {
  const snapshot = await getDocs(collection(db, 'users'));
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs[0] as UserState;
}

export async function updateFirebaseUser(userData: User) {
  const userRef = doc(db, 'users', userData.id);
  await setDoc(userRef, userData);
}

export async function deleteFirebaseUser(userId: string) {
  await deleteDoc(doc(db, 'users', userId));
}
