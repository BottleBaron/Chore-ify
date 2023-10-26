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

export async function createFirebaseHousehold(householdData: Household) {
  const householdRef = doc(db, 'chores');
  const newHousehold = { ...householdData, id: householdRef.id };
  await setDoc(householdRef, householdData);
  return newHousehold;
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
