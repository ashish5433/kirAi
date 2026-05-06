
import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
import {getFirestore} from '@firebase/firestore'

import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVp3NNox6CbH7Lkn1asW8kxxXOVE",
  authDomain: "imageupload.firebaseapp.com",
  projectId: "imageupload",
  storageBucket: "imageupl.appspot.com",
  messagingSenderId: "",
  appId: "1:697179"
};


export const app = initializeApp(firebaseConfig);


//todo Firestore Connection...
export const db=getFirestore(app)

export const storage = getStorage(app)

export const auth =getAuth(app)

export const provider=new GoogleAuthProvider()
