import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,updateProfile} from "firebase/auth";
import app from '../Authentication/firebase.config';


export const AuthContext = createContext();
const auth= getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    //create user
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // sign in
    const logIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // login with google
    const loginWithGoogle = ()=> {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    // observer

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
        setUser(loggedUser);
        setLoading(false);
    })
    return (()=> {
        return unsubscribe();
    })
    
},[])

    // log out
    const logOut = ()=> {
            return signOut(auth);
    }
    // update user info
    const updateUserInfo = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const authIfo = {
        loading,
        user,
        createUser,
        logIn,
        loginWithGoogle,
        logOut,
        updateUserInfo

    }
    return (
        <AuthContext.Provider value={authIfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;