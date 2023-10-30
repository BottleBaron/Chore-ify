/* eslint-disable @typescript-eslint/no-shadow */
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
import { Household } from '../src/redux/slices/householdSlice';

export async function createFirebaseHousehold(householdData: Household) {
  const docRef = await addDoc(collection(db, 'households'), householdData);
  const newHousehold = { ...householdData, id: docRef.id };
  updateFirebaseHousehold(newHousehold);
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

export async function getFirebaseHouseholdsByCode(
  houseHoldCode: string,
): Promise<Household | undefined> {
  const q = query(
    collection(db, 'households'),
    where('accessCode', '==', houseHoldCode),
    // Begränsa resultatet till det första dokumentet
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    return undefined; // Om det inte finns några matchande dokument, returnera undefined
  }
  const firstDoc = snapshot.docs[0].data(); // Hämta det första dokumentet från snapshot
  return firstDoc as Household; // Returnera det första dokumentet som en Household
}

export async function updateFirebaseHousehold(householdData: Household) {
  const householdRef = doc(db, 'households', householdData.id);
  await setDoc(householdRef, householdData);
}

export async function deleteFirebaseHousehold(householdId: string) {
  await deleteDoc(doc(db, 'households', householdId));
}
