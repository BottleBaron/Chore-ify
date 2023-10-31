/* eslint-disable prettier/prettier */
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
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
  const q = query(collection(db, 'users'), where('accountId', '==', accountId));
  const snapshot = await getDocs(q);
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs as User[];
}

export async function getFirebaseUserById(id: string): Promise<User> {
  const docRef = doc(db, 'users', id);
  const snapshot = await getDoc(docRef);
  const document = snapshot.data();

  return document as User;
}
export async function getFirebaseUsersByHouseholdId(
  householdIds: string[],
): Promise<User[]> {
  const q = query(
    collection(db, 'users'),
    where('householdId', 'in', householdIds),
  );
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
