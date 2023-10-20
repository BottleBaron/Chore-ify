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
import { Chore, ChoreState } from '../src/redux/slices/choreSlice';

export async function createFirebaseChore(choreData: Chore) {
  const choreRef = doc(db, 'chores');
  const newChore = { ...choreData, id: choreRef.id };
  await setDoc(choreRef, choreData);
  return newChore;
}

export async function getFirebaseChores(): Promise<ChoreState> {
  const snapshot = await getDocs(collection(db, 'chores'));
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs[0] as ChoreState;
}

export async function updateFirebaseChore(choreData: Chore) {
  const choreRef = doc(db, 'chores', choreData.id);
  await setDoc(choreRef, choreData);
}

export async function deleteFirebaseChore(choreId: string) {
  await deleteDoc(doc(db, 'chores', choreId));
}
