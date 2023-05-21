import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from '../Authentication/firebase.config';


export const AuthContext = createContext();
const auth= getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
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
    const authIfo = {
        loading,
        createUser,
        logIn,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authIfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;