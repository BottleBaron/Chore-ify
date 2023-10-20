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
import { Account } from '../src/redux/slices/accountSlice';

// NOTE: Do not use these until I have finished configuring auth.

export async function createFirebaseAccount(accountData: Account) {
  const docRef = await addDoc(collection(db, 'accounts'), accountData);
  const newAccount = { ...accountData, id: docRef.id };
  updateFirebaseAccount(newAccount);
  return newAccount;
}

export async function getFirebaseAccounts(): Promise<Account[]> {
  const snapshot = await getDocs(collection(db, 'accounts'));
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs[0] as Account[];
}

export async function updateFirebaseAccount(accountData: Account) {
  const accountRef = doc(db, 'accounts', accountData.id);
  await setDoc(accountRef, accountData);
}

export async function deleteFirebaseAccount(accountId: string) {
  await deleteDoc(doc(db, 'accounts', accountId));
}
