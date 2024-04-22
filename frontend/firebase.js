import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0-PI5rAc96BENPGh9XmEuWnNPMkFgAc0",
  authDomain: "zetsy-202cf.firebaseapp.com",
  projectId: "zetsy-202cf",
  storageBucket: "zetsy-202cf.appspot.com",
  messagingSenderId: "918496929941",
  appId: "1:918496929941:web:64c645c21a31c46bdb139c",
  measurementId: "G-SH2FY1FPTM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);