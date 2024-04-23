import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsNPp1ZhfVPFeI4pcPHFntn5jZpmAIVn0",
  authDomain: "the-timeless-tutor.firebaseapp.com",
  projectId: "the-timeless-tutor",
  storageBucket: "the-timeless-tutor.appspot.com",
  messagingSenderId: "131395277475",
  appId: "1:131395277475:web:76f641a5094d9fd6e1e516",
  measurementId: "G-WBG4LWDNSG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);