import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyACnAY2miR4A6SFgvKmwfZ8OXEbW8gUBzU",
  authDomain: "fir-chat-app-73c83.firebaseapp.com",
  projectId: "fir-chat-app-73c83",
  storageBucket: "fir-chat-app-73c83.appspot.com",
  messagingSenderId: "595222348421",
  appId: "1:595222348421:web:4a3024a6b0fa933f471fec"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const db =getFirestore(app);