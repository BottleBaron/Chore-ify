/* eslint-disable @typescript-eslint/no-shadow */
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import db from '../firebaseConfig';
import { Household, HouseholdState } from '../src/redux/slices/householdSlice';

export async function createFirebaseHousehold(householdData: Household) {
  const householdRef = doc(db, 'chores');
  const newHousehold = { ...householdData, id: householdRef.id };
  await setDoc(householdRef, householdData);
  return newHousehold;
}

export async function getFirebaseHouseholds(): Promise<HouseholdState> {
  const snapshot = await getDocs(collection(db, 'households'));
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs[0] as HouseholdState;
}

export async function updateFirebaseHousehold(householdData: Household) {
  const householdRef = doc(db, 'households', householdData.id);
  await setDoc(householdRef, householdData);
}

export async function deleteFirebaseHousehold(householdId: string) {
  await deleteDoc(doc(db, 'households', householdId));
}
