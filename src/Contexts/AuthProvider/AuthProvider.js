import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config.js';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext= createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);

    const providerLogin=(provider) =>{
        return signInWithPopup(auth,provider);
    }

    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });

        return ()=> {
            unSubscribe();
        }
    }, [])

    const authInfo= {user,providerLogin,logOut, createUser, signIn, loading, updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;