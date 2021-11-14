import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOuayvzGN7bBFXnRxxevI9jokaZXepGrM",
  authDomain: "mythos-hunter.firebaseapp.com",
  projectId: "mythos-hunter",
  storageBucket: "mythos-hunter.appspot.com",
  messagingSenderId: "750542805011",
  appId: "1:750542805011:web:24e1ba0189b3b1710707e6",
  measurementId: "G-48KK8S4E5E",
};  // Initialize Firebase e
export const app = initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
