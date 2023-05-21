import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Authentication/firebase.config';


export const AuthContext = createContext();
const auth= getAuth(app);

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
    const authIfo = {
        loading,
        createUser,
        logIn
    }
    return (
        <AuthContext.Provider value={authIfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;