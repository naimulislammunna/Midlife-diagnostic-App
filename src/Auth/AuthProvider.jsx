import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import Loading from '../Components/Loader/Loading';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUserInfo(currentUser);
                setLoading(false);
            }
        })
        return () => {
            unsubscribe();
        };
    }, [])

    const info = {
        handleRegister,
        handleSignIn,
        logOut, 
        userInfo,
        loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;