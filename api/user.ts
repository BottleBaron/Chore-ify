/* eslint-disable prettier/prettier */
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import db from '../firebaseConfig';
import { User } from '../src/redux/slices/userSlice';

export async function createFirebaseUser(userData: User) {
  const docRef = await addDoc(collection(db, 'users'), userData);
  const newUser = { ...userData, id: docRef.id };
  updateFirebaseUser(newUser);
  return newUser;
}

export async function getFirebaseUsers(accountId: string): Promise<User[]> {
  const q = query(collection(db, 'users'), where("accountId", "==", accountId))
  const snapshot = await getDocs(q);
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs as User[];
}

export async function updateFirebaseUser(userData: User) {
  const userRef = doc(db, 'users', userData.id);
  await setDoc(userRef, userData);
}

export async function deleteFirebaseUser(userId: string) {
  await deleteDoc(doc(db, 'users', userId));
}
