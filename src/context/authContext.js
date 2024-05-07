import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})
    function signUp(email, passowrd){
       createUserWithEmailAndPassword(auth, email, passowrd)
       setDoc(doc(db, 'users', email), {
        savedShows: []
       })
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscrribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscrribe()
        }
    })
    function logOut(){
        return signOut(auth)
    }
  return <AuthContext.Provider value={{signUp, logIn, logOut, user}}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
