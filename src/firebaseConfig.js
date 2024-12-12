import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpJplNx-06C6lrlvVo6Hc8wDW4WagwXwg",
  authDomain: "comsion-65650.firebaseapp.com",
  projectId: "comsion-65650",
  storageBucket: "comsion-65650.firebasestorage.app",
  messagingSenderId: "968761514118",
  appId: "1:968761514118:web:fceb9f1746f43c374fd907",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
