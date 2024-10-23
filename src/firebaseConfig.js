import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCPfLHQPM-n_k0AJLsXwtpznZlukbXL2k",
  authDomain: "taskify-e76f7.firebaseapp.com",
  projectId: "taskify-e76f7",
  storageBucket: "taskify-e76f7.appspot.com",
  messagingSenderId: "953367726856",
  appId: "1:953367726856:web:ce9765b1b28ca6279dbabd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
