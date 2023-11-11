import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSmHTMQep0QnzUSUlvRZ7YBZIUEQ_rufc",
  authDomain: "ruan-pereira-mattos.firebaseapp.com",
  databaseURL: "https://ruan-pereira-mattos-default-rtdb.firebaseio.com",
  projectId: "ruan-pereira-mattos",
  storageBucket: "ruan-pereira-mattos.appspot.com",
  messagingSenderId: "317244589062",
  appId: "1:317244589062:web:dc4e84a8c919f376f26f87",
  measurementId: "G-DCM973P1CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

console.log(storage);
