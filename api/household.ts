/* eslint-disable @typescript-eslint/no-shadow */
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import db from '../firebaseConfig';
import { Household } from '../src/redux/slices/householdSlice';
import firebase from 'firebase/app';


export async function createFirebaseHousehold(householdData: Household) {
  try {
    const docRef = await firebase.firestore().collection('households').add(householdData);
    const newHousehold = await docRef.get();
    const id = docRef.id; // Använd det genererade dokument-ID:t
    return { id, ...newHousehold.data() };
  } catch (error) {
    throw new Error('Error creating household in Firebase');
  }
}

export async function getFirebaseHouseholds(
  householdIds: string[],
): Promise<Household[]> {
  const snapshot = await getDocs(
    query(collection(db, 'households'), where('id', 'in', householdIds)),
  );
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs as Household[];
}

export async function updateFirebaseHousehold(householdData: Household) {
  const householdRef = doc(db, 'households', householdData.id);
  await setDoc(householdRef, householdData);
}

export async function deleteFirebaseHousehold(householdId: string) {
  await deleteDoc(doc(db, 'households', householdId));
}
