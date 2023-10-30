/* eslint-disable prettier/prettier */
import { UserToChoreTableDTO } from '@src/redux/slices/userToChoreSlice';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import db from '../firebaseConfig';

export async function createFirebaseUserToChoreTable(
  userToChoreData: UserToChoreTableDTO,
) {
  const docRef = await addDoc(
    collection(db, 'UsersToChoresTable'),
    userToChoreData,
  );
  const newUserToChoreTable = { ...userToChoreData, id: docRef.id };
  updateFirebaseUserToChoreTable(newUserToChoreTable);
  return newUserToChoreTable;
}

export async function getFirebaseUserToChoreTable(): Promise<
  UserToChoreTableDTO[]
> {
  //   const q = query(
  //     collection(db, 'usersToChores'),
  //     where('householdId', 'in', householdIds),
  //   );
  const snapshot = await getDocs(collection(db, 'usersToChores'));
  const allDocs = snapshot.docs.map((doc) => doc.data());

  return allDocs as UserToChoreTableDTO[];
}

export async function updateFirebaseUserToChoreTable(
  userToChoreData: UserToChoreTableDTO,
) {
  const userToChoreRef = doc(db, 'usersToChores', userToChoreData.id);
  await setDoc(userToChoreRef, userToChoreData);
}

export async function deleteFirebaseUserToChoreTable(userToChoreId: string) {
  await deleteDoc(doc(db, 'usersToChores', userToChoreId));
}
