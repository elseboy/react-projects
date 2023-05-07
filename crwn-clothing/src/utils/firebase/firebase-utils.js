import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyACoxxiwD6tQew2AsPhMXGQDhOKibF80EI',
  authDomain: 'crwn-clothing-db-817d5.firebaseapp.com',
  projectId: 'crwn-clothing-db-817d5',
  storageBucket: 'crwn-clothing-db-817d5.appspot.com',
  messagingSenderId: '738185332874',
  appId: '1:738185332874:web:14c5d47daf4e970cf70573',
  measurementId: 'G-CYXHCDD6H7',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
