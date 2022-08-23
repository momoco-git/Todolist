//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDDwD4g-wdP41oo93_WjgIIgnLNB3IdbVY",
  authDomain: "reactprac-d1c8d.firebaseapp.com",
  projectId: "reactprac-d1c8d",
  storageBucket: "reactprac-d1c8d.appspot.com",
  messagingSenderId: "729857422562",
  appId: "1:729857422562:web:366291401d5a250bb31abb",
  measurementId: "G-R6GBCVQE04"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
export const db = getFirestore(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
 
export const auth = getAuth();
