/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  query,
  where,
} from 'firebase/firestore';
import db from '../firebaseConfig';
import { Chore } from '../src/redux/slices/choreSlice';

export async function createFirebaseChore(choreData: Chore) {
  const choreRef = await addDoc(collection(db, 'chores'), choreData);
  const newChore = { ...choreData, id: choreRef.id };
  updateFirebaseChore(newChore);
  return newChore;
}

export async function getFirebaseChores(householdId: string): Promise<Chore[]> {
  const q = query(
    collection(db, 'chores'),
    where('householdId', '==', householdId),
  );
  const snapshot = await getDocs(q);
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs as Chore[];
}

export async function updateFirebaseChore(choreData: Chore) {
  const choreRef = doc(db, 'chores', choreData.id);
  await setDoc(choreRef, choreData);
}

export async function deleteFirebaseChore(choreId: string) {
  await deleteDoc(doc(db, 'chores', choreId));
}
