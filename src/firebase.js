import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDVfKcQ_HasNYlQdlSHD3ZmKLofQ_AGtqM",
  authDomain: "netflix-clone-ff698.firebaseapp.com",
  projectId: "netflix-clone-ff698",
  storageBucket: "netflix-clone-ff698.appspot.com",
  messagingSenderId: "349203924381",
  appId: "1:349203924381:web:e3baf2e3ff06500f785b74"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}


const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}


const logout = ()=>{
  signOut(auth)
}

export {auth, db, login, signup, logout};