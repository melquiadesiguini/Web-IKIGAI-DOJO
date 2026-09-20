import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase.js';

const AUTH_ERRORS = {
  'auth/invalid-email': 'El correo no es válido.',
  'auth/email-already-in-use': 'Ya existe una cuenta con ese correo.',
  'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
  'auth/invalid-credential': 'Correo o contraseña incorrectos.',
  'auth/user-not-found': 'Correo o contraseña incorrectos.',
  'auth/wrong-password': 'Correo o contraseña incorrectos.',
  'auth/too-many-requests': 'Demasiados intentos. Probá de nuevo en unos minutos.',
  'auth/network-request-failed': 'No hay conexión. Revisá tu internet e intentá otra vez.',
};

export const authErrorMessage = (error) => AUTH_ERRORS[error?.code] || 'No se pudo completar la operación. Intentá de nuevo.';

export const toUser = (firebaseUser) => ({
  uid: firebaseUser.uid,
  email: firebaseUser.email,
  name: firebaseUser.displayName || '',
});

export const watchAuth = (callback) => {
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, (firebaseUser) => callback(firebaseUser ? toUser(firebaseUser) : null));
};

export const registerUser = async (name, email, password) => {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(credential.user, { displayName: name });
  return { uid: credential.user.uid, email: credential.user.email, name };
};

export const loginUser = async (email, password) => toUser((await signInWithEmailAndPassword(auth, email, password)).user);

export const logoutUser = () => signOut(auth);

export const loadUserData = async (uid) => {
  const snapshot = await getDoc(doc(db, 'users', uid));
  return snapshot.exists() ? snapshot.data() : {};
};

export const saveUserData = (uid, data) => setDoc(doc(db, 'users', uid), data, { merge: true });
