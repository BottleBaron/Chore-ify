/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
} from 'firebase/firestore';
import db from '../firebaseConfig';
import { Chore, ChoreState } from '../src/redux/slices/choreSlice';

export async function createFirebaseChore(choreData: Chore) {
  const docRef = await addDoc(collection(db, 'chores'), choreData);
  const newChore = {...choreData, id: docRef.id}
  updateFirebaseChore(newChore);
  return newChore;
}

export async function getFirebaseChores(): Promise<ChoreState> {
  const snapshot = await getDocs(collection(db, 'chores'));
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs[0] as ChoreState;
}

export async function updateFirebaseChore(chore: Chore) {
  const choreRef = doc(db, 'chores', chore.id);
  await setDoc(choreRef, chore);
  return chore;
}

export async function deleteFirebaseChore(choreId: string) {
  await deleteDoc(doc(db, 'chores', choreId.toString()));
  return choreId;
}
